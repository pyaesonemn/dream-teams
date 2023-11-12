import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type BackdropProps = {
	children?: ReactNode;
	className?: string;
	zIndex?: string;
	show?: boolean;
	submitting?: boolean;
	onClick?: () => void;
};

export const Backdrop: React.FC<BackdropProps> = ({
	children,
	className,
	zIndex = "z-10",
	show,
	submitting,
	onClick
}) => {
	if (!show) {
		return null;
	}

	return (
		<div
			onClick={onClick}
			className={cn(
				"bg-backdrop fixed inset-0",
				zIndex,
				submitting && "cursor-not-allowed",
				className
			)}>
			{children}
		</div>
	);
};
