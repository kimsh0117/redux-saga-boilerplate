import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { countries: state.countries };
};

const ConnectedList = ({ countries }) => (
  <div>
    
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;