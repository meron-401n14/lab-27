
import React, {Component} from 'react';
import {connect} from  'react-redux';

import {formInputs} from '../actions/formAction';


class FormInput extends Component {
  render() {
    return (
      <div className="row">{this.props.formInputs.val}
      <div className="col-md-4">{this.props.formInputs.length}found! </div>

      </div>
    )
  }
 //
}
 const mapStateToProps = state =>({
  jsonTxt:state.json.jsonTxt,
  isValid:state.json.isValid,
  jsonObj: state.json.jsonObj

});


export default connect(mapStateToProps, {formInputs})(FormInput);