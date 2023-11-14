"use client";

import ProtectedRoute from "@/app/ProtectedRoute";
import { TeamsList } from "@/components/Teams";
import { NextPage } from "next";

const MyTeamPage: NextPage = () => {
	return (
		<ProtectedRoute>
			<section>
				<TeamsList />
			</section>
		</ProtectedRoute>
	);
};

export default MyTeamPage;
