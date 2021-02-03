import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Message } from "../styles/LandingPageStyles";
import {
	Logo,
	SignUpButton,
	StyledLogoLink,
	StyledLink,
} from "../styles/Navbars";
import { StyledProfileNav } from "../styles/ProfileStyles";

function ProfileNav() {
	const { entries, logoutUser } = useContext(GlobalContext);

	function handleLogout() {
		logoutUser();
	}

	return (
		<StyledProfileNav>
			<div>
				<StyledLogoLink to="/">
					<Logo>myDiary</Logo>
				</StyledLogoLink>
			</div>
			<div>
				<Message>Total Notes: {entries.length} </Message>
				<Message>Settings</Message>
				<StyledLink to="/">
					<SignUpButton onClick={handleLogout}>Logout</SignUpButton>
				</StyledLink>
			</div>
		</StyledProfileNav>
	);
}

export default ProfileNav;
