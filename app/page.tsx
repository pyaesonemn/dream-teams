import ProtectedRoute from "./ProtectedRoute";

const Page = () => {
	return (
		<ProtectedRoute>
			<main></main>
		</ProtectedRoute>
	);
};

export default Page;
