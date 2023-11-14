"use client";

import { FC } from "react";
import { Modal } from "..";
import { Player } from "@/utils";
import { useSelector } from "react-redux";
import { selectTeam } from "@/redux/selects.";
import { Member } from "@/redux/modules/team";

type TeamPlayersModalProps = {
	teamName: string;
	onClose: () => void;
	onOk: () => void;
	show: boolean;
	title: string;
};

export const TeamPlayersModal: FC<TeamPlayersModalProps> = ({
	teamName,
	onClose,
	onOk,
	show,
	title
}) => {
	const { members } = useSelector(selectTeam);

	const getPlayerNamesByTeam = (members: Array<Member>, teamName: string): Array<string> => {
		const filteredMembers = members.filter((member) => member.teamName === teamName);
		const playerNames = filteredMembers.map((member) => member.playerName);
		return playerNames;
	};

	const currentTeamPlayers = getPlayerNamesByTeam(members, teamName);

	return (
		<Modal
			onClose={onClose}
			onOk={onOk}
			show={show}
			title={title}
			className="min-h-[24rem] max-w-md">
			{Boolean(currentTeamPlayers?.length) ? (
				<div>
					{currentTeamPlayers?.map((player, index) => (
						<div className="flex flex-row justify-between px-4 py-2" key={player}>
							<div>
								<span>{index + 1}. </span>
								{player}
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="mt-32 flex w-full items-center justify-center text-3xl font-bold text-gray-300">
					No player yet.
				</div>
			)}
		</Modal>
	);
};
