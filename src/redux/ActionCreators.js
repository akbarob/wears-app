import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// WOMEN
export const fetchwomen= () => (dispatch) => {
    dispatch(womenLoading(true));
    return fetch(baseUrl + 'women')
    .then(response =>{
        if(response.ok){
          return response
        }
        else {
          var error = new Error('Error ' + response.status + ':' + response.statusText)
          error.response = response
          throw error
        }
      },
      error => {
        var errmess = new Error(error.message)
        throw errmess
      })
      .then(response => response.json())
      .then(women => dispatch(addWomen(women)))
      .catch(error => dispatch(womenFailed(error.message)))

}
export const womenLoading = () => ({
    type: ActionTypes.WOMEN_LOADING
});
export const womenFailed = (errmess) => ({
    type: ActionTypes.WOMEN_FAILED,
    payload: errmess
});

export const addWomen = (women) => ({
    type: ActionTypes.ADD_WOMEN,
    payload: women
});

//MEN
export const fetchmen= () => (dispatch) => {
  dispatch(menLoading(true));
  return fetch(baseUrl + 'men')
  .then(response =>{
      if(response.ok){
        return response
      }
      else {
        var error = new Error('Error ' + response.status + ':' + response.statusText)
        error.response = response
        throw error
      }
    },
    error => {
      var errmess = new Error(error.message)
      throw errmess
    })
    .then(response => response.json())
    .then(men => dispatch(addMen(men)))
    .catch(error => dispatch(menFailed(error.message)))

}
export const menLoading = () => ({
  type: ActionTypes.MEN_LOADING
});
export const menFailed = (errmess) => ({
  type: ActionTypes.MEN_FAILED,
  payload: errmess
});

export const addMen = (men) => ({
  type: ActionTypes.ADD_MEN,
  payload: men
});