"use client";

import { selectAuth } from "@/redux/selects.";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

type ProtectedRouteProps = {
	children: ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const { isLoggedIn } = useSelector(selectAuth);
	const router = useRouter();

	if (!isLoggedIn) {
		router.replace("/sign-in");
		return null;
	}

	if (isLoggedIn) {
		router.replace("/players");
		return null;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
