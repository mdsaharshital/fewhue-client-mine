import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fewhue-server.onrender.com",
  }),
  tagTypes: ["addProducts", "deleteProducts"],
  endpoints: (builder) => ({
    // code splited
  }),
});

export default apiSlice;
