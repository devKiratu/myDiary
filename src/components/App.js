import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import LandingPage from "./LandingPage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

export default function App() {
	return (
		<div>
			<GlobalStyles />
			<LandingPage />
			<SignIn />
			<SignUp />
		</div>
	);
}
