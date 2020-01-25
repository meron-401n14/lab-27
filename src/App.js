import React from 'react';
//import {connect} from 'react-redux';
import JsonIn from './Component/JsonIn';
import FormInput from './Component/formInput';
import {Provider} from 'react-redux';
import store from './store';




function App(props) {
  

  

  
  return (
    <div className="App">
   <Provider store={store}>
     <JsonIn />
     <FormInput />
   </Provider>

    </div>
  );
}

export default App;
