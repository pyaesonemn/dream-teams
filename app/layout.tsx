import type { Metadata } from "next";
import "./globals.css";
import { sora } from "./fonts";
import { NavCTA } from "@/components/Home";
import { Button, Input } from "@/components";

export const metadata: Metadata = {
	title: "Dream Teams App, Home Page",
	description: "Create your NBA dream team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={sora.className}>
				<nav className="sticky top-0 mx-auto flex max-w-5xl flex-col">
					<div className="flex h-16 w-full items-center justify-between">
						<h1 className="text-3xl font-bold text-orange-500">Dream Teams</h1>
						<NavCTA />
					</div>
					<div className="flex h-12 w-full items-center justify-between">
						<Input
							type="search"
							name="searchPlayer"
							register={() => {}}
							className="w-[40rem] rounded-md"
							placeholder="Search player..."
						/>
						<Button type="button" variant="primary">
							Create Team +
						</Button>
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}
