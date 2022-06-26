/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import 'styles/index.css';
import ReactDOM from 'react-dom';
// import {
//   persistStore,
// } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'store';
import { Provider } from 'react-redux';
import Buttons from './core-ui/components(common components)/Buttons';

// const persistor = persistStore(store);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      {/* <MantineProvider theme={{
          fontFamily: 'Montserrat',
        }}
        >
          <NotificationsProvider position="top-right">
            <ModalsProvider>
              <App />
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider> */}
      <div className="bg-gray-200 p-5">
        <div>
          <Buttons text="Text" bgcolor="#2B6DB1" textcolor="#fff" wsize="w-60" />
        </div>
        <div className="mt-2">
          <Buttons text="Text" bgcolor="#fff" textcolor="#2B6DB1" wsize="w-40" />
        </div>
        <div className="mt-2">
          <Buttons text="Text" bgcolor="#fff" textcolor="#2B6DB1" wsize="w-20" hsize="h-20" isicon="true" />
        </div>
      </div>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
