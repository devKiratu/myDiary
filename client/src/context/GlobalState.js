import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
	entries: [],
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

	//Actions

	async function getEntries() {
		const res = await fetch("/api/v1/entries", {
			method: "GET",
			headers: {
				"x-auth-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMTU4NDRmMDE1NmNhNGVlNDkwNjBlZSIsImlhdCI6MTYxMjE2MzQ1N30.l48cGcEGvMgceFgb1e6CTOCXqe-WMOvTZKuptQzJ-rQ",
			},
		});
		const data = await res.json();
		console.log(data);

		dispatch({ type: "GET_ENTRIES", payload: data.data });
	}

	async function addEntry(noteEntry) {
		try {
			const res = await fetch("/api/v1/entries", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
				body: JSON.stringify(noteEntry),
			});
			const data = await res.json();
			dispatch({
				type: "ADD_ENTRY",
				payload: data.data,
			});
		} catch (err) {
			console.log("the error is ", err);
		}
	}

	async function modifyEntry(modifiedEntry, id) {
		try {
			const res = await fetch(`/api/v1/entries/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
				},
				body: JSON.stringify(modifiedEntry),
			});
			const data = await res.json();
			// console.log(data.data);

			const updatedEntries = state.entries.map((entry) => {
				if (entry._id === id) {
					entry.title = data.data.title ? data.data.title : entry.title;
					entry.content = data.data.content ? data.data.content : entry.content;
					return entry;
				} else {
					return entry;
				}
			});

			dispatch({
				type: "MODIFY_ENTRY",
				payload: updatedEntries,
			});
		} catch (err) {
			console.log(err);
		}
	}

	async function deleteEntry(id) {
		try {
			if (id !== 0) {
				// const res =
				await fetch(`/api/v1/entries/${id}`, {
					method: "DELETE",
				});
				// const data = await res.text();
				// console.log(data);
				dispatch({
					type: "DELETE_ENTRY",
					payload: id,
				});
			}
		} catch (err) {
			console.log(err);
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
					_id: 0,
				},
			});
		} else {
			const [selectedEntry] = state.entries.filter((entry) => entry._id === id);
			// console.log("2nd option current entries are", state.entries);
			dispatch({
				type: "SET_CURRENTLY_DISPLAYED",
				payload: {
					text: selectedEntry.content,
					title: selectedEntry.title,
					_id: selectedEntry._id,
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
				getEntries,
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
