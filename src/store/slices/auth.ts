/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { tokenInfos: null, infos: null },
};
const auth = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    user(state, action) {
      state.user.infos = action.payload.user;
      state.user.tokenInfos = action.payload.token;
    },
    isAuthenticated(state) {
    },
    logout(state) {
      state.user = { tokenInfos: null, infos: null };
    },
  },
});

export const { user, isAuthenticated, logout } = auth.actions;

export default auth;
