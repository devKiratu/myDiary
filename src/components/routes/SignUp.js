import React from "react";
import {
	Form,
	FormContainer,
	Label,
	Input,
	Button,
} from "../../styles/FormStyles";
import { Logo } from "../../styles/Navbars";
import { Message } from "../../styles/LandingPageStyles";

function SignIn() {
	return (
		<FormContainer>
			<Form>
				<Logo>myDiary</Logo>
				<Message>Create an Account </Message>
				<Label htmlFor="email">Email</Label>
				<Input type="email" placeholder="Enter your email address" required />
				<Label htmlFor="password">Password</Label>
				<Input type="password" placeholder="Enter your password" required />
				<Button> Sign Up</Button>
			</Form>
		</FormContainer>
	);
}

export default SignIn;
