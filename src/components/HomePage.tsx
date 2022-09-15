import MainBodyContainer from "./MainBodyContainer";
import NavBar from "./NavBar";
import React from "react";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			<NavBar />
			<MainBodyContainer />
		</div>
	);
}
