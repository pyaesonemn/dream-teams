"use client";

import { Button, Input } from "..";

export const LowerNavbar = () => {
	return (
		<div className="flex h-12 w-full items-center justify-between gap-x-5">
			<Input
				type="search"
				name="searchPlayer"
				register={() => {}}
				className="w-full rounded-md"
				placeholder="Search player..."
			/>
			<Button type="button" variant="primary" className="w-48">
				Create Team +
			</Button>
		</div>
	);
};
