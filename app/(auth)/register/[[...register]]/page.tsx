import { Card } from "@/components";
import { RegisterForm } from "@/components/Auth";
import Link from "next/link";

const RegisterPage = () => {
	return (
		<section className="flex h-[100dvh] items-center justify-center self-center">
			<div className="h-fit w-[32rem]">
				<Card>
					<h2 className="mb-6 text-2xl font-bold text-orange-500">Register here.</h2>
					<RegisterForm />
					<p className="text-sm">
						Already had an account,{" "}
						<Link href="/sign-in" className="text-orange-500">
							Sign in.
						</Link>
					</p>
				</Card>
			</div>
		</section>
	);
};

export default RegisterPage;
