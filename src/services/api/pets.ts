/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { ILogin, IRegister } from 'interfaces';

export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://61f6e0072e1d7e0017fd6f82.mockapi.io/api/v1' }),
  endpoints: (builder) => ({
    pets: builder.query<any, any>({
      query: (arg) => {
        console.log(`/${arg}`);

        return `/${arg}`;
      },
    }),
  }),
});

export const { usePetsQuery } = petsApi;
