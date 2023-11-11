import { PlayerCard } from "@/components/Home";
import { MOCK_PLAYERS } from "@/constant/static";

export default function Home() {
	return (
		<main className="h-[500dvh]">
			<section className="mx-auto my-10 grid max-w-5xl grid-flow-row grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
				{MOCK_PLAYERS.map((player) => (
					<PlayerCard key={player.id} playerInfo={player} />
				))}
			</section>
		</main>
	);
}
