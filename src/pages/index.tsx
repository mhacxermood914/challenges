/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useRef, useState, useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Layout } from 'layouts/default';
import Dashboard from './Dashboard';
import Profile from './Dashboard/Profile';
import Login from './Login';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard/" element={<Layout />}>
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
