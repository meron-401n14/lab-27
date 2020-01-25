import {JSON_CHANGE} from './types';


export const jsonChange = () => dispatch => {
  return dispatch ({
    type: JSON_CHANGE,
    payload: {}

  })
}