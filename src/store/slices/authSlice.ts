import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string;
  isLoggedIn: boolean;
  email: string;
}

const initialState: AuthState = {
  token: "",
  isLoggedIn: false,
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state: AuthState, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    logOut: (state: AuthState) => {
      state.isLoggedIn = initialState.isLoggedIn;
      state.token = initialState.token;
      state.email = initialState.email;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
