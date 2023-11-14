import type { Metadata } from "next";
import { sora } from "@/app/fonts";

export const metadata: Metadata = {
	title: "Dream Teams App, Home Page",
	description: "Create your NBA dream team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<section className={sora.className}>
				<div>{children}</div>
			</section>
		</html>
	);
}
