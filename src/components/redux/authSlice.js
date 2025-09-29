import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: auth0,
  initialState: {
    isLoggedIn: false,
    user: null,
    isLoading: true,
  },
  reducers: {
    setLoginState: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
      state.isLoading = action.payload.isLoading;
    },
    clearLoginState: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { setLoginState, clearLoginState } = authSlice.actions;
export default authSlice.reducer;
