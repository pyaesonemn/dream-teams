"use client";

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { api } from "@/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		...rootReducer,
		[api.reducerPath]: api.reducer
	},
	// middleware: (getDefaultMiddleware): any => getDefaultMiddleware({}).concat([api.middleware])
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		}).concat(api.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
