import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    // code splited
  }),
});

export default apiSlice;
