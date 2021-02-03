import React, { useContext, useState } from "react";
import {
	Form,
	FormContainer,
	Label,
	Input,
	Button,
} from "../../styles/FormStyles";
import { Logo } from "../../styles/Navbars";
import { Message } from "../../styles/LandingPageStyles";
import LandingNav from "../LandingNav";
import { GlobalContext } from "../../context/GlobalState";

function SignIn() {
	const { signUp } = useContext(GlobalContext);
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSignup(e) {
		e.preventDefault();
		const credentials = {
			username,
			email,
			password,
		};
		signUp(credentials);
		setUserName("");
		setEmail("");
		setPassword("");
	}

	return (
		<FormContainer>
			<LandingNav />
			<Form onSubmit={handleSignup}>
				<Logo>myDiary</Logo>
				<Message>Create an Account </Message>
				<Label htmlFor="username">Username</Label>
				<Input
					type="text"
					placeholder="Enter your username"
					value={username}
					onChange={(e) => setUserName(e.target.value)}
					required
				/>
				<Label htmlFor="email">Email</Label>
				<Input
					type="email"
					placeholder="Enter your email address"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Label htmlFor="password">Password</Label>
				<Input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Button type="submit"> Sign Up</Button>
			</Form>
		</FormContainer>
	);
}

export default SignIn;
