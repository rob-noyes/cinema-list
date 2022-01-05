import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { useEffect, useState } from 'react';
import Movie from './pages/Movie';
import Cast from './pages/Cast';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Movies from './pages/Movies';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState('');
  const [movieDetails, setMovieDetails] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&query=${search}`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchSearch();
  }, [search]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&append_to_response=videos,credits,recommendations,similar`
      );
      const data = await response.json();
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    //Gets trending movies from TMDB
    const fetchTrendingMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=8a2b9a4f857805da801ad11b8a954949`
      );
      const data = await response.json();
      setTrending(data.results);
    };

    //Gets Top Rated movies from TMDB

    //Gets Upcoming movies from TMDB
    const fetchUpcoming = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=8a2b9a4f857805da801ad11b8a954949`
      );
      const data = await response.json();
      setUpcoming(data.results);
    };

    fetchTrendingMovies();
    fetchUpcoming();
  }, []);

  useEffect(() => {
    const fetchTopRated = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=8a2b9a4f857805da801ad11b8a954949&page=${page}`
      );
      const data = await response.json();
      console.log(data);
      setTopRated(data.results);
    };
    fetchTopRated();
  }, [page]);

  return (
    <div className='bg-black lg:bg-tertiary text-white w-full font-sans'>
      <Router>
        <Navbar
          setSearch={setSearch}
          search={search}
          movies={movies}
          movieId={movieId}
          setMovieId={setMovieId}
          setPage={setPage}
        />
        <ScrollToTop />
        <Routes>
          <Route
            path='/'
            element={
              <Homepage
                trending={trending}
                setMovieDetails={setMovieDetails}
                setMovieId={setMovieId}
                movieId={movieId}
                topRated={topRated}
                upcoming={upcoming}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <Movies
                setMovieId={setMovieId}
                topRated={topRated}
                setPage={setPage}
                page={page}
              />
            }
          />
          <Route
            path='/movie/:id'
            element={
              <Movie movieDetails={movieDetails} setMovieId={setMovieId} />
            }
          />
          <Route
            path='/movie/:id/cast'
            element={<Cast movieDetails={movieDetails} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
