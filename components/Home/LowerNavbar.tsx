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
		<div className="flex h-16 w-full items-center justify-between gap-x-5">
			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="search"
					name="searchKeyword"
					register={register}
					className="h-11 w-full rounded-3xl text-black"
					placeholder="Search player..."
				/>
			</form>
			<Button type="button" variant="primary" className="w-48">
				Create Team +
			</Button>
		</div>
	);
};
