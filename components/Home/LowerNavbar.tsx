"use client";

import { Button, Input } from "..";
import { useForm } from "react-hook-form";
import { setKeyword } from "@/redux/modules/playersList";
import { useDispatch } from "react-redux";

type searchData = {
	searchKeyword: string;
};

export const LowerNavbar = () => {
	const dispatch = useDispatch();

	const { register, handleSubmit } = useForm();

	const onSubmit = (data: any) => dispatch(setKeyword(data.searchKeyword));

	return (
		<div className="flex h-16 w-full items-center justify-between gap-x-2 px-2 sm:px-6 md:gap-x-5 md:px-5 xl:px-0">
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
				type="button"
				variant="primary"
				className="h-11 w-24 px-3 py-1 text-xs sm:w-32 sm:py-2 md:w-40 md:px-4 md:text-sm lg:w-48 lg:text-base">
				Make a team
			</Button>
		</div>
	);
};
