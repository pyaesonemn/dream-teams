"use client";

import { selectAuth, selectTeam } from "@/redux/selects.";
import { getCurrentUser } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { TeamCard } from ".";
import { useEffect, useState } from "react";
import { setTeams } from "@/redux/modules/team";

export const TeamsList = () => {
	const dispatch = useDispatch();
	const { teams } = useSelector(selectTeam);
	const { user } = useSelector(selectAuth);
	const currentUser = getCurrentUser(user);
	useEffect(() => {}, [dispatch, teams]);
	return (
		<section className="mx-auto max-w-5xl px-5 sm:px-8 md:px-5 xl:px-0">
			{!Boolean(currentUser?.teams?.length) && (
				<div className="my-20 flex w-full items-center justify-center">No teams yet. </div>
			)}
			<div className="my-8 grid grid-flow-row grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
				{Boolean(currentUser.teams?.length) &&
					currentUser?.teams?.map((team) => <TeamCard teamInfo={team} key={team.name} />)}
			</div>
		</section>
	);
};
