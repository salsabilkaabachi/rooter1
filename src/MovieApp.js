import { useState } from "react";
import FilterCard from "./components/Filter";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddCard";
function MovieApp({ film, setFilm }) {
           const [textT, setTextT] = useState("");
           const [rateR, setRateR] = useState("");
           const [movieListData, setMovieListData] = useState(film);
           const getMoviesListData=(input)=>{
             setMovieListData([...movieListData ,input]); }
  return (
    <div>
      <br />
      <FilterCard
        rateR={rateR}
        setTextT={setTextT}
        setRateR={setRateR}
      ></FilterCard>
      <div className="addMovie">
        <AddMovie getMoviesListData={getMoviesListData} />
      </div>

      <MovieList
        film={movieListData}
        textT={textT}
        rateR={rateR}
        setFilm={setFilm}
      ></MovieList>
    </div>
  );
}
export default MovieApp;
