import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { lists: state.lists };
};

const ConnectedList = ({ lists }) => (
  <div>
    
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;