import React, { useContext, useState } from "react";
import {
	Form,
	FormContainer,
	Label,
	Input,
	Button,
	Alert,
} from "../../styles/FormStyles";
import { Logo } from "../../styles/Navbars";
import { Message } from "../../styles/LandingPageStyles";
import LandingNav from "../LandingNav";
import { GlobalContext } from "../../context/GlobalState";

function SignIn() {
	const { loginUser, loginErr } = useContext(GlobalContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function login() {
		const credentials = {
			email,
			password,
		};
		loginUser(credentials);
	}

	function handleLogin(e) {
		e.preventDefault();
		login();
	}

	return (
		<FormContainer>
			<LandingNav />
			<Form onSubmit={handleLogin}>
				<Logo>myDiary</Logo>
				{loginErr ? (
					<Alert>{loginErr} </Alert>
				) : (
					<Message>Welcome Back!</Message>
				)}
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
				<Button type="submit"> Sign In</Button>
			</Form>
		</FormContainer>
	);
}

export default SignIn;
