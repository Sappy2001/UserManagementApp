import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserModal from "./UserModal";
import { useState } from "react"

export default function UserCard({ user }) {
	const [open, setOpen] = useState(false)
	return (
		<Card className="w-full max-w-sm shadow-lg border border-border bg-blue-500  text-white m-3  hover:bg-blue-800  transition" onClick={() => { setOpen(true) }}>
			<CardHeader>
				<CardTitle className="text-xl font-semibold">{user?.name}</CardTitle>
			</CardHeader>
			<CardContent className="m-1 ">
				<div>
					<strong className="">Email: </strong> {user?.email}
				</div>
				<div>
					<strong className="">Phone: </strong>
					{/* spliting the number from extra characters with x and remove whitespaces*/}
					{user?.phone.split("x")[0].trim()}
				</div>
				<div>
					<strong className="">Website: </strong>
					{/* making the website link clikable and opening new tab */}
					<a
						href={`https://${user?.website}`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-white underline font-bold"
					>
						{user?.website}
					</a>
				</div>
			</CardContent>
			<UserModal open={open} setOpen={setOpen} user={user} />
		</Card>
	);
}
