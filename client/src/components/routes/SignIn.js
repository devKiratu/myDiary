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
import { useHistory } from "react-router-dom";

function SignIn() {
	const { loginUser, isAuth } = useContext(GlobalContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	async function redirectUser() {
		(await isAuth) ? history.push("/profile") : history.push("/");
	}

	function handleLogin(e) {
		e.preventDefault();
		const credentials = {
			email,
			password,
		};
		loginUser(credentials);
		setEmail("");
		setPassword("");
		redirectUser();
	}

	return (
		<FormContainer>
			<LandingNav />
			<Form onSubmit={handleLogin}>
				<Logo>myDiary</Logo>
				<Message>Welcome Back! </Message>
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
