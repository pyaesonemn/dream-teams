"use client";

import { usePathname } from "next/navigation";
import { LowerNavbar, UpperNavbar } from ".";

export const Navbar = () => {
	const pathName = usePathname();
	if (pathName === "/sign-in" || pathName === "/register") return null;
	return (
		<nav className="sticky top-0 z-50 mx-auto flex max-w-5xl flex-col bg-black">
			<UpperNavbar />
			<LowerNavbar />
		</nav>
	);
};
