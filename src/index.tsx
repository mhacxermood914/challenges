/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import 'styles/index.css';
import ReactDOM from 'react-dom';
import {
  persistStore,
} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'store';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import App from './pages';

const persistor = persistStore(store);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider theme={{
          fontFamily: 'Montserrat',
        }}
        >
          <NotificationsProvider position="top-right">
            <ModalsProvider>
              <App />
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </PersistGate>

    </Provider>
  </Router>,
  document.getElementById('root'),
);
