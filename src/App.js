import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { useEffect, useState } from 'react';
import Movie from './pages/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [moviePage, setMoviePage] = useState({});
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState('');
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&query=${search}&${page}`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(movies);
    };
    fetchSearch();
  }, [search]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US`
      );
      const data = await response.json();
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className='bg-black text-white w-full'>
      <Router>
        <Navbar
          setSearch={setSearch}
          search={search}
          movies={movies}
          movieId={movieId}
          setMovieId={setMovieId}
        />
        <Routes>
          <Route path='/' element={<Homepage movies={movies} />} />
          <Route
            path='/movie/:id'
            element={<Movie movieDetails={movieDetails} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
