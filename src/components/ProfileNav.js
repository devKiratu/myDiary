import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Message } from "../styles/LandingPageStyles";
import { Logo, SignUpButton } from "../styles/Navbars";
import { StyledProfileNav } from "../styles/ProfileStyles";

function ProfileNav() {
	const { entries } = useContext(GlobalContext);
	return (
		<StyledProfileNav>
			<div>
				<Logo>myDiary</Logo>
			</div>
			<div>
				<Message>Total Notes: {entries.length} </Message>
				<Message>Settings</Message>
				<SignUpButton>Logout</SignUpButton>
			</div>
		</StyledProfileNav>
	);
}

export default ProfileNav;
