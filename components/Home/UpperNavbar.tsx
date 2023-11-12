import { FiUser } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";

export const UpperNavbar = () => {
	return (
		<div className="flex h-16 w-full items-center justify-between px-2 sm:px-6 md:gap-x-5 md:px-5 xl:px-0">
			<h1 className="text-xl font-bold text-orange-500 sm:text-3xl">Dream Teams</h1>
			<div className="flex flex-row items-center gap-x-5">
				<div className="flex flex-row items-center gap-x-2 sm:gap-x-3">
					<span className="text-xs font-semibold sm:text-sm">Joe Biden</span>
					<FiUser className="h-5 w-5" />
				</div>
				<div className="flex flex-row items-center gap-x-3">
					<span className="hidden text-sm font-semibold sm:block">Log out</span>
					<AiOutlineLogout className="h-5 w-5" />
				</div>
			</div>
		</div>
	);
};
