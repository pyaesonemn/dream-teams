"use client";

import { SIGN_IN_FORM } from "@/constant/static";
import { Button, Input } from "..";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { useDispatch } from "react-redux";
import { setLoggedIn, setUser } from "@/redux/modules/auth";
import { setMembers } from "@/redux/modules/team";

export const SignInForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();

	const [errors, setErrors] = useState<Array<string>>([]);
	const isError = errors?.length > 0;

	const onSubmit = (data: any) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const { username, password } = data;
		const foundUser = users?.find((user: any) => user.username === username);
		const membersArray = foundUser?.members || [];
		dispatch(setMembers(membersArray));

		if (foundUser) {
			if (foundUser.password === password) {
				setErrors([]);
				router.replace("/players");
				dispatch(setUser(foundUser.username));
				dispatch(setLoggedIn(true));
			} else {
				setErrors([...errors, "Password is incorrect!"]);
			}
		} else {
			setErrors([...errors, "Username does not exist!"]);
		}
	};
	return (
		<form className="mb-2 flex w-4/5 flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
			{SIGN_IN_FORM.map(({ name, type, label, placeholder }) => (
				<Input
					key={name}
					name={name}
					type={type}
					label={label}
					placeholder={placeholder}
					register={register}
				/>
			))}
			{isError &&
				errors.map((error) => (
					<span key={error} className="ml-1 text-sm font-semibold text-red-500">
						- {error}
					</span>
				))}
			<Button variant="primary" type="submit" className={cn(isError ? "mt-0" : "mt-3")}>
				Sign In
			</Button>
		</form>
	);
};
