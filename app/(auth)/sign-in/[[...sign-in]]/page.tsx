import { Card } from "@/components";
import { SignInForm } from "@/components/Auth";
import Link from "next/link";

const SignInPage = () => {
	return (
		<section className="flex h-[100dvh] items-center justify-center self-center">
			<div className="h-fit w-[32rem]">
				<Card>
					<h2 className="mb-6 text-2xl font-bold text-orange-500">
						Sign In to your account.
					</h2>
					<SignInForm />
					<p className="text-sm">
						Doesn&apos;t have an account yet,{" "}
						<Link href="/register" className="text-orange-500">
							register here.
						</Link>
					</p>
				</Card>
			</div>
		</section>
	);
};

export default SignInPage;
