import { cn } from "@/utils/cn";
import { FC, ReactNode } from "react";

type CardProps = {
	children: ReactNode;
	className?: string;
};

export const Card: FC<CardProps> = ({ children, className }) => {
	return (
		<div className={cn("w-full rounded-xl bg-white p-5 text-black", className)}>{children}</div>
	);
};
