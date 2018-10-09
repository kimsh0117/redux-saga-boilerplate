import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore'

// components / reducers
import AppLayout from '../layouts/AppLayout';

// wrap rest of the App in a provider
const AppContainer = () => (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
  
  export default AppContainer;