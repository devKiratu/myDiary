import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Message } from "../styles/LandingPageStyles";
import { Logo, SignUpButton, StyledLink } from "../styles/Navbars";
import { InnerCont, StyledProfileNav } from "../styles/ProfileStyles";

function ProfileNav() {
	const { entries, logoutUser, user } = useContext(GlobalContext);
	const history = useHistory();

	function handleLogout() {
		logoutUser();
		history.push("/");
	}

	return (
		<StyledProfileNav>
			<div>
				<Logo>
					<span style={{ textDecorationLine: "overline" }}>
						{user.toLowerCase()}'s Diary
					</span>
				</Logo>
			</div>
			<div>
				<StyledLink to="/" style={{ textDecoration: "none", color: "yellow" }}>
					<Message>HOMEPAGE</Message>
				</StyledLink>
			</div>
			<InnerCont>
				<Message>Total Notes: {entries.length} </Message>
				<Message>Settings</Message>
				<SignUpButton onClick={handleLogout}>Logout</SignUpButton>
			</InnerCont>
		</StyledProfileNav>
	);
}

export default ProfileNav;
