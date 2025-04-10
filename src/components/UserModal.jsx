import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { useEffect } from "react";

export default function UserModal({ user, open, setOpen }) {
	useEffect(() => {
		console.log("Dialog open state:", open);
	}, [open]);
	return (
		<Dialog open={open} onOpenChange={setOpen}>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>User Details</DialogTitle>
					<DialogDescription>
						Here’s more information about {user?.name}.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-2 text-sm">
					<div>
						<strong>Address:</strong>
						<p>city: {user?.address.city}</p>
						<p>street: {user?.address.street}</p>
					</div>
					<p>
						<strong>Comapany Name:</strong> {user?.company.name}
					</p>

				</div>

			</DialogContent>
		</Dialog>
	);
}
