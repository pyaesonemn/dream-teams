import { axiosInstance } from "@/axiosInstance";

const baseQuery = () => async (requestOpts: any) => {
	try {
		const result = await axiosInstance({ ...requestOpts });
		return { data: result.data };
	} catch (axiosError) {
		const err = axiosError as any;
		console.log("ERROR : ", err);
		return {
			error: { status: err.response?.status, message: err.response?.data }
		};
	}
};

export const customBaseQuery = baseQuery();
