import { FC, useState } from "react";
import { Button, Card, Modal } from "..";
import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/selects.";
import { getCurrentUser } from "@/utils";

type PlayerCardProps = {
	playerInfo: any;
};

export const PlayerCard: FC<PlayerCardProps> = ({ playerInfo }) => {
	const { user } = useSelector(selectAuth);
	const currentUser = getCurrentUser(user);
	console.log(currentUser);

	const [showTeamSelectModal, setShowTeamSelectModal] = useState<boolean>(false);

	const PlayerData = [
		{ label: "Name", value: `${playerInfo?.first_name} ${playerInfo?.last_name}` },
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
				title="Select Team">
				<div>
					{currentUser?.teams?.map((team) => <div key={team.name}>{team.name}</div>)}
				</div>
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
				<div className="flex flex-row items-center justify-between">
					<div className="text-sm font-medium">Dream Team Section</div>
					<Button
						onClick={() => setShowTeamSelectModal(true)}
						variant="tertiary"
						className="text-sm font-semibold">
						Add
					</Button>
				</div>
			</Card>
		</>
	);
};
