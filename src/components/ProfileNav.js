import React from "react";
import { Message } from "../styles/LandingPageStyles";
import { Logo, SignUpButton } from "../styles/Navbars";
import { StyledProfileNav } from "../styles/ProfileStyles";

function ProfileNav() {
	return (
		<StyledProfileNav>
			<div>
				<Logo>myDiary</Logo>
			</div>
			<div>
				<Message>Total Notes: </Message>
				<Message>Settings</Message>
				<SignUpButton>Logout</SignUpButton>
			</div>
		</StyledProfileNav>
	);
}

export default ProfileNav;
