"use client";

import { SIGN_IN_FORM } from "@/constant/static";
import { Button, Input } from "..";
import { useForm } from "react-hook-form";

export const SignInForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
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
			<Button variant="primary" type="submit" className="mt-3">
				Sign In
			</Button>
		</form>
	);
};
