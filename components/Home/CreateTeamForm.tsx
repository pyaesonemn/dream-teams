import { TEAM_FORM } from "@/constant/static";
import { Button, Input } from "..";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/selects.";
import { FC } from "react";

type CreateTeamFormProps = {
	setShowModal: (value: boolean) => void;
};

export const CreateTeamForm: FC<CreateTeamFormProps> = ({ setShowModal }) => {
	const { register, handleSubmit } = useForm();
	const { user: currentUserName } = useSelector(selectAuth);
	const onSubmit = (data: any) => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const currentUser = users.find((user: any) => user.username === currentUserName);
		if (currentUser) {
			if (!currentUser.teams) {
				currentUser.teams = [];
			}
			currentUser.teams.push({
				name: data.name,
				playerCount: data.playerCount,
				region: data.region,
				country: data.country,
				players: []
			});
			localStorage.setItem("users", JSON.stringify(users));
			setShowModal(false);
		} else {
			console.log("User not found");
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
			{TEAM_FORM.map(({ name, type, label, placeholder }) => (
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
				Create Team
			</Button>
		</form>
	);
};
