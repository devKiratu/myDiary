import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Message } from "../styles/LandingPageStyles";
import { NavButton, NotesNav } from "../styles/Navbars";

function DisplayCard() {
	const { currentlyDisplayed, deleteEntry, displayNote } = useContext(
		GlobalContext
	);

	function handleDelete(e) {
		// console.log("the id is ", currentlyDisplayed.id);
		deleteEntry(currentlyDisplayed.id);
		displayNote(0);
	}

	return (
		<div>
			<NotesNav>
				<NavButton>Edit</NavButton>
				<NavButton onClick={handleDelete}>Delete</NavButton>
			</NotesNav>
			<h4>{currentlyDisplayed.title}</h4>

			<Message>{currentlyDisplayed.text}</Message>
		</div>
	);
}

export default DisplayCard;
