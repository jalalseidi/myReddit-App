// /src/api/apiSlice.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create an API slice using createApi
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/', // Set your API base URL here
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/data', // Endpoint URL (relative to base URL)
    }),
  }),
});

// Export the generated hooks for querying the API
export const { useGetDataQuery } = apiSlice;
