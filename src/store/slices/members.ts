/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open_add_member_modal: false,
};
const members = createSlice({
  name: 'members',
  initialState,
  reducers: {
    openAddMemberModal(state) {
      state.open_add_member_modal = !state.open_add_member_modal;
    },
  },
});

export const { openAddMemberModal } = members.actions;

export default members;
