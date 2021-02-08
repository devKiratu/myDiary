import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
	token: localStorage.getItem("token"),
	isAuth: false,
	isLoading: false,
	// error: null,
	isRegistered: false,
	user: "",
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
	const [loginErr, setLoginErr] = useState(null);
	const [registerErr, setRegisterErr] = useState(null);

	//helper for header configuration
	const headersConfig = {
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	};
	if (state.token) headersConfig.headers["x-auth-token"] = state.token;

	//Helpers

	function resetIsRegistered() {
		dispatch({ type: "RESET_REGISTER" });
	}

	function loading() {
		dispatch({ type: "LOADING" });
	}

	function checkIsAuth() {
		const setToken = localStorage.getItem("token");
		// console.log("the value of set token is", setToken);
		if (setToken !== null) {
			dispatch({ type: "USER_ACTIVE" });
			loadUser();
		} else {
			dispatch({ type: "LOGOUT_SUCCESS" });
		}
	}

	//Actions
	async function loadUser() {
		try {
			const res = await fetch("/api/v1/auth/user", {
				method: "GET",
				headers: headersConfig.headers,
			});
			const user = await res.json();
			// console.log( "the active user is", user.username );
			dispatch({
				type: "USER_LOADED",
				payload: user.username,
			});
		} catch (err) {
			dispatch({ type: "AUTH_FAIL" });
		}
	}

	async function signUp(credentials) {
		try {
			const res = await fetch("/api/v1/signup", {
				method: "POST",
				headers: headersConfig.headers,
				body: JSON.stringify(credentials),
			});
			const data = await res.json();

			if (data.msg) {
				setRegisterErr(data.msg);
			} else {
				dispatch({ type: "REGISTER_SUCCESS", payload: data });
				setRegisterErr(null);
			}
			// console.log(data);
		} catch (err) {
			dispatch({ type: "AUTH_ERROR" });
		}
	}

	async function loginUser(credentials) {
		try {
			const res = await fetch("/api/v1/auth", {
				method: "POST",
				headers: headersConfig.headers,
				body: JSON.stringify(credentials),
			});
			const data = await res.json();
			// console.log( "the data is ", data.msg );
			if (data.msg) {
				setLoginErr(data.msg);
			}
			dispatch({
				type: "LOGIN_SUCCESS",
				payload: {
					token: data.user.token,
					user: data.user.username,
				},
			});
			setLoginErr(null);
		} catch (err) {
			dispatch({ type: "AUTH_ERROR" });
		}
	}
	function resetDisplay() {
		dispatch({
			type: "RESET_CURRENTLY_DISPLAYED",
			payload: {
				text: `Click a note to display`,
				title: "",
				id: 0,
				created: 0,
			},
		});
	}

	function logoutUser() {
		resetDisplay();
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
			// console.log("the data is", data);
			// console.log("new entry data is ", data.data.entries);
			const notes = data.data.entries;
			const newEntry = notes[notes.length - 1];
			// console.log("new entry is ", newEntry);
			dispatch({
				type: "ADD_ENTRY",
				payload: newEntry,
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
			// console.log("received data is ", data.saved.entries);
			const [modified] = data.saved.entries.filter((item) => item._id === id);
			// console.log("the modified entry is", modified);
			// console.log("the title is", modified.title);

			const updatedEntries = state.entries.map((entry) => {
				if (entry._id === id) {
					entry.title = modified.title ? modified.title : entry.title;
					entry.content = modified.content ? modified.content : entry.content;
					return entry;
				} else {
					return entry;
				}
			});
			// console.log("updated entries are ", updatedEntries);

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
				user: state.user,
				isLoading: state.isLoading,
				isRegistered: state.isRegistered,
				getEntries,
				displayNote,
				toggleNoteEditor,
				addEntry,
				modifyEntry,
				deleteEntry,
				loginUser,
				logoutUser,
				signUp,
				loadUser,
				checkIsAuth,
				loading,
				registerErr,
				loginErr,
				resetIsRegistered,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
}
