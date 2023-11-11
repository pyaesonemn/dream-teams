import type { Metadata } from "next";
import "./globals.css";
import { sora } from "./fonts";
import { LowerNavbar, UpperNavbar } from "@/components/Home";
import { Provider } from "@/redux/Provider";

export const metadata: Metadata = {
	title: "Dream Teams App, Home Page",
	description: "Create your NBA dream team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Provider>
			<html lang="en">
				<body className={sora.className}>
					<nav className="sticky top-0 z-50 mx-auto flex max-w-5xl flex-col bg-black">
						<UpperNavbar />
						<LowerNavbar />
					</nav>
					{children}
				</body>
			</html>
		</Provider>
	);
}
