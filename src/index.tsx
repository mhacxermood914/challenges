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
import App from 'pages';
// import { Header } from 'components';
import Buttons from './core-ui/components(common components)/Buttons';
import Checbox from './core-ui/components(common components)/Checkbox';
import SearchBar from './core-ui/components(common components)/SearchBar';
import Pill from './core-ui/components(common components)/Pill';
// const persistor = persistStore(store);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
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
          <Buttons text="Text" bgcolor="bg-light-blue" textcolor="#fff" wsize="w-60" />
        </div>
        <div className="mt-2">
          <Buttons text="Text" bgcolor="bg-white" textcolor="#2B6DB1" wsize="w-40" />
        </div>
        <div className="mt-2">
          <Buttons text="Text" bgcolor="bg-light-blue" textcolor="#2B6DB1" wsize="w-16" hsize="h-16" isicon="true" />
        </div>
        <div className="bg-white p-4">
          <Checbox label="Item" identifier="key1" />
        </div>
        <div className="bg-white p-4">
          <Checbox label="Item" identifier="key1" />
        </div>
        <div className="bg-white p-4">
          <SearchBar placeholder="Search for pets" border="border" answers={['begale', 'toogle']} />
        </div>
        <div className="bg-white p-4">
          <SearchBar wsize="w-80" placeholder="Search for pets" border="border" bgcolor="bg-gray-200" answers={['begale', 'toogle']} />
        </div>
        <Pill bgcolor="bg-white" text="Item" border="" />
      </div>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
