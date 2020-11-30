import {
    getPlanetsRequest,
    getPlanetsSuccess,
    getPlanetsFailure,
    getPlanetDetailRequest,
   getPlanetDetailSuccess,
   getPlanetDetailFailure,
  } from "../actions/actionCreators";
  
  export function getPlanets() {
    return async dispatch => {
      dispatch(getPlanetsRequest());
  
      try {
        const request = await fetch(`https://swapi.dev/api/planets/`);
        const response = await request.json();
        const planets = response.results;
  
        dispatch(getPlanetsSuccess(planets));
      } catch (error) {
        dispatch(getPlanetsFailure(error));
      }
    };
  }
  export function getPlanetDetail(id) {
    return async dispatch => {
      dispatch(getPlanetDetailRequest());
  
      try {
        const request = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const response = await request.json();
        const planet = response;
       
        dispatch(
            getPlanetDetailSuccess(
                planet,
          )
        );
      } catch (error) {
        dispatch(getPlanetDetailFailure(error));
      }
    };
  }
  
  