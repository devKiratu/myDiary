import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
	token: localStorage.getItem("token"),
	isAuth: false,
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

	//helper for header configuration
	const headersConfig = {
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	};
	if (state.token) headersConfig.headers["x-auth-token"] = state.token;

	//Actions

	async function loginUser(credentials) {
		const res = await fetch("/api/v1/auth", {
			method: "POST",
			headers: headersConfig.headers,
			body: JSON.stringify(credentials),
		});
		const data = await res.json();
		console.log(data.user);
		dispatch({
			type: "LOGIN_SUCCESS",
			payload: {
				token: data.user.token,
			},
		});
	}

	async function logoutUser() {
		dispatch({
			type: "LOGOUT_SUCCESS",
		});
	}

	async function getEntries() {
		const res = await fetch("/api/v1/entries", {
			method: "GET",
			headers: headersConfig.headers,
		});
		const data = await res.json();
		// console.log(data);

		dispatch({ type: "GET_ENTRIES", payload: data.data });
	}

	async function addEntry(noteEntry) {
		try {
			const res = await fetch("/api/v1/entries", {
				method: "POST",
				headers: headersConfig.headers,
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
				headers: headersConfig.headers,
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
					headers: headersConfig.headers,
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
				isAuth: state.isAuth,
				getEntries,
				displayNote,
				toggleNoteEditor,
				addEntry,
				modifyEntry,
				deleteEntry,
				loginUser,
				logoutUser,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}
