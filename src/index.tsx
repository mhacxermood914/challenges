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
// import Buttons from './core-ui/components(common components)/Buttons';
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
      {/* <div className="bg-gray-200 p-5">
        <Header classes="bg-yellow-400" />
        <div>
          <Buttons text="Text" bgcolor="#2B6DB1" textcolor="#fff" wsize="w-60" isicon={false} />
        </div>
        <div className="mt-2">
          <Buttons text="Text" bgcolor="#fff" textcolor="#2B6DB1" wsize="w-40" />
        </div>
      </div> */}
    </Provider>
  </Router>,
  document.getElementById('root'),
);
