"use client";

import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://www.balldontlie.io/api/v1",
	headers: {
		accept: "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "*"
	}
});
