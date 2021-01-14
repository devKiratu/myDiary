import React from "react";
import { Message } from "../styles/LandingPageStyles";
import {
	Logo,
	SignInButton,
	SignUpButton,
	StyledLink,
	StyledNav,
} from "../styles/Navbars";

function LandingNav() {
	return (
		<StyledNav>
			<div>
				<StyledLink to="/">
					<Logo>myDiary</Logo>
				</StyledLink>
			</div>
			<div>
				<StyledLink to="/features">
					<Message>Features</Message>
				</StyledLink>
				<StyledLink to="/contact">
					<Message>Contact</Message>
				</StyledLink>
				<StyledLink to="/signin">
					<SignInButton>Sign In</SignInButton>
				</StyledLink>
				<StyledLink to="/signup">
					<SignUpButton>Sign Up</SignUpButton>
				</StyledLink>
			</div>
		</StyledNav>
	);
}

export default LandingNav;
