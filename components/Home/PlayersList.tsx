/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useDispatch, useSelector } from "react-redux";
import { PlayerCard } from ".";
import { usePlayersQuery } from "@/services/modules/players";
import { incrementPageNumber } from "@/redux/modules/playersList";
import { useEffect, useState } from "react";
import { Button, LoadingIndicator, Modal } from "..";
import { selectAuth, selectPlayersList, selectTeam } from "@/redux/selects.";

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
	const { pageNumber, keyword } = useSelector(selectPlayersList);
	const { isLoggedIn, user } = useSelector(selectAuth);
	const { members } = useSelector(selectTeam);

	const [players, setPlayers] = useState<Player[]>([]);
	const [searchResult, setSearchResult] = useState<Player[]>([]);
	const [noMoreResult, setNoMoreResult] = useState<boolean>(false);

	const {
		data: playersList,
		isError,
		isLoading,
		isFetching,
		refetch
	} = usePlayersQuery(
		{ pageNumber, keyword },
		{
			skip: noMoreResult
		}
	);

	useEffect(() => {
		if ((playersList as Data)?.data?.length > 0) {
			if (Boolean(keyword)) {
				setPlayers([]);
				setSearchResult((playersList as Data)?.data);
			} else {
				setSearchResult([]);
				setPlayers((prevPlayers) => [...prevPlayers, ...(playersList as Data)?.data]);
			}
		} else if (Number(pageNumber) > 1) {
			setNoMoreResult(true);
		}
	}, [playersList]);

	const handleClick = () => {
		dispatch(incrementPageNumber());
		refetch();
	};

	useEffect(() => {
		refetch();
	}, [keyword]);

	return (
		<section className="mx-auto max-w-5xl px-5 sm:px-8 md:px-5 xl:px-0">
			<div className="my-8 grid grid-flow-row grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
				{isError ? (
					<div>Something went wrong.</div>
				) : Boolean(keyword) ? (
					searchResult?.map((player: Player, index) => (
						<PlayerCard key={index} playerInfo={player} />
					))
				) : (
					players?.map((player: Player, index) => (
						<PlayerCard key={player.id + index} playerInfo={player} />
					))
				)}
			</div>
			{playersList ? (
				<Button
					disabled={isLoading || isFetching}
					variant="tertiary"
					className="mb-5 flex w-full flex-row items-center justify-center gap-x-2"
					onClick={isLoading || isFetching ? () => {} : handleClick}>
					Load More
					{(isLoading || isFetching) && <LoadingIndicator />}
				</Button>
			) : (
				<span className="flex flex-row items-center justify-center gap-x-2">
					Loading <LoadingIndicator />
				</span>
			)}
		</section>
	);
};
