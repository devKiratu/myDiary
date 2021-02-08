import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
	NotesForm,
	NotesInput,
	NotesLabel,
	TextArea,
} from "../styles/FormStyles";
import { NavButton, NotesNav } from "../styles/Navbars";

export default function EditModifyNote() {
	const [title, setTitle] = useState("");
	const [text, setText] = useState(``);
	const {
		addEntry,
		toggleNoteEditor,
		currentlyDisplayed,
		entries,
		displayNote,
		modifyEntry,
	} = useContext(GlobalContext);
	const [editTitle, setEditTitle] = useState(currentlyDisplayed.title);
	const [EditText, setEditText] = useState(currentlyDisplayed.text);
	// console.log("I've opened to modify note of id", currentlyDisplayed.id);
	const ids = entries.map((entry) => entry._id);

	function handleNewEntry() {
		const newEntry = {
			title: title,
			content: text,
		};
		addEntry(newEntry);
		toggleNoteEditor();
		// console.log(newEntry);
	}

	function handleModifyEntry() {
		const modifiedEntry = {
			_id: currentlyDisplayed._id,
			created: currentlyDisplayed.created,
			title: editTitle,
			content: EditText,
		};

		modifyEntry(modifiedEntry, currentlyDisplayed._id);
		toggleNoteEditor();
		displayNote(0);
	}

	function handleSubmit(e) {
		e.preventDefault();
		ids.includes(currentlyDisplayed._id)
			? handleModifyEntry()
			: handleNewEntry();
	}

	return (
		<div>
			<NotesForm onSubmit={handleSubmit}>
				<NotesNav>
					<NavButton type="submit">Save</NavButton>
					<NavButton onClick={() => toggleNoteEditor()}>Cancel</NavButton>
				</NotesNav>

				<NotesLabel htmlFor="Note Title">Note Title</NotesLabel>
				<NotesInput
					type="text"
					placeholder="Enter note title here"
					value={ids.includes(currentlyDisplayed._id) ? editTitle : title}
					onChange={
						ids.includes(currentlyDisplayed._id)
							? (e) => setEditTitle(e.target.value)
							: (e) => setTitle(e.target.value)
					}
					required
				/>
				<TextArea
					placeholder="Enter note content here"
					value={ids.includes(currentlyDisplayed._id) ? EditText : text}
					onChange={
						ids.includes(currentlyDisplayed._id)
							? (e) => setEditText(e.target.value)
							: (e) => setText(e.target.value)
					}
					required
				/>
			</NotesForm>
		</div>
	);
}
