import React, { useEffect, useState } from "react";
import "./styles.css";
import { MovieList } from "./components/MovieList";
import { MovieListHeading } from "./components/MovieListHeading";
import { SearchBox } from "./components/SearchBox";
import { AddFavorites } from "./components/AddFavorites";
import { RemoveFromFavourites } from "./components/removeFromFavourites";

export const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState([]);
  const [favourites, setFavourites] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchVal}&i=tt3896198&apikey=7f1bab57`;

    const response = await fetch(url);
    let data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, [getMovieRequest]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("favourites"));
    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="movie-app">
      <div className="heading">
        <MovieListHeading heading="Movies" />
        <SearchBox searchVal={searchVal} setSearchVal={setSearchVal} />
      </div>
      <MovieList
        handleFavourites={addFavouriteMovie}
        movies={movies}
        favouriteComponent={AddFavorites}
      />
      <MovieListHeading heading="Favourites" />
      <MovieList
        handleFavourites={removeFavouriteMovie}
        movies={favourites}
        favouriteComponent={RemoveFromFavourites}
      />
    </div>
  );
};
