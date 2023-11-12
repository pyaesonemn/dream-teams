import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";

const playersApi = (build?: any) =>
	build.query({
		query: (params: any) => {
			return {
				url: `/players?per_page=12&page=${params?.pageNumber}&search=${
					params?.keyword ? params?.keyword : ""
				}`,
				params,
				method: "GET"
			};
		},
		transformResonse: (response: any) => {
			return response.data;
		}
	});

export default playersApi;
