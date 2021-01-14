import React from "react";
import { NotesContainer, ProfilePage } from "../styles/ProfileStyles";
import DisplayPanel from "./DisplayPanel";
import HistoryPanel from "./HistoryPanel";
import ProfileNav from "./ProfileNav";

function Profile() {
	return (
		<ProfilePage>
			<ProfileNav />
			<NotesContainer>
				<HistoryPanel />
				<DisplayPanel />
			</NotesContainer>
		</ProfilePage>
	);
}

export default Profile;
