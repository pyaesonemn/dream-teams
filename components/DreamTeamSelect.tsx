"use client";
import {
	CurrentUser,
	Player,
	Team,
	cn,
	getCurrentUser,
	isPlayerInAnyTeam,
	updateCurrentUser
} from "@/utils";
import { FC, useState } from "react";
import { Button } from ".";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, selectTeam } from "@/redux/selects.";
import { Member, addMember, removeMember } from "@/redux/modules/team";

type DreamTeamSelectProps = {
	member: Member | undefined;
	playerName: string;
	playerPosition: string;
	teams: Array<Team> | undefined;
	dreamTeam: string;
	setDreamTeam: (value: string) => void;
	setShowTeamSelectModal: (value: boolean) => void;
};

export const DreamTeamSelect: FC<DreamTeamSelectProps> = ({
	member,
	playerName,
	playerPosition,
	teams,
	setDreamTeam,
	setShowTeamSelectModal
}) => {
	const dispatch = useDispatch();
	const [tempSelect, setTempSelect] = useState<string>("");
	const [isReset, setIsReset] = useState<boolean>(false);
	const { user } = useSelector(selectAuth);
	const { members } = useSelector(selectTeam);
	const currentUser: CurrentUser = getCurrentUser(user);

	const handleSelect = (teamName: string) => {
		setDreamTeam(teamName);
		const existingPlayerIndex = members.findIndex((member) => member.playerName === playerName);
		const targetTeam: any = currentUser.teams?.find((team) => team.name === teamName);

		if (existingPlayerIndex !== -1) {
			dispatch(removeMember(members[existingPlayerIndex].playerName));
			const updatedPlayers = targetTeam?.players?.filter(
				(player: Player) => player.name !== playerName
			);
			if (teamName !== "") {
				dispatch(addMember({ playerName, teamName }));
				updatedPlayers?.push({ name: playerName, position: playerPosition });
			}
			updateCurrentUser({
				...currentUser,
				teams: currentUser.teams?.map((team: any) => {
					if (team?.name === teamName) {
						return targetTeam;
					}
					return team;
				})
			});
		} else {
			if (teamName !== "") {
				dispatch(addMember({ playerName, teamName }));
				targetTeam?.players?.push({ name: playerName, position: playerPosition });
				updateCurrentUser({
					...currentUser,
					teams: currentUser?.teams?.map((team: any) => {
						if (team?.name === teamName) {
							return targetTeam;
						}
						return team;
					})
				});
			}
		}
		setShowTeamSelectModal(false);
	};

	const handleTeamButtonClick = (team: string) => {
		setTempSelect(team);
		setIsReset(false);
	};

	const handleResetClick = () => {
		setTempSelect("");
		setIsReset(true);
	};

	const isSelected = (team: string) => {
		if (!isReset) {
			if (tempSelect) {
				return tempSelect === team;
			} else return member?.teamName === team;
		} else return false;
	};

	return (
		<div className="w-full">
			{teams?.map((team) => (
				<div
					onClick={() => handleTeamButtonClick(team.name)}
					className={cn(
						"mb-2 flex cursor-pointer flex-row items-center justify-between rounded-lg px-3 py-2 text-black hover:bg-orange-500/40",
						{
							"bg-orange-500 text-white hover:bg-orange-500": isSelected(team.name)
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
					onClick={handleResetClick}
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
