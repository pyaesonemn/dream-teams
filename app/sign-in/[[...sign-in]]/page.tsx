import { Card } from "@/components";
import Link from "next/link";

const SignInPage = () => {
	return (
		<section className="flex h-[100dvh] items-center justify-center self-center">
			<div className="h-fit w-[32rem]">
				<Card>
					<h2 className="text-2xl font-bold">Sign In to your account.</h2>
					<div>Email Input</div>
					<div>Password Input</div>
					<p className="text-sm">
						Doesn&apos;t have an account yet,{" "}
						<Link href="/register" className="text-blue-700">
							register here.
						</Link>
					</p>
				</Card>
			</div>
		</section>
	);
};

export default SignInPage;
