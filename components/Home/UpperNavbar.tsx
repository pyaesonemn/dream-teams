"use client";

import { FiUser } from "react-icons/fi";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, selectTeam } from "@/redux/selects.";
import { Button } from "..";
import { resetAuth } from "@/redux/modules/auth";
import { useRouter } from "next/navigation";
import { getCurrentUser, updateCurrentUser } from "@/utils";
import { resetMembers } from "@/redux/modules/team";
import Link from "next/link";

export const UpperNavbar = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user, isLoggedIn } = useSelector(selectAuth);
	const { members } = useSelector(selectTeam);

	const handleLogOut = () => {
		const currentUser = getCurrentUser(user);
		const users = JSON.parse(window.localStorage.getItem("users") || "[]");
		if (currentUser) {
			if (!currentUser.members) {
				currentUser.members = [];
			}
			// localStorage.setItem("users", JSON.stringify([...users, { ...userObj, members }]));
			updateCurrentUser({ ...currentUser, members: members });
		}
		dispatch(resetAuth());
		dispatch(resetMembers());
		router.replace("/sign-in");
	};
	return (
		<div className="flex h-16 w-full items-center justify-between px-2 sm:px-6 md:gap-x-5 md:px-5 xl:px-0">
			<Link href={"/"}>
				<h1 className="text-xl font-bold text-orange-500 sm:text-3xl">Dream Teams</h1>
			</Link>
			{isLoggedIn ? (
				<div className="flex flex-row items-center gap-x-2 sm:gap-x-5">
					<div className="flex flex-row items-center gap-x-2 sm:gap-x-3">
						<span className="text-xs font-semibold sm:text-sm">{user}</span>
						<FiUser className="h-5 w-5" />
					</div>
					<Button
						variant="tertiary"
						onClick={handleLogOut}
						className="flex flex-row items-center gap-x-3 rounded-3xl bg-transparent px-4 py-2 text-white hover:bg-orange-400/60 hover:no-underline">
						<span className="hidden text-sm font-semibold sm:block">Log out</span>
						<AiOutlineLogout className="h-5 w-5" />
					</Button>
				</div>
			) : (
				<Button
					variant="tertiary"
					onClick={() => router.push("/sign-in")}
					className="flex flex-row items-center gap-x-3 rounded-3xl bg-transparent px-4 py-2 text-white hover:bg-orange-400/60 hover:no-underline">
					<span className="hidden text-sm font-semibold sm:block">Sign In</span>
					<AiOutlineLogin className="h-5 w-5" />
				</Button>
			)}
		</div>
	);
};
