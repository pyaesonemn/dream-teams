"use client";

import { cn } from "@/utils/cn";
import { FC, ReactNode, useState } from "react";
import { Backdrop } from ".";

export type ModalProps = {
	children: ReactNode;
	className?: string;
	isOpen: boolean;
	onClose: () => void;
	isLoading?: boolean;
	zIndex?: string;
	overrideEscAction?: boolean;
	variant?: "slideUp" | "slideDown" | "confirm" | "option";
};

export const Modal: FC<ModalProps> = ({
	children,
	className,
	isOpen,
	onClose,
	isLoading,
	zIndex,
	overrideEscAction,
	variant = "slideUp"
}) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const defaultCenteringSmStyles =
		"sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2";
	const variantStyles: Record<typeof variant, Record<string, string>> = {
		slideUp: {
			"0": "sm:hidden translate-y-full sm:translate-y-0 animate-modalSlideUpReverse",
			"1": "sm:flex top-[55px] animate-modalSlideUp",
			default: cn(
				"rounded-t-modal-corner w-full sm:animate-none sm:max-h-[80vh] sm:rounded-base sm:w-[min(100%,600px)]",
				defaultCenteringSmStyles
			)
		},
		slideDown: {
			"0": "sm:hidden -translate-y-full sm:translate-y-0 animate-modalSlideDownReverse",
			"1": "sm:flex h-[calc(100%-80px)] top-0 animate-modalSlideDown",
			default: cn(
				"rounded-b-modal-corner w-full sm:animate-none sm:max-h-[80vh] sm:rounded-base sm:w-[min(100%,600px)]",
				defaultCenteringSmStyles
			)
		},
		confirm: {
			"0": "hidden",
			"1": "flex",
			default: cn("w-[min(320px,95vw)] rounded-base h-fit", defaultCenteringSmStyles)
		},
		option: {
			"0": "hidden",
			"1": "flex",
			default:
				"w-[min(380px,95vw)] max-h-[65vh] h-max mx-auto top-[calc(50%+27.5px)] -translate-y-1/2"
		}
	};

	return (
		<div id="modal-test">
			<div
				className={cn(
					"fixed inset-0 flex cursor-auto flex-col overflow-hidden bg-white shadow-xl  sm:h-max",
					variantStyles[variant].default,
					isMounted ? "" : "opacity-0",
					variantStyles[variant][+isOpen],
					zIndex,
					className
				)}>
				{children}
			</div>
			<Backdrop
				show={isOpen}
				zIndex={zIndex}
				onClick={!isLoading ? onClose : undefined}
				submitting={isLoading}
			/>
		</div>
	);
};
