import React, { Component } from "react";
import { connect } from "react-redux";
import { addCountry, searchCountry } from '../actions';

class ConnectedForm extends Component {
  componentDidMount() {
    this.props.dispatch(searchCountry('zambia'))
  }
  render() {
    return (
      <div >
        <input type="text" className="form-control" />
        <button className="btn btn-primary">search</button>
      </div>
    );
  }
}
const Form = connect(mapStateToProps)(ConnectedForm);

export default Form;