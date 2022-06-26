/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILogin, IRegister } from 'interfaces';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    login: builder.mutation<ILogin, any>({
      query: (value) => {
        console.log({ value });
        return {
          url: '',
          method: 'POST',
          body: value,
        };
      },
    }),
    register: builder.mutation<IRegister, any>({
      query: ({ confirm_password, ...rest }) => {
        console.log({ rest });
        return {
          url: '',
          method: 'POST',
          body: rest,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
