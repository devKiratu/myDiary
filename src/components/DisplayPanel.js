import React from "react";
import { DisplayContainer } from "../styles/ProfileStyles";
import DisplayCard from "./DisplayCard";

function DisplayPanel() {
	return (
		<DisplayContainer>
			Display cards appear here
			<DisplayCard />
		</DisplayContainer>
	);
}

export default DisplayPanel;
