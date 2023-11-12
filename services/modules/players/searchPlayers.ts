const searchPlayersApi = (build?: any) =>
	build.query({
		query: (keyword: string) => {
			return {
				url: `/players?search=${keyword}`,
				keyword,
				method: "GET"
			};
		},
		transformResonse: (response: any) => {
			return response.data;
		}
	});

export default searchPlayersApi;
