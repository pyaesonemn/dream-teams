import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "./customBaseQuery";

export const api = createApi({
	refetchOnFocus: false,
	baseQuery: customBaseQuery,
	tagTypes: [],
	endpoints: () => ({})
});
