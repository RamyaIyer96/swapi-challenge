import { initialState } from "../store/store";

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
} from "../actions/actionTypes";

export function reducer(state = initialState, action) {
  switch (action.type) {
    /* =====================
    -------- MOVIES --------
    =======================*/
    case GET_MOVIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_MOVIES_SUCCESS: {
      const { movies } = action.payload;

      return {
        ...state,
        movies,
        isLoading: false,
      };
    }

    case GET_MOVIES_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false,
      };
    }
    /* =====================
    -------- MOVIE DETAIL--------
    =======================*/
    case GET_MOVIE_DETAIL_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_MOVIE_DETAIL_SUCCESS: {
      const {
        movie,
      } = action.payload;

      return {
        ...state,
        movie,
        isLoading: false
      };
    }

    case GET_MOVIE_DETAIL_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    /* =====================
    -------- PLANET --------
    =======================*/
    case GET_PLANET_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_PLANET_SUCCESS: {
      const { planets } = action.payload;

      return {
        ...state,
        planets,
        isLoading: false,
      };
    }

    case GET_PLANET_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false,
      };
    }
     /* =====================
    -------- Planet DETAIL--------
    =======================*/
    case GET_PLANET_DETAIL_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_PLANET_DETAIL_SUCCESS: {
      const {
        planet,
      } = action.payload;

      return {
        ...state,
        planet,
        isLoading: false
      };
    }

    case GET_PLANET_DETAIL_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    /* =====================
    -------- PEOPLE --------
    =======================*/
    case GET_PEOPLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_PEOPLE_SUCCESS: {
      const { people } = action.payload;

      return {
        ...state,
        people,
        isLoading: false,
      };
    }
    case GET_PEOPLE_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false,
      };
    }
     /* =====================
    -------- MOVIE DETAIL--------
    =======================*/
    case GET_PEOPLE_DETAIL_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case GET_PEOPLE_DETAIL_SUCCESS: {
      const {
        peopleDetail,
      } = action.payload;

      return {
        ...state,
        peopleDetail,
        isLoading: false
      };
    }

    case GET_PEOPLE_DETAIL_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        error,
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
}
