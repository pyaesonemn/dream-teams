import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { storage } from "./customStorage";
import { rootReducer } from "./rootReducer";
import { api } from "@/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AUTH_SLICE, TEAM_SLICE } from "./constants";

const authPersistConfig = {
	key: "auth",
	storage: storage,
	whitelist: [AUTH_SLICE, TEAM_SLICE]
};

const reducer = persistReducer(
	authPersistConfig,
	combineReducers({
		...rootReducer,
		[api.reducerPath]: api.reducer
	})
);

export const store = configureStore({
	reducer,
	// middleware: (getDefaultMiddleware): any => getDefaultMiddleware({}).concat([api.middleware])
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		}).concat(api.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
