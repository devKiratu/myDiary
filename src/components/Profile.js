import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { NotesContainer, ProfilePage } from "../styles/ProfileStyles";
import DisplayPanel from "./DisplayPanel";
import EditModifyNote from "./EditModifyNote";
import HistoryPanel from "./HistoryPanel";
import ProfileNav from "./ProfileNav";

function Profile() {
	const { noteEditor, currentlyDisplayed } = useContext(GlobalContext);
	return (
		<ProfilePage>
			<ProfileNav />
			<NotesContainer>
				<HistoryPanel />
				{noteEditor ? <EditModifyNote /> : <DisplayPanel />}
			</NotesContainer>
		</ProfilePage>
	);
}

export default Profile;
