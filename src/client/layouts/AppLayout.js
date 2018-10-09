import React from 'react';
// import { Switch, Route } from 'react-router-dom';

// containers
// import HeaderContainer from '../containers/HeaderContainer';
// import HomeContainer from '../containers/HomeContainer';
// import CartContainer from '../containers/CartContainer';

// components
// import Footer from '../components/Footer'

import List from '../containers/ListContainer';
import Form from '../containers/FormContainer';

const AppLayout = () => (
  <div className="row mt-5">
    {/* <HeaderContainer />
    <Switch >
      <Route path="/" exact component={HomeContainer} />
      <Route path="/cart" component={CartContainer} />
    </Switch>
    <Footer /> */}
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