"use client";
import { TeamsList } from "@/components/Teams";
import { NextPage } from "next";

const MyTeamPage: NextPage = () => {
	return (
		<section>
			<TeamsList />
		</section>
	);
};

export default MyTeamPage;
