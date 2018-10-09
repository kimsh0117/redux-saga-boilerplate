import React, { Component } from "react";
import { connect } from "react-redux";
import { addCountry, searchCountry } from '../actions';

// API import 
import { countrySearch } from '../Api/api';

const mapDispatchToProps = dispatch => {
  return {
    addCountry: country => dispatch(addCountry(country)),
    searchCountry: country => dispatch(searchCountry(country))
  };
};

class ConnectedForm extends Component {
  componentDidMount() {
    countrySearch('Zambia').then( result => console.log(result, 'Result'))
  }
  render() {
    return (
      <div>Form</div>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;