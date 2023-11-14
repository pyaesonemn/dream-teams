import Link from "next/link";
import ProtectedRoute from "./ProtectedRoute";

const Page = () => {
	return (
		<ProtectedRoute>
			<main className="h-[100dvh] w-[100dvw]">
				<Link
					href="/players"
					className="flex h-full items-center justify-center text-orange-500 hover:underline">
					Go to main app.
				</Link>
			</main>
		</ProtectedRoute>
	);
};

export default Page;
