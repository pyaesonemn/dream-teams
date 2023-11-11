import type { Metadata } from "next";
import "./globals.css";
import { sora } from "./fonts";

export const metadata: Metadata = {
	title: "Dream Teams App, Home Page",
	description: "Create your NBA dream team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={sora.className}>{children}</body>
		</html>
	);
}
