(this["webpackJsonpcinema-list"]=this["webpackJsonpcinema-list"]||[]).push([[0],{117:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(38),o=n.n(i),c=(n(117),n(16)),s=n(55),l=n.n(s),d=n(79),m=n(10),j=n(98),u=n(176),x=n(14),f=n(178),v=n(80),b=n(179),h=n(173),p=n(174),g=n(34),O=n(1),y={col:{background:"#ffffff",borderRadius:"1rem",width:{xs:"100%",sm:"40%",md:"40%"},marginBottom:".75rem"},search:{maxWidth:"100%"},heading:{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"center",marginX:".5rem",fontSize:"1.2rem"},movieItem:{display:"flex",flexDirection:"column",margin:"1rem",color:"#000000",textDecoration:"none"},title:{color:"#ffffff",textDecoration:"none",underline:"none",marginY:"1rem"}};function w(e){var t=e.heading,n=e.setSearchValue,r=e.movies;e.trending;return Object(O.jsxs)(f.a,{sx:y.heading,children:[Object(O.jsx)(g.b,{to:"/",className:"title",underline:"none",children:Object(O.jsx)(b.a,{underline:"none",sx:y.title,variant:"h3",children:t})}),Object(O.jsx)(f.a,{sx:y.col,children:Object(O.jsx)(h.a,{selectOnFocus:!0,sx:y.search,options:r,getOptionLabel:function(e){return e.title},renderOption:function(e){return Object(O.jsx)(g.b,{to:"/movie/".concat(e.key.replace(/[.':\s]/g,"")),children:Object(O.jsx)(b.a,{underline:"none",sx:y.movieItem,children:e.key})},e.key)},renderInput:function(e){return Object(O.jsx)(p.a,Object(v.a)(Object(v.a)({},e),{},{label:"Search"}))},onInputChange:function(e){return n(e.target.value)},onChange:function(e,t){n(t)}})})]})}var k=n(177),S=n(96),C=n.n(S),F={favorite:{marginLeft:"1rem",fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"10"},heart:{marginLeft:"5px",fontSize:"20px"}};function D(){return Object(O.jsx)(f.a,{children:Object(O.jsxs)(b.a,{sx:F.favorite,children:["Remove Favorite ",Object(O.jsx)(C.a,{sx:F.heart})]})})}var I={row:{display:"flex",flexDirection:"row",overflowX:"auto",overflowY:"hidden",justifyContent:"start"},button:{paddingY:"1rem",padding:".75rem",opacity:1},remove:{zIndex:10}};function B(e){var t=e.favorites,n=e.removeFavoriteMovie;return Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{variant:"h3",fontWeight:"light",m:1,children:"Favorites"}),Object(O.jsx)(f.a,{sx:I.row,children:t.filter((function(e){return null!==e.poster_path})).map((function(e,t){return Object(O.jsx)(f.a,{className:"image-container",children:Object(O.jsxs)(k.a,{sx:I.button,children:[Object(O.jsx)(g.b,{to:"/movie/".concat(e.title.replace(/[.':\s]/g,"")),children:Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:"movie"})}),Object(O.jsx)(f.a,{className:"overlay",onClick:function(){return n(e)},children:Object(O.jsx)(D,{})})]})},t)}))})]})}var z=n(97),M=n.n(z),Y={favorite:{marginLeft:"1rem",fontSize:"12px",display:"flex",alignItems:"center"},heart:{marginLeft:"5px",fontSize:"20px"}};function _(){return Object(O.jsx)(f.a,{children:Object(O.jsxs)(b.a,{sx:Y.favorite,children:["Add Favorite ",Object(O.jsx)(M.a,{sx:Y.heart})]})})}var R={row:{display:"flex",flexDirection:"row",overflowX:"auto",overflowY:"hidden",justifyContent:"start"},button:{paddingY:"1rem",padding:".75rem",opacity:1}};function N(e){var t=e.trending,n=e.handleFavoriteClick;return Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{variant:"h3",fontWeight:"light",m:1,children:"Trending"}),Object(O.jsx)(f.a,{sx:R.row,children:t.filter((function(e){return null!==e.poster_path})).map((function(e,t){return Object(O.jsx)(f.a,{className:"image-container",children:Object(O.jsxs)(k.a,{sx:R.button,children:[Object(O.jsx)(g.b,{to:"/movie/".concat(e.title.replace(/[.':\s]/g,"")),children:Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.poster_path),alt:"movie",onClick:function(){return console.log("you clicked me")}})}),Object(O.jsx)(f.a,{className:"overlay",onClick:function(){return n(e)},children:Object(O.jsx)(_,{})})]})},t)}))})]})}var V={row:{display:"flex",flexDirection:"row",overflowX:"auto",overflowY:"hidden",justifyContent:"start","&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid slategrey"}},heading:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginX:".5rem",fontSize:"1.2rem"},headBox:{paddingBottom:".75rem",borderBottom:"1px solid grey"},movieRow:{display:"flex",flexDirection:"column",alignItems:"center",marginY:"1rem",padding:".75rem",fontSize:"1.2rem",transition:"transform .5s","&:hover":{transform:"scale(1.05)"}},button:{paddingY:"1rem",padding:".75rem",opacity:1},overlay:{position:"absolute",background:"rgba(0, 0, 0, 0.8)",width:"100%",transition:"0.5 ease",opacity:0,bottom:0,fontSize:"1.2rem",padding:"20px",textAlign:"center","&:hover":{opacity:"1"}}};function L(e){var t=e.movies,n=e.setSearchValue,r=e.handleFavoriteClick,a=e.favorites,i=e.removeFavoriteMovie,o=e.trending;return Object(O.jsxs)(f.a,{children:[Object(O.jsx)(f.a,{sx:V.headBox,children:Object(O.jsx)(w,{heading:"My Rewind",setSearchValue:n,movies:t})}),Object(O.jsx)(f.a,{children:Object(O.jsx)(N,{trending:o,handleFavoriteClick:r})}),Object(O.jsx)(f.a,{children:Object(O.jsx)(B,{favorites:a,removeFavoriteMovie:i})})]})}var X=n(95),A=n(180),J={headBox:{paddingBottom:".75rem",borderBottom:"1px solid grey",display:"flex",flexDirection:"column"},overlay:{position:"absolute",background:"rgba(0, 0, 0, 0.8)",width:"100%",transition:"0.5 ease",opacity:0,bottom:0,fontSize:"1.2rem",padding:"20px",textAlign:"center","&:hover":{opacity:"1"}},movieCard:{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"center",alignItems:"center",background:"#0f0f0f",padding:"5%",margin:{xl:"5% 20%"},color:"#ffffff"},movieContent:{padding:"5%"},movieDetails:{marginY:"1rem"},movieButtons:{marginY:"1rem",display:"flex"},button:{marginRight:"1rem",marginBottom:"1rem",width:"100%"}};function E(e){var t=e.movies,n=e.setSearchValue,r=e.trending,a=e.addFavoriteMovie,i=e.removeFavoriteMovie,o=r.concat(t);return console.log(o),Object(O.jsxs)(f.a,{children:[Object(O.jsx)(f.a,{sx:J.headBox,children:Object(O.jsx)(w,{heading:"My Rewind",setSearchValue:n,movies:t})}),o.filter((function(e){return"/movie/".concat(e.title.replace(/[.':\s]/g,""))===window.location.pathname})).map((function(e){return Object(O.jsxs)(A.a,{sx:J.movieCard,elevation:8,children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:"movie"}),Object(O.jsxs)(f.a,{sx:J.movieContent,children:[Object(O.jsxs)(f.a,{children:[Object(O.jsx)(b.a,{sx:J.movieDetails,variant:"h2",children:e.title}),Object(O.jsxs)(b.a,{sx:J.movieDetails,variant:"h6",children:["Released: ",e.release_date.slice(0,4)]}),Object(O.jsxs)(b.a,{sx:J.movieDetails,variant:"h6",children:["Rating: ",e.vote_average," / 10"]}),Object(O.jsx)(b.a,{sx:J.movieDetails,children:e.overview})]}),Object(O.jsxs)(f.a,{sx:J.movieButtons,children:[Object(O.jsx)(k.a,{variant:"contained",sx:J.button,onClick:function(){return a(e)},children:"Add Favorite"}),Object(O.jsx)(k.a,{variant:"contained",sx:J.button,onClick:function(){return i(e)},children:"Remove Favorite"})]})]})]},e.id)}))]})}var W=Object(j.a)({palette:{primary:X.a}});var q=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)([]),o=Object(m.a)(i,2),s=o[0],j=o[1],f=Object(r.useState)("star wars"),v=Object(m.a)(f,2),b=v[0],h=v[1],p=Object(r.useState)([]),g=Object(m.a)(p,2),y=g[0],w=g[1],k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&query=".concat(t),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:void 0!==(i=e.sent).results&&a(i.results);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/week?api_key=8a2b9a4f857805da801ad11b8a954949",e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=8a2b9a4f857805da801ad11b8a954949");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,w(n.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){k(b)}),[b]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favorites"));j(e),S()}),[]);var C=function(e){localStorage.setItem("react-movie-app-favorites",JSON.stringify(e))},F=function(e){var t=[].concat(Object(c.a)(s),[e]);0===s.filter((function(t){return t.id===e.id})).length&&(C(t),j(t))},D=function(e){var t=s.filter((function(t){return t.id!==e.id}));j(t),C(t)};return Object(O.jsx)(u.a,{theme:W,children:Object(O.jsxs)(x.c,{children:[Object(O.jsx)(x.a,{path:"/",element:Object(O.jsx)(L,{movies:n,handleFavoriteClick:F,setSearchValue:h,favorites:s,removeFavoriteMovie:D,trending:y})}),Object(O.jsx)(x.a,{path:"/movie/:title",element:Object(O.jsx)(E,{movies:n,setSearchValue:h,addFavoriteMovie:F,removeFavoriteMovie:D,trending:y})})]})})};o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g.a,{children:Object(O.jsx)(q,{})})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.c8c24529.chunk.js.map