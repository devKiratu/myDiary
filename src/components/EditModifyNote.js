import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
	NotesForm,
	NotesInput,
	NotesLabel,
	TextArea,
} from "../styles/FormStyles";
import { NotesNav, SaveButton } from "../styles/Navbars";

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
	const ids = entries.map((entry) => entry.id);

	function handleNewEntry() {
		const newEntry = {
			id: Date.now(),
			created: Date.now(),
			title: title,
			content: text,
		};
		addEntry(newEntry);
		toggleNoteEditor();
		console.log(newEntry);
	}

	function handleModifyEntry() {
		const modifiedEntry = {
			id: currentlyDisplayed.id,
			created: currentlyDisplayed.created,
			title: editTitle,
			content: EditText,
		};

		modifyEntry(modifiedEntry, currentlyDisplayed.id);
		toggleNoteEditor();
		displayNote(0);
	}

	function handleSubmit(e) {
		e.preventDefault();
		ids.includes(currentlyDisplayed.id)
			? handleModifyEntry()
			: handleNewEntry();
	}

	return (
		<div>
			<NotesForm onSubmit={handleSubmit}>
				<NotesNav>
					<SaveButton type="submit">Save</SaveButton>
				</NotesNav>

				<NotesLabel htmlFor="Note Title">Note Title</NotesLabel>
				<NotesInput
					type="text"
					placeholder="Enter note title here"
					value={ids.includes(currentlyDisplayed.id) ? editTitle : title}
					onChange={
						ids.includes(currentlyDisplayed.id)
							? (e) => setEditTitle(e.target.value)
							: (e) => setTitle(e.target.value)
					}
				/>
				<TextArea
					placeholder="Enter note content here"
					value={ids.includes(currentlyDisplayed.id) ? EditText : text}
					onChange={
						ids.includes(currentlyDisplayed.id)
							? (e) => setEditText(e.target.value)
							: (e) => setText(e.target.value)
					}
				/>
			</NotesForm>
		</div>
	);
}
