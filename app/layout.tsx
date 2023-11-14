import "./globals.css";
import { sora } from "./fonts";
import { Provider } from "@/redux/Provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Provider>
				<body className={sora.className}>{children}</body>
			</Provider>
		</html>
	);
}
