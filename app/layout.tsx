import type { Metadata } from "next";
import "./globals.css";
import { sora } from "./fonts";
import { Provider } from "@/redux/Provider";
import { Navbar } from "@/components/Home/Navbar";

export const metadata: Metadata = {
	title: "Dream Teams App, Home Page",
	description: "Create your NBA dream team."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Provider>
				<body className={sora.className}>
					<Navbar />
					{children}
				</body>
			</Provider>
		</html>
	);
}
