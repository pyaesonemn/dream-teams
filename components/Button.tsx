import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = {
	variant?: "primary" | "secondary" | "tertiary";
	children: string | ReactNode;
	onClick?: () => void;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
	variant = "primary",
	children,
	onClick,
	className,
	...rest
}) => {
	return (
		<button
			className={cn(
				"disabled:cursor-not-allowed",
				{
					"rounded-3xl bg-orange-500 px-4 py-2 text-white": variant === "primary",
					"bg-transparent text-orange-500 hover:underline": variant === "tertiary"
				},
				className
			)}
			{...rest}
			onClick={onClick}>
			{children}
		</button>
	);
};
