// MovieList.js
import React from "react";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="movie-list-container">
      <div className="movie-list">
        {props.movies &&
          props.movies.map((movie, index) => {
            return (
              <div className="image-container" key={index}>
                <img src={movie.Poster} alt="movie" />
                <div
                  onClick={() => props.handleFavourites(movie)}
                  className="overlay"
                >
                  <FavouriteComponent />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
