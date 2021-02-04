import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { NotesContainer, ProfilePage } from "../styles/ProfileStyles";
import DisplayPanel from "./DisplayPanel";
import EditModifyNote from "./EditModifyNote";
import HistoryPanel from "./HistoryPanel";
import ProfileNav from "./ProfileNav";

function Profile() {
	const { noteEditor } = useContext(GlobalContext);
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

export default withRouter(Profile);
