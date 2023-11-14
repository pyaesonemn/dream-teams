"use client";

import { REGISTER_FORM } from "@/constant/static";
import { Button, Input } from "..";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setLoggedIn, setUser } from "@/redux/modules/auth";
import { setMembers } from "@/redux/modules/team";
import { useState } from "react";

export const RegisterForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { register, handleSubmit, getValues } = useForm();
	const [errors, setErrors] = useState<Array<string>>([]);

	const onSubmit = (data: any) => {
		const { username, password } = data;
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const userObj = users?.find((user: any) => user.username === username);
		const membersArray = userObj?.members || [];
		dispatch(setMembers(membersArray));
		const isUsernameUnique = users.every((user: any) => user.username !== username);
		if (!isUsernameUnique) {
			setErrors(["Username must be unique."]);
			return;
		}
		const isPasswordValid = getValues("password") === getValues("confirmPassword");

		if (!isPasswordValid) {
			setErrors(["Password must be the same."]);
			return;
		}
		localStorage.setItem("users", JSON.stringify(users.concat({ username, password })));
		setErrors([]);
		router.push("/");
		dispatch(setUser(username));
		dispatch(setLoggedIn(true));
	};

	return (
		<form className="mb-2 flex w-4/5 flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
			{REGISTER_FORM.map(({ name, type, label, placeholder }) => (
				<Input
					key={name}
					name={name}
					type={type}
					label={label}
					required={true}
					placeholder={placeholder}
					register={register}
				/>
			))}
			{errors.length > 0 &&
				errors.map((error) => (
					<span key={error} className="ml-1 text-sm font-semibold text-red-500">
						- {error}
					</span>
				))}
			<Button variant="primary" type="submit" className="mt-3">
				Register
			</Button>
		</form>
	);
};
