import { cn } from "@/utils/cn";
import { FC, InputHTMLAttributes } from "react";
import { RenderIf } from "./RenderIf";

type InputProps = {
	name: string;
	register: any;
	type?: string;
	label?: string;
	className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
	name,
	register,
	type = "text",
	label,
	className,
	...rest
}) => {
	return (
		<div className="flex flex-col gap-y-1">
			<RenderIf condition={Boolean(label)}>
				<label className="pl-1 text-base font-medium" htmlFor={label}>
					{label}
				</label>
			</RenderIf>
			<input
				type={type}
				{...register(name)}
				className={cn(
					"h-10 w-full rounded-[2rem] border-2 border-gray-500 bg-gray-100 px-4 py-2 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-0",
					className
				)}
				{...rest}
			/>
		</div>
	);
};
