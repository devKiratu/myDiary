import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Message } from "../styles/LandingPageStyles";

function DisplayCard() {
	const { currentlyDisplayed } = useContext(GlobalContext);
	return (
		<div>
			<Message>{currentlyDisplayed}</Message>
		</div>
	);
}

export default DisplayCard;
