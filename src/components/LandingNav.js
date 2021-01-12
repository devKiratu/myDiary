import React from "react";
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
				<SignInButton>Sign In</SignInButton>
				<SignUpButton>Sign Up</SignUpButton>
			</div>
		</StyledNav>
	);
}

export default LandingNav;
