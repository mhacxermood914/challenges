/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Footer } from 'components';
import {
  Outlet, Link, Navigate, useNavigate,
} from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      ok dol
      <Outlet />
    </>
  );
};
