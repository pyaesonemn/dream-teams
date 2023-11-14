"use client";

import { Team, getCurrentUser, updateCurrentUser } from "@/utils";
import { FC, use, useEffect, useState } from "react";
import { Button, Card, Modal } from "..";
import { AiOutlineDelete } from "react-icons/ai";
import { CreateTeamForm } from "../Home";
import { TeamPlayersModal } from "./TeamPlayersModal";
import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/selects.";

type TeamCardProps = {
	teamInfo: Team;
};

export const TeamCard: FC<TeamCardProps> = ({ teamInfo }) => {
	const { user } = useSelector(selectAuth);
	const [showEditModal, setShowEditModal] = useState<boolean>(false);
	const [showPlayersModal, setShowPlayersModal] = useState<boolean>(false);
	const TeamData = [
		{ label: "Name", value: `${teamInfo?.name}` },
		{ label: "Player Count", value: `${teamInfo?.playerCount}` },
		{ label: "Region", value: `${teamInfo?.region}` },
		{ label: "Country", value: `${teamInfo?.country}` }
	];

	const handleDeleteTeam = (teamNametoDelete: string) => {
		const currentUser = getCurrentUser(user);

		if (currentUser) {
			const updatedTeams = currentUser?.teams?.filter(
				(team: any) => team.name !== teamNametoDelete
			);
			updateCurrentUser({
				...currentUser,
				teams: updatedTeams
			});
			window.location.reload();
			console.log(`Team '${teamNametoDelete}' deleted successfully.`);
		} else {
			console.log("User not found");
		}
	};

	return (
		<>
			<Modal
				onClose={() => setShowEditModal(false)}
				onOk={() => {}}
				show={showEditModal}
				title={teamInfo?.name}>
				<CreateTeamForm setShowModal={setShowEditModal} previousData={teamInfo} />
			</Modal>
			<TeamPlayersModal
				players={teamInfo.players}
				show={showPlayersModal}
				onClose={() => setShowPlayersModal(false)}
				onOk={() => {}}
				title={`Players on team "${teamInfo.name}"`}
			/>
			<Card className="relative border-t-4 border-t-orange-500">
				<Button
					onClick={() => setShowEditModal(true)}
					className="absolute right-4 text-sm font-medium"
					variant="tertiary">
					Edit
				</Button>
				<div className="flex flex-col gap-y-2">
					{TeamData?.map((data) => (
						<div key={data.label} className="flex flex-row gap-x-1">
							<div className="min-w-[8rem]">{data.label}</div>
							<span className="mr-2"> : </span>
							<div>{data.value}</div>
						</div>
					))}
					<div className="mt-2 flex flex-row gap-x-3">
						<Button
							onClick={() => setShowPlayersModal(true)}
							variant="primary"
							className="w-full rounded-2xl text-sm">
							Show Players
						</Button>
						<Button
							onClick={() => handleDeleteTeam(teamInfo.name)}
							variant="primary"
							className="max-w-[4rem] rounded-2xl bg-red-500">
							<AiOutlineDelete className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</Card>
		</>
	);
};
