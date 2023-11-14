"use client";

import { TeamsList } from "@/components/Teams";
import { NextPage } from "next";
// import dynamic from "next/dynamic";

// const TeamsList = dynamic(() => import("@/components/Teams").then((module) => module.TeamsList), {
// 	ssr: false,
// 	loading: () => <div>Loading...</div>
// });

const MyTeamPage: NextPage = () => {
	return (
		<section>
			<TeamsList />
		</section>
	);
};

export default MyTeamPage;
