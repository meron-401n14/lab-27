import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


// JSON RELATED REDUCER

const initialState ={}




// combine reducer 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default createStore(rootReducer,  initialState, composeEnhancers (applyMiddleware(thunk)))