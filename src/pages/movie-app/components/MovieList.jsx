import React from "react";

export const MovieList = (props) => {
  return (
    <>
      {props.movies &&
        props.movies.map((movie, index) => {
          return (
            <div key={index}>
              <img src={movie.Poster} alt="movie" />
            </div>
          );
        })}
    </>
  );
};
