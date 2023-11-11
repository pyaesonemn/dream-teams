import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";

const playersApi = (build?: any) =>
	build.query({
		query: (pageNumber: string) => {
			return {
				url: `/players?per_page=12&page=${pageNumber}`,
				pageNumber,
				method: "GET"
			};
		},
		transformResonse: (response: any) => {
			return response.data;
		}
	});

export default playersApi;
