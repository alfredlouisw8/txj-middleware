import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="container mx-auto px-5 flex justify-center items-center h-screen">
			<div className="flex flex-col gap-5 w-full items-center">
				<h1 className="text-center">Welcome to TXJ Neppan System</h1>
				<div className="max-w-[600px] w-full bg-primary rounded-lg p-10">
					<LoginForm />
				</div>
				<p className="underline">forgot password?</p>
			</div>
		</div>
	);
}
