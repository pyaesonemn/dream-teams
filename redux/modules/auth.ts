import { createSlice } from "@reduxjs/toolkit";
import { AUTH_SLICE } from "../constants";

const initialState = {
	isLoggedIn: false,
	user: null
};

export const authSlice = createSlice({
	name: AUTH_SLICE,
	initialState,
	reducers: {
		setLoggedIn: (state, { payload }) => {
			state.isLoggedIn = payload;
		},
		setUser: (state, { payload }) => {
			state.user = payload;
		},
		resetAuth: () => initialState
	}
});

export const authReducer = authSlice.reducer;
export const { setLoggedIn, setUser, resetAuth } = authSlice.actions;
