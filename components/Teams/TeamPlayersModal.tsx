import { FC } from "react";
import { Modal } from "..";
import { Player } from "@/utils";

type TeamPlayersModalProps = {
	players: Array<Player> | undefined;
	onClose: () => void;
	onOk: () => void;
	show: boolean;
	title: string;
};

export const TeamPlayersModal: FC<TeamPlayersModalProps> = ({
	players,
	onClose,
	onOk,
	show,
	title
}) => {
	return (
		<Modal onClose={onClose} onOk={onOk} show={show} title={title} className="min-h-[24rem]">
			{Boolean(players?.length) ? (
				<div>wow, there are players</div>
			) : (
				<div className="mt-32 flex w-full items-center justify-center text-3xl font-bold text-gray-300">
					No player yet.
				</div>
			)}
		</Modal>
	);
};
