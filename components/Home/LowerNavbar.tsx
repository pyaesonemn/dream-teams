"use client";

import { Button, Input, Modal } from "..";
import { useForm } from "react-hook-form";
import { setKeyword } from "@/redux/modules/playersList";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowRoundBack, IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { CreateTeamForm } from ".";

type searchData = {
	searchKeyword: string;
};

export const LowerNavbar = () => {
	const router = useRouter();
	const pathName = usePathname();
	const dispatch = useDispatch();

	const { register, handleSubmit } = useForm();

	const onSubmit = (data: any) => dispatch(setKeyword(data.searchKeyword));

	const [showModal, setShowModal] = useState<boolean>(false);

	return (
		<div className="flex h-16 w-full items-center justify-between gap-x-2 px-2 sm:px-6 md:gap-x-5 md:px-5 xl:px-0">
			<Modal
				show={showModal}
				title="Create Your Dream Team"
				onClose={() => setShowModal(false)}
				onOk={() => {}}>
				<div>
					<CreateTeamForm pathName={pathName} setShowModal={setShowModal} />
				</div>
			</Modal>
			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="search"
					name="searchKeyword"
					register={register}
					className="h-11 w-full rounded-3xl text-xs text-black md:text-sm lg:text-base"
					placeholder="Search player..."
				/>
			</form>
			<Button
				onClick={() => setShowModal((prev) => !prev)}
				type="button"
				variant="primary"
				className="flex h-11 w-16 items-center justify-center px-3 py-1 text-xs sm:w-24 sm:w-32 sm:py-2 md:w-40 md:px-4 md:text-sm lg:w-48 lg:text-base">
				<span className="hidden sm:block">Make a team</span>
				<span className="block sm:hidden">
					<IoIosAdd className="h-7 w-7" />
				</span>
			</Button>
			<Button
				onClick={() =>
					pathName === "/my-teams" ? router.push("/players") : router.push("/my-teams")
				}
				type="button"
				variant="primary"
				className="flex h-11 w-24 px-3 py-1 text-xs sm:w-32 sm:py-2 md:w-40 md:px-4 md:text-sm lg:w-48 lg:text-base">
				{pathName === "/my-teams" ? (
					<div className="flex h-full w-full items-center justify-center">
						<span className="hidden sm:block">Back to list</span>
						<span className="block sm:hidden">
							<IoMdArrowRoundBack className="h-5 w-5" />
						</span>
					</div>
				) : (
					<div className="flex h-full w-full items-center justify-center">
						<span className="hidden sm:block">Check out teams</span>
						<span className="block sm:hidden">Teams</span>
					</div>
				)}
			</Button>
		</div>
	);
};
