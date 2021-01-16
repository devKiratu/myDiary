import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Message } from "../styles/LandingPageStyles";
import { NavButton, NotesNav } from "../styles/Navbars";

function DisplayCard() {
	const {
		currentlyDisplayed,
		deleteEntry,
		displayNote,
		toggleNoteEditor,
	} = useContext(GlobalContext);

	function handleDelete(e) {
		// console.log("the id is ", currentlyDisplayed.id);
		deleteEntry(currentlyDisplayed.id);
		displayNote(0);
	}

	function handleEdit() {
		if (currentlyDisplayed.id !== 0) {
			toggleNoteEditor();
			// console.log("modify note whose id is", currentlyDisplayed.id);
		}
	}
	return (
		<div>
			<NotesNav>
				<NavButton onClick={handleEdit}>Edit</NavButton>
				<NavButton onClick={handleDelete}>Delete</NavButton>
			</NotesNav>
			<h4>{currentlyDisplayed.title}</h4>

			<Message>{currentlyDisplayed.text}</Message>
		</div>
	);
}

export default DisplayCard;
