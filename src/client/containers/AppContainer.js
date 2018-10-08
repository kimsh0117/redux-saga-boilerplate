import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore'

// setting react-router-dom
import { BrowserRouter } from 'react-router-dom'
// components / reducers
import AppLayout from '../layouts/AppLayout';

// wrap rest of the App in a provider
const AppContainer = () => (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  );
  
  export default AppContainer;