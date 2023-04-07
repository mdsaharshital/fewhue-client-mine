import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/";
import { toast } from "react-hot-toast";
import axios from "axios";

const initialState = {
  user: { email: "", role: "" },
  token: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const getLoggedInUserDB = createAsyncThunk(
  "/auth/getLoggedInUserDB",
  async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    try {
      //
      const { data } = await axios.get(
        "https://fewhue-server.vercel.app/api/auth/getLoggedInUser",
        {
          headers: { Authorization: token },
        }
      );
      console.log("useer", data);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (ema_pass) => {
    const { data } = await axios
      .post("https://fewhue-server.vercel.app/api/auth/login", ema_pass)
      .finally(() => {
        console.log("shhs");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    console.log("", data);
    return data;
  }
);
export const authSice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    signOutuser: (state) => {
      state.user = { role: "", email: "" };
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.user = { email: "", role: "" };
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.token = "";
      })
      .addCase(loginAdmin.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.user = payload.user;
          state.token = payload.token;
        } else {
          state.isError = true;
          state.error = payload.message;
        }
        state.isLoading = false;
        //  set to localhost
        localStorage.setItem("token", payload.token);
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.user = { email: "", role: "" };
        state.token = "";
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      })
      .addCase(getLoggedInUserDB.pending, (state) => {
        state.user = { email: "", role: "" };
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.token = "";
      })
      .addCase(getLoggedInUserDB.fulfilled, (state, { payload }) => {
        if (payload) {
          state.user = payload?.user;
          state.token = localStorage.getItem("token");
          state.isError = false;
          state.error = "";
        }
        state.isLoading = false;
      })
      .addCase(getLoggedInUserDB.rejected, (state, action) => {
        state.user = { email: "", role: "" };
        state.token = "";
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      });
  },
});
export const { signOutuser } = authSice.actions;
export default authSice.reducer;
