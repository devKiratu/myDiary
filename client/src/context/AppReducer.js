// import React, { useReducer } from "react";

export default function AppReducer(state, action) {
	switch (action.type) {
		case "USER_ACTIVE":
			return {
				...state,
				isAuth: true,
			};
		case "LOGIN_SUCCESS":
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isAuth: true,
				token: action.payload.token,
				user: action.payload.user,
			};
		case "LOGOUT_SUCCESS":
		case "AUTH_ERROR":
			localStorage.removeItem("token");
			return {
				...state,
				entries: [],
				token: null,
				isAuth: false,
				user: "",
			};
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
				entries: state.entries.filter((entry) => entry._id !== action.payload),
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
