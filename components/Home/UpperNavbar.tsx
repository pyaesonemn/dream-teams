import { FiUser } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "@/redux/selects.";
import { Button } from "..";
import { resetAuth } from "@/redux/modules/auth";
import { useRouter } from "next/navigation";

export const UpperNavbar = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { user } = useSelector(selectAuth);

	const handleLogOut = () => {
		dispatch(resetAuth());
		router.push("/sign-in");
	};
	return (
		<div className="flex h-16 w-full items-center justify-between px-2 sm:px-6 md:gap-x-5 md:px-5 xl:px-0">
			<h1 className="text-xl font-bold text-orange-500 sm:text-3xl">Dream Teams</h1>
			<div className="flex flex-row items-center gap-x-5">
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
		</div>
	);
};
