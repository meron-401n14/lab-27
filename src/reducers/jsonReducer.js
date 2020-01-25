
import {JSON_CHANGE} from '../actions/types';






//const initialState = {inputs: [], type:'json'}

const isJsonValid=txt=>{
  try {
    JSON.parse(txt);
  } catch (e) {
    return false;
  }

  return true;
};

const jsonInit = {
  jsonTxt: '{}',
  jsonObj:{},
  isValid:true
}
 
  export default function(state= jsonInit, action ) {

  let newState = {...state};

   switch(action.type) {
     case JSON_CHANGE:
       newState.jsonTxt = action.data;
       newState.isValid = isJsonValid(action.data);
       if(newState.isValid) newState.jsonObj=JSON.parse(action.data);
       break;
       default:
          break;
   }
  return newState;
}
