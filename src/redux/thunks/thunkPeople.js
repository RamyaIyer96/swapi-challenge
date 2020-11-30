import {
    getPeopleRequest,
    getPeopleSuccess,
    getPeopleFailure,
    getPeopleDetailRequest,
    getPeopleDetailSuccess,
    getPeopleDetailFailure
  } from "../actions/actionCreators";
  
  export function getPeople() {
    return async dispatch => {
      dispatch(getPeopleRequest());
  
      try {
        const request = await fetch(`https://swapi.dev/api/people/`);
        const response = await request.json();
        const people = response.results;
  
        dispatch(getPeopleSuccess(people));
      } catch (error) {
        dispatch(getPeopleFailure(error));
      }
    };
  }
  export function getPeopleDetail(id) {
    return async dispatch => {
      dispatch(getPeopleDetailRequest());
  
      try {
        const request = await fetch(`https://swapi.dev/api/people/${id}/`);
        const response = await request.json();
        const peopleDetail = response;
  
       
        dispatch(
            getPeopleDetailSuccess(
                peopleDetail,
          )
        );
      } catch (error) {
        dispatch(getPeopleDetailFailure(error));
      }
    };
  }
  