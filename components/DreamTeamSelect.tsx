"use client";
import { Team, cn, getCurrentUser, isPlayerInAnyTeam, updateCurrentUser } from "@/utils";
import { FC, useState } from "react";
import { Button } from ".";
import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/selects.";
import { getTeambyName } from "@/utils/getTeambyName";

type DreamTeamSelectProps = {
	playerName: string;
	playerPosition: string;
	teams: Array<Team> | undefined;
	dreamTeam: string;
	setDreamTeam: (value: string) => void;
	setShowTeamSelectModal: (value: boolean) => void;
};

export const DreamTeamSelect: FC<DreamTeamSelectProps> = ({
	playerName,
	playerPosition,
	teams,
	dreamTeam,
	setDreamTeam,
	setShowTeamSelectModal
}) => {
	const [tempSelect, setTempSelect] = useState<string>("");
	const { user } = useSelector(selectAuth);

	const addPlayertoDreamTeam = (teamName: string) => {
		const currentUser = getCurrentUser(user);
		const targetTeam = getTeambyName(teamName, currentUser?.teams);

		if (isPlayerInAnyTeam(playerName, teams)) {
			const sourceTeam = currentUser?.teams?.find(
				(team) => team?.players?.some((player) => player?.name === playerName)
			);

			console.log({ sourceTeam });

			// Check if the source team is found
			if (sourceTeam) {
				// Filter out the player from the source team's players array
				console.log("here");
				sourceTeam.players = sourceTeam?.players?.filter(
					(player) => player?.name !== playerName
				);
			} else {
				console.log("Source team not found.");
			}
		}

		// console.log({ targetTeam });

		if (targetTeam) {
			const NewPlayer = {
				name: playerName,
				position: playerPosition
			};

			targetTeam.players?.push(NewPlayer);

			updateCurrentUser({
				...currentUser,
				teams: currentUser?.teams?.map((team) => {
					if (team.name === teamName) {
						return targetTeam;
					}
					return team;
				})
			});
			console.log("Player added to team");
		} else {
			updateCurrentUser({
				...currentUser
			});
			console.log("Target team not found");
		}
	};

	const handleSelect = (teamName: string) => {
		setDreamTeam(teamName);
		setShowTeamSelectModal(false);
		addPlayertoDreamTeam(teamName);
	};

	return (
		<div className="w-full">
			{teams?.map((team) => (
				<div
					onClick={() => setTempSelect(team.name)}
					className={cn(
						"mb-2 flex cursor-pointer flex-row items-center justify-between rounded-lg px-3 py-2 text-black hover:bg-orange-500/40",
						{
							"bg-orange-500 text-white hover:bg-orange-500": tempSelect === team.name
						}
					)}
					key={team.name}>
					<span>{team.name}</span>
					<span>
						{team.region} / {team.country}
					</span>
				</div>
			))}
			<div className="mt-4 flex w-full flex-row gap-x-4">
				<Button
					onClick={() => setTempSelect("")}
					variant="tertiary"
					className="w-[8rem] sm:w-[12rem]">
					Reset
				</Button>
				<Button onClick={() => handleSelect(tempSelect)} className="w-full rounded-lg">
					Select
				</Button>
			</div>
		</div>
	);
};
