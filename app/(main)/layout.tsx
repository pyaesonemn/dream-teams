import type { Metadata } from "next";
import { Navbar } from "@/components/Home/Navbar";
import ProtectedRoute from "@/app/ProtectedRoute";

export const metadata: Metadata = {
	title: "Dream Teams App",
	description: "Create your NBA dream team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ProtectedRoute>
			<Navbar />
			{children}
		</ProtectedRoute>
	);
}
