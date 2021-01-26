// import React, { useReducer } from "react";

export default function AppReducer(state, action) {
	switch (action.type) {
		case "GET_ENTRIES":
			return {
				...state,
				entries: action.payload,
			};
		case "ADD_ENTRY":
			return {
				...state,
				entries: [...state.entries, action.payload],
			};
		case "MODIFY_ENTRY":
			return {
				...state,
				entries: action.payload,
			};
		case "DELETE_ENTRY":
			return {
				...state,
				entries: state.entries.filter((entry) => entry.id !== action.payload),
			};
		case "TOGGLE_NOTE_EDITOR":
			return {
				...state,
				noteEditor: action.payload,
			};
		case "SET_CURRENTLY_DISPLAYED":
			return {
				...state,
				currentlyDisplayed: action.payload,
			};
		default:
			return state;
	}
}
