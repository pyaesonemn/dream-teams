import { FiUser } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";

export const UpperNavbar = () => {
	return (
		<div className="flex h-16 w-full items-center justify-between">
			<h1 className="text-3xl font-bold text-orange-500">Dream Teams</h1>
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
		</div>
	);
};
