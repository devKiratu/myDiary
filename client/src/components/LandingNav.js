import React from "react";
import { Message } from "../styles/LandingPageStyles";
import { Logo, StyledLink, StyledNav } from "../styles/Navbars";

function LandingNav() {
	return (
		<StyledNav>
			<div>
				<StyledLink to="/">
					<Logo>myDiary</Logo>
				</StyledLink>
			</div>
			<div>
				<StyledLink to="/profile">
					<Message>Profile</Message>
				</StyledLink>
				<StyledLink to="/contact">
					<Message>Contact</Message>
				</StyledLink>
			</div>
		</StyledNav>
	);
}

export default LandingNav;
