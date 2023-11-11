/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useDispatch, useSelector } from "react-redux";
import { PlayerCard } from ".";
import { usePlayersQuery } from "@/services/modules/players";
import { PLAYERS_LIST_SLICE } from "@/redux/constants";
import { RootState } from "@/redux/store";
import { incrementPageNumber } from "@/redux/modules/playersList";
import { useEffect, useState } from "react";
import { Button, LoadingIndicator } from "..";

type Team = {
	id: number;
	abbreviation: string;
	city: string;
	conference: string;
	division: string;
	full_name: string;
	name: string;
};

type Player = {
	id: number;
	firstName: string;
	lastName: string;
	team?: Team;
	position?: string;
	height_feet?: number;
	height_inches?: number;
	weight_pounds?: number;
};

type Meta = {
	current_page: number;
	next_page: number;
	per_page: number;
	total_count: number;
	total_pages: number;
};

type Data = {
	data: Player[];
	meta: Meta;
};

export const PlayersList = () => {
	const dispatch = useDispatch();
	const pageNumber = useSelector<RootState, string>(
		(state) => state[PLAYERS_LIST_SLICE].pageNumber
	);

	const [players, setPlayers] = useState<Player[]>([]);
	const [noMoreResult, setNoMoreResult] = useState<boolean>(false);

	const {
		data: playersList,
		isError,
		isLoading,
		isFetching,
		refetch
	} = usePlayersQuery(`${pageNumber}`, {
		skip: noMoreResult
	});

	useEffect(() => {
		if (playersList?.data?.length > 0) {
			setPlayers((prevPlayers) => [...prevPlayers, ...playersList?.data]);
			console.log(players);
		} else if (Number(pageNumber) > 1) {
			setNoMoreResult(true);
		}
	}, [playersList]);

	const handleClick = () => {
		dispatch(incrementPageNumber());
		refetch();
	};
	return (
		<section className="mx-auto max-w-5xl">
			<div className="my-10 grid grid-flow-row grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
				{isError ? (
					<div>Something went wrong.</div>
				) : (
					players.map((player: Player) => (
						<PlayerCard key={player.id} playerInfo={player} />
					))
				)}
			</div>
			{playersList ? (
				<Button
					disabled={isLoading || isFetching}
					variant="tertiary"
					className="flex flex-row items-center gap-x-2"
					onClick={isLoading || isFetching ? () => {} : handleClick}>
					Load More
					{(isLoading || isFetching) && <LoadingIndicator />}
				</Button>
			) : (
				<span>Loading ...</span>
			)}
		</section>
	);
};
