import React, {Component} from 'react';
import {connect} from  'react-redux';

import {jsonChange} from '../actions/jsonAction';

class JSONFILE extends Component {



  render(){
    return (
      <div className="App">
      {this.props.isValid ? <p style={{paddingTop:"10px", backgroundColor:"cyan",height:"40px", width:"30%"}}>
        VALID JSON!</p>: <p style={{paddingTop:"10px", backgroundColor:"cyan",height:"40px", width:"30%"}}>INVALID JSON!</p>}
        <textarea
         style={{
          backgroundColor: "lightblue",
          width: "30%",
          height: "400px"
        }}
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






