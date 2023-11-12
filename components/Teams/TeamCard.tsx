"use client";

import { Team } from "@/utils";
import { FC } from "react";
import { Card } from "..";

type TeamCardProps = {
	teamInfo: Team;
};

export const TeamCard: FC<TeamCardProps> = ({ teamInfo }) => {
	const TeamData = [
		{ label: "Name", value: `${teamInfo?.name}` },
		{ label: "Player Count", value: `${teamInfo?.players?.length}` },
		{ label: "Region", value: `${teamInfo?.region}` },
		{ label: "Country", value: `${teamInfo?.country}` }
	];
	return (
		<Card className="border-t-4 border-t-orange-500">
			<div className="flex flex-col gap-y-2">
				{TeamData?.map((data) => (
					<div key={data.label} className="flex flex-row gap-x-1">
						<div className="min-w-[8rem]">{data.label}</div>
						<span className="mr-2"> : </span>
						<div>{data.value}</div>
					</div>
				))}
			</div>
		</Card>
	);
};
