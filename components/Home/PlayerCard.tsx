"use client";

import { FC, useState } from "react";
import { Button, Card, DreamTeamSelect, Modal } from "..";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, selectTeam } from "@/redux/selects.";
import { getCurrentUser } from "@/utils";

type PlayerCardProps = {
	playerInfo: any;
};

export const PlayerCard: FC<PlayerCardProps> = ({ playerInfo }) => {
	const { user } = useSelector(selectAuth);
	const { members } = useSelector(selectTeam);
	const playerFullName = `${playerInfo?.first_name} ${playerInfo?.last_name}`;
	const playerInMembers = members?.find((item) => item.playerName === playerFullName);
	const currentUser = getCurrentUser(user);

	const [showTeamSelectModal, setShowTeamSelectModal] = useState<boolean>(false);
	const [dreamTeam, setDreamTeam] = useState<string>("");

	const PlayerData = [
		{ label: "Name", value: `${playerFullName}` },
		{
			label: "Height",
			value:
				playerInfo?.height_feet && playerInfo?.height_inches
					? `${playerInfo?.height_feet}'
         ${playerInfo?.height_inches}"`
					: "-"
		},
		{
			label: "Weight",
			value: playerInfo?.weight_pounds ? `${playerInfo?.weight_pounds} lbs` : "-"
		},
		{ label: "Position", value: playerInfo?.position !== "" ? `${playerInfo?.position}` : "-" },
		{
			label: "Team",
			value: playerInfo?.team
				? `${playerInfo?.team?.full_name} (${playerInfo?.team?.abbreviation})`
				: "-"
		}
	];

	return (
		<>
			<Modal
				show={showTeamSelectModal}
				onClose={() => setShowTeamSelectModal(false)}
				onOk={() => {}}
				title={`Select Team for ${playerFullName}`}
				className="max-w-[32rem]">
				<DreamTeamSelect
					member={playerInMembers}
					playerName={`${playerInfo?.first_name} ${playerInfo?.last_name}`}
					playerPosition={playerInfo?.position}
					dreamTeam={dreamTeam}
					teams={currentUser?.teams}
					setDreamTeam={setDreamTeam}
					setShowTeamSelectModal={setShowTeamSelectModal}
				/>
			</Modal>
			<Card className="border-t-4 border-t-orange-500">
				<div className="mb-4 flex flex-col gap-y-2">
					{PlayerData?.map((data) => (
						<div key={data.label} className="flex flex-row gap-x-1">
							<div className="min-w-[5rem]">{data.label}</div>
							<span className="mr-2"> : </span>
							<div>{data.value}</div>
						</div>
					))}
				</div>
				<div className="mb-1 flex flex-row items-center justify-between">
					<div className="text-sm font-medium">Dream Team Section</div>
					<Button
						onClick={() => setShowTeamSelectModal(true)}
						variant="tertiary"
						className="text-sm font-semibold">
						Add
					</Button>
				</div>
				{playerInMembers ? (
					<div className="w-fit rounded-xl bg-orange-500 px-3 py-1 text-sm font-bold text-white">
						{playerInMembers.teamName}
					</div>
				) : (
					<p className="text-sm font-bold text-orange-500/75">Not in a team yet.</p>
				)}
			</Card>
		</>
	);
};
