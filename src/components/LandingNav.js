import React from "react";
import { Message } from "../styles/LandingPageStyles";
import { Logo, SignInButton, SignUpButton, StyledNav } from "../styles/Navbars";

function LandingNav() {
	return (
		<StyledNav>
			<div>
				<Logo>myDiary</Logo>
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
