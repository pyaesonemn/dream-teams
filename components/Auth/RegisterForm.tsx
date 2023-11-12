"use client";

import { REGISTER_FORM } from "@/constant/static";
import { Button, Input } from "..";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setLoggedIn, setUser } from "@/redux/modules/auth";

export const RegisterForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();

	const onSubmit = (data: any) => {
		const { username, password } = data;
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		localStorage.setItem("users", JSON.stringify(users.concat({ username, password })));
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
					placeholder={placeholder}
					register={register}
				/>
			))}
			<Button variant="primary" type="submit" className="mt-3">
				Register
			</Button>
		</form>
	);
};
