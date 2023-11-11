import { Card } from "@/components";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
	return (
		<section className="flex h-[100dvh] items-center justify-center self-center">
			<div className="h-fit w-[32rem]">
				<Card>
					<h2 className="text-2xl font-bold">Register here.</h2>
					<div>Email Input</div>
					<div>Password Input</div>
					<div>Password Confirmation Input</div>
					<p className="text-sm">
						Already had an account,{" "}
						<Link href="/sign-in" className="text-blue-700">
							Sign in.
						</Link>
					</p>
				</Card>
			</div>
		</section>
	);
};

export default RegisterPage;
