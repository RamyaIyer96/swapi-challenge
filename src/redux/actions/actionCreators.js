import {
   
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE,
    GET_MOVIE_DETAIL_REQUEST,
    GET_MOVIE_DETAIL_SUCCESS,
    GET_MOVIE_DETAIL_FAILURE,
    GET_PLANET_REQUEST,
    GET_PLANET_SUCCESS,
    GET_PLANET_FAILURE,
    GET_PLANET_DETAIL_REQUEST,
    GET_PLANET_DETAIL_SUCCESS,
    GET_PLANET_DETAIL_FAILURE,
    GET_PEOPLE_REQUEST,
    GET_PEOPLE_SUCCESS,
    GET_PEOPLE_FAILURE,
    GET_PEOPLE_DETAIL_REQUEST,
    GET_PEOPLE_DETAIL_SUCCESS,
    GET_PEOPLE_DETAIL_FAILURE,
  } from "./actionTypes";
  
  
  
  /* =====================
  -------- MOVIES --------
  =======================*/
  export const getMoviesRequest = () => ({ type: GET_MOVIES_REQUEST });
  
  export const getMoviesSuccess = movies => ({
    type: GET_MOVIES_SUCCESS,
    payload: { movies }
  });
  
  export const getMoviesFailure = error => ({
    type: GET_MOVIES_FAILURE,
    payload: { error }
  });

  /* =====================
-------- MOVIE DETAIL--------
=======================*/
export const getMovieDetailRequest = () => ({ type: GET_MOVIE_DETAIL_REQUEST });

export const getMovieDetailSuccess = (
  movie
) => ({
  type: GET_MOVIE_DETAIL_SUCCESS,
  payload: {
    movie
  }
});

export const getMovieDetailFailure = error => ({
  type: GET_MOVIE_DETAIL_FAILURE,
  payload: { error }
});
  
  
  
  
  /* =====================
  -------- PLANET --------
  =======================*/
  export const getPlanetsRequest = () => ({ type: GET_PLANET_REQUEST });
  
  export const getPlanetsSuccess = (planets) => ({
    type: GET_PLANET_SUCCESS,
    payload: { planets }
  });
  
  export const getPlanetsFailure = error => ({
    type: GET_PLANET_FAILURE,
    payload: { error }
  });


  /* =====================
-------- PLANET DETAIL--------
=======================*/
export const getPlanetDetailRequest = () => ({ type: GET_PLANET_DETAIL_REQUEST });

export const getPlanetDetailSuccess = (
  planet
) => ({
  type: GET_PLANET_DETAIL_SUCCESS,
  payload: {
    planet
  }
});

export const getPlanetDetailFailure = error => ({
  type: GET_PLANET_DETAIL_FAILURE,
  payload: { error }
});
  
  
  /* =====================
  -------- PEOPLE --------
  =======================*/
  export const getPeopleRequest = () => ({ type: GET_PEOPLE_REQUEST });
  
  export const getPeopleSuccess = (people) => ({
    type: GET_PEOPLE_SUCCESS,
    payload: { people }
  });
  
  export const getPeopleFailure = error => ({
    type: GET_PEOPLE_FAILURE,
    payload: { error }
  });
  /* =====================
-------- PEOPLE DETAIL--------
=======================*/
export const getPeopleDetailRequest = () => ({ type: GET_PEOPLE_DETAIL_REQUEST });

export const getPeopleDetailSuccess = (
  peopleDetail
) => ({
  type: GET_PEOPLE_DETAIL_SUCCESS,
  payload: {
    peopleDetail
  }
});

export const getPeopleDetailFailure = error => ({
  type: GET_PEOPLE_DETAIL_FAILURE,
  payload: { error }
});