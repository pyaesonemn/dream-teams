import { FC } from "react";
import { Modal } from "..";

type TeamPlayersModalProps = {
	players: any[];
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
			{players.length > 0 ? (
				<div>wow, there are players</div>
			) : (
				<div className="mt-32 flex w-full items-center justify-center text-3xl font-bold text-gray-300">
					No player yet.
				</div>
			)}
		</Modal>
	);
};
