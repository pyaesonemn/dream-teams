"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import persistStore from "redux-persist/es/persistStore";

persistStore(store);

export function Provider({ children }: { children: React.ReactNode }) {
	return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
