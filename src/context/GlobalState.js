import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
	entries: [
		// {
		// 	content: `Click a note to display`,
		// 	title: "",
		// 	id: 0,
		// },
		// {
		// 	id: 12,
		// 	created: Date.now(),
		// 	content: `
		//           What is Lorem Ipsum?
		//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		//   `,
		// },
	],
	currentlyDisplayed: {
		text: `Click a note to display`,
		title: "",
		id: 0,
		created: 0,
	},
	noteEditor: false,
};

//global context

export const GlobalContext = createContext(initialState);

//provider

export default function GlobalProvider({ children }) {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function addEntry(noteEntry) {
		dispatch({
			type: "ADD_ENTRY",
			payload: noteEntry,
		});
	}

	function modifyEntry(modifiedEntry, id) {
		const unmodifiedEntries = state.entries.filter((entry) => entry.id !== id);
		console.log("unmodified entries are ", unmodifiedEntries);
		const updatedEntries = [...unmodifiedEntries, modifiedEntry];

		dispatch({
			type: "MODIFY_ENTRY",
			payload: updatedEntries,
		});
	}

	function deleteEntry(id) {
		if (id !== 0) {
			dispatch({
				type: "DELETE_ENTRY",
				payload: id,
			});
		}
	}

	function displayNote(id) {
		if (id === 0) {
			// console.log("1st option current entries are", state.entries);

			dispatch({
				type: "SET_CURRENTLY_DISPLAYED",
				payload: {
					text: `Click a note to display`,
					title: "",
					id: 0,
				},
			});
		} else {
			const [selectedEntry] = state.entries.filter((entry) => entry.id === id);
			// console.log("2nd option current entries are", state.entries);
			dispatch({
				type: "SET_CURRENTLY_DISPLAYED",
				payload: {
					text: selectedEntry.content,
					title: selectedEntry.title,
					id: selectedEntry.id,
					created: selectedEntry.created,
				},
			});
		}
	}

	function toggleNoteEditor() {
		dispatch({
			type: "TOGGLE_NOTE_EDITOR",
			payload: !state.noteEditor,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				entries: state.entries,
				currentlyDisplayed: state.currentlyDisplayed,
				noteEditor: state.noteEditor,
				displayNote,
				toggleNoteEditor,
				addEntry,
				modifyEntry,
				deleteEntry,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}
