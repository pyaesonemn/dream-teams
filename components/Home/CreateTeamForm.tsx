/* eslint-disable react-hooks/exhaustive-deps */
import { TEAM_FORM } from "@/constant/static";
import { Button, Input } from "..";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/selects.";
import { FC, useEffect, useState } from "react";
import { Team, isTeamNameUnique } from "@/utils";

type CreateTeamFormProps = {
	setShowModal: (value: boolean) => void;
	previousData?: Team;
};

export const CreateTeamForm: FC<CreateTeamFormProps> = ({ setShowModal, previousData }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		setError
	} = useForm();
	const { user: currentUserName } = useSelector(selectAuth);
	const [customErrors, setCustomErrors] = useState<Array<string>>([]);

	useEffect(() => {
		if (previousData) {
			const initialData = {
				name: previousData.name,
				playerCount: previousData.playerCount,
				region: previousData.region,
				country: previousData.country
			};
			reset(initialData);
		}
	}, [previousData]);

	const onSubmit = (data: any) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const currentUser = users.find((user: any) => user.username === currentUserName);
		if (currentUser) {
			if (!currentUser.teams) {
				currentUser.teams = [];
			}
			if (isTeamNameUnique(data.name, currentUser.teams)) {
				setCustomErrors([]);
				currentUser.teams.push({
					name: data.name,
					playerCount: data.playerCount,
					region: data.region,
					country: data.country,
					players: []
				});
				setShowModal(false);
			} else {
				setCustomErrors(["Team name must be unique."]);
			}
			localStorage.setItem("users", JSON.stringify(users));
		} else {
			console.log("User not found");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
			{TEAM_FORM.map(({ name, type, label, placeholder }) => (
				<Input
					key={name}
					required={true}
					name={name}
					type={type}
					label={label}
					placeholder={placeholder}
					register={register}
				/>
			))}
			<div className="text-sm font-medium text-red-500">
				{customErrors?.map((error) => <span key={error}>{error}</span>)}
			</div>
			<Button variant="primary" type="submit" className="mt-3">
				Create Team
			</Button>
		</form>
	);
};
