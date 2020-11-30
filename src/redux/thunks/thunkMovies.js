import {
    getMoviesRequest,
    getMoviesSuccess,
    getMoviesFailure,
    getMovieDetailRequest,
    getMovieDetailSuccess,
    getMovieDetailFailure,
  } from "../actions/actionCreators";
  
  export function getMovies() {
    return async dispatch => {
      dispatch(getMoviesRequest());
  
      try {
        const request = await fetch(`https://swapi.dev/api/films/`);
        const response = await request.json();
        const movies = response.results;
        dispatch(getMoviesSuccess(movies));
      } catch (error) {
        dispatch(getMoviesFailure(error));
      }
    };
  }
  export function getMovie(id) {
    return async dispatch => {
      dispatch(getMovieDetailRequest());
  
      try {
        const request = await fetch(`https://swapi.dev/api/films/${id}/`);
        const response = await request.json();
        const movie = response;
  
       
        dispatch(
            getMovieDetailSuccess(
            movie,
          )
        );
      } catch (error) {
        dispatch(getMovieDetailFailure(error));
      }
    };
  }

  
  