import React from 'react';

import List from '../containers/ListContainer';
import Form from '../containers/FormContainer';

const AppLayout = (props) => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Bucket Lists</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Search Country</h2>
      <Form />
    </div>
  </div>
)

export default AppLayout;