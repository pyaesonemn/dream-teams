import { FiUser } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";

export const NavCTA = () => {
	return (
		<div className="flex flex-row items-center gap-x-5">
			<div className="flex flex-row items-center gap-x-3">
				<span className="text-sm font-semibold">Joe Biden</span>
				<FiUser className="h-5 w-5" />
			</div>
			<div className="flex flex-row items-center gap-x-3">
				<span className="text-sm font-semibold">Log out</span>
				<AiOutlineLogout className="h-5 w-5" />
			</div>
		</div>
	);
};
