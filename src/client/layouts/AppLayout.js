import React from 'react';
import { Switch, Route } from 'react-router-dom';

// containers
import HeaderContainer from '../containers/HeaderContainer';
import HomeContainer from '../containers/HomeContainer';
import CartContainer from '../containers/CartContainer';

// components
import Footer from '../components/Footer'

const AppLayout = () => (
  <div>
    <HeaderContainer />
    <Switch >
      <Route path="/" exact component={HomeContainer} />
      <Route path="/cart" component={CartContainer} />
    </Switch>
    <Footer />
  </div>
)

export default AppLayout;