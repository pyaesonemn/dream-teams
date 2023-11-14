import ProtectedRoute from "@/app/ProtectedRoute";
import { PlayersList } from "@/components/Home";

export default function Home() {
	return (
		<ProtectedRoute>
			<main className="h-full">
				<PlayersList />
			</main>
		</ProtectedRoute>
	);
}
