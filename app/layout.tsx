import "./globals.css";
import { sora } from "./fonts";
import { Provider } from "@/redux/Provider";
import { Navbar } from "@/components/Home/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Provider>
				<body className={sora.className}>
					<main>
						<Navbar />
						{children}
					</main>
				</body>
			</Provider>
		</html>
	);
}
