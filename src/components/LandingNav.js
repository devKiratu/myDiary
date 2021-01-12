import React from "react";
import { Message } from "../styles/LandingPageStyles";
import {
	Header,
	SignInButton,
	SignUpButton,
	StyledNav,
} from "../styles/Navbars";

function LandingNav() {
	return (
		<StyledNav>
			<div>
				<Header>myDiary</Header>
			</div>
			<div>
				<Message>Features</Message>
				<Message>Contact</Message>
				<SignInButton>Sign In</SignInButton>
				<SignUpButton>Sign Up</SignUpButton>
			</div>
		</StyledNav>
	);
}

export default LandingNav;
