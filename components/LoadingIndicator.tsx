import { cn } from "@/utils/cn";
import { FC } from "react";

type LoadingIndicatorProps = {
	className?: string;
};

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({ className }) => {
	return (
		<div
			className={cn(
				"h-2.5 w-2.5 animate-[pulse_0.7s_ease-in-out_infinite] rounded-full bg-orange-500",
				className
			)}
		/>
	);
};
