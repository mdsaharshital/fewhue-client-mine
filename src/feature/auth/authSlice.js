import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
  user: { email: "", role: "" },
  isLoading: false,
  isError: false,
  error: "",
};

export const authSice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
});
export const {} = authSice.actions;
export default authSice.reducer;
