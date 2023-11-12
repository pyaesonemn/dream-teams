"use client";

import { useRef, useEffect, ReactNode, FC, useState } from "react";
import { Button } from ".";
import { AiOutlineClose } from "react-icons/ai";
import { cn } from "@/utils";

type ModalProps = {
	className?: string;
	title: string;
	show: boolean;
	onClose: () => void;
	onOk: () => void;
	children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ title, onClose, onOk, children, show, className }) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	useEffect(() => {
		if (show) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [show]);

	const closeDialog = () => {
		dialogRef.current?.close();
		onClose();
	};

	const clickOk = () => {
		onOk();
		closeDialog();
	};

	return (
		<dialog
			ref={dialogRef}
			className={cn("w-4/5 max-w-2xl rounded-2xl backdrop:bg-black/50", className)}>
			<div className="px-6 py-5">
				<div className="mb-5 flex flex-row items-center justify-between">
					<h3 className="text-2xl font-bold text-orange-500">{title}</h3>
					<Button
						className="flex h-8 w-8 items-center justify-center rounded-full px-0 py-0"
						onClick={closeDialog}>
						<AiOutlineClose className="h-4 w-4 font-bold" />
					</Button>
				</div>
				<div className={cn("h-full w-full")}>{children}</div>
			</div>
		</dialog>
	);
};
