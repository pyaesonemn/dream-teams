import { FC } from "react";
import { Card } from "..";

type PlayerCardProps = {
	playerInfo: any;
};

export const PlayerCard: FC<PlayerCardProps> = ({ playerInfo }) => {
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
		<Card className="border-t-4 border-t-orange-500">
			<div className="flex flex-col gap-y-2">
				{PlayerData?.map((data) => (
					<div key={data.label} className="flex flex-row gap-x-1">
						<div className="min-w-[5rem]">{data.label}</div>
						<span className="mr-2"> : </span>
						<div>{data.value}</div>
					</div>
				))}
			</div>
		</Card>
	);
};
