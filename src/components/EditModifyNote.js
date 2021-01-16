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
	const { addEntry, toggleNoteEditor } = useContext(GlobalContext);

	function handleSubmit(e) {
		e.preventDefault();

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
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<TextArea
					placeholder="Enter note content here"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</NotesForm>
		</div>
	);
}
