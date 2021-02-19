import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Message } from "../styles/LandingPageStyles";
import { Logo, StyledLink, StyledNav } from "../styles/Navbars";

function LandingNav() {
	const { user } = useContext(GlobalContext);
	return (
		<StyledNav>
			<div>
				<StyledLink to="/">
					<Logo>myDiary</Logo>
				</StyledLink>
			</div>
			<div>
				<StyledLink to="/profile">
					<Message>{user ? user : "Profile"}</Message>
				</StyledLink>
				<StyledLink to="/contact">
					<Message>Contact</Message>
				</StyledLink>
			</div>
		</StyledNav>
	);
}

export default LandingNav;
