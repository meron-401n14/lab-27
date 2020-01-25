import React, {Component} from 'react';
import {connect} from  'react-redux';

import {jsonChange} from '../actions/jsonAction';

class JSONFILE extends Component {



  render(){
    return (
      <div className="App">
      {this.props.isValid ? <p>VALID JSON!</p>: <p>INVALID JSON!</p>}
        <textarea
        id='json-txt'
        value={this.props.jsonTxt}
        onChange={(e)=> {
          this.props.jsonChange(this.props.jsonTxt,
             e.target.value)
        }} 
        /> 
  

    </div>
    )
  }
}






const mapStateToProps = state=> ({
 jsonTxt:state.json.jsonTxt,
 isValid:state.json.isValid,
 jsonObj:state.json.jsonObj
 })
 export default  connect(mapStateToProps, {jsonChange})(JSONFILE );






