import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Message } from "../styles/LandingPageStyles";
import { Logo, SignUpButton, StyledLink } from "../styles/Navbars";
import { StyledProfileNav } from "../styles/ProfileStyles";

function ProfileNav() {
	const { entries, logoutUser, user } = useContext(GlobalContext);

	function handleLogout() {
		logoutUser();
	}

	return (
		<StyledProfileNav>
			<div>
				{/* <StyledLogoLink to="/"> */}
				<Logo>
					<span style={{ textDecorationLine: "overline" }}>
						{user.toLowerCase()}'s Diary
					</span>
				</Logo>
				{/* </StyledLogoLink> */}
			</div>
			{/* <div>
				<Message>
					<span style={{ color: "yellow" }}>{user.toUpperCase()}'s Diary</span>
				</Message>
			</div> */}
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
