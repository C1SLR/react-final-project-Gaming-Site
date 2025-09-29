import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    isLoading: true,
  },
  reducers: {
    setAuthState: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
      state.isLoading = action.payload.isLoading;
    },
    clearLoginState: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { setAuthState, clearLoginState } = authSlice.actions;
export default authSlice.reducer;
