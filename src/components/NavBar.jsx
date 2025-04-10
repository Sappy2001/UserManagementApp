import { Button } from "@/components/ui/button";

export default function Navbar() {
	return (
		<header className="w-full border-b border-border bg-background px-6 py-4 shadow-md flex justify-between items-center">
			<div className="text-xl font-bold text-primary">
				<div to="/">UserDetails App</div>
			</div>

			<nav className="flex items-center space-x-4">
				<div to="/dashboard">
					<Button variant="ghost">Dashboard</Button>
				</div>
				<div to="/about">
					<Button variant="ghost">About</Button>
				</div>
			</nav>
		</header>
	);
}
