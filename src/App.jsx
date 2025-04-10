import { useEffect, useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/button";
import Navbar from "./components/NavBar";
import UserCard from "./components/UserCard";
import { fetchUsers } from "./Api/fetchUsers";

function App() {
	const [users, setUsers] = useState([]);


	useEffect(() => {
		fetchUsers()
			.then((data) => {
				console.log("Fetched users:", data);
				setUsers(data);
			})
			.catch((err) => {
				console.error("Error fetching users", err);
			});
	}, []);

	return (
		<div className="">
			<Navbar />
			<div>
				<Button onClick={() => {
					fetchUsers()
						.then((data) => {
							console.log("Fetched users from refresh button:", data);
							setUsers(data);
						})
						.catch((err) => {
							console.error("Error fetching users from refresh button", err);
						});
				}} className="ml-5 my-3">Refresh Users</Button>
			</div>
			<div className="flex flex-wrap justify-center my-3">
				{users.map((item) => (
					<UserCard key={item.id} user={item} />
				))}
			</div>
		</div>
	);
}

export default App;
