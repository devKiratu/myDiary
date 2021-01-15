import React from "react";
import { DisplayContainer } from "../styles/ProfileStyles";
import DisplayCard from "./DisplayCard";
import NotesboardNavbar from "./NotesboardNavbar";

function DisplayPanel() {
	return (
		<DisplayContainer>
			<NotesboardNavbar />
			<DisplayCard />
		</DisplayContainer>
	);
}

export default DisplayPanel;
