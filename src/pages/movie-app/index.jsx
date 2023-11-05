import React, { useEffect, useState } from "react";
import "./styles.css";
import { MovieList } from "./components/MovieList";
import { MovieListHeading } from "./components/MovieListHeading";
import { SearchBox } from "./components/SearchBox";

export const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchVal}&i=tt3896198&apikey=7f1bab57`;

    const response = await fetch(url);
    let data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, [getMovieRequest]);

  return (
    <div className="movie-app">
      <MovieListHeading heading="Movies" />
      <SearchBox searchVal={searchVal} setSearchVal={setSearchVal} />

      <MovieList movies={movies} />
    </div>
  );
};
