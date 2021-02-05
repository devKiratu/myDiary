// import React, { useReducer } from "react";

export default function AppReducer(state, action) {
	switch (action.type) {
		case "REGISTER_SUCCESS":
			return {
				...state,
				isLoading: false,
				// isRegistered: true,
			};
		case "LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "USER_LOADED":
			return {
				...state,
				user: action.payload,
			};
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
				token: localStorage.getItem("token"),
				user: action.payload.user,
				isLoading: false,
				// isRegistered: false,
			};
		case "LOGOUT_SUCCESS":
		case "AUTH_ERROR":
		case "AUTH_FAIL":
			localStorage.removeItem("token");
			return {
				...state,
				entries: [],
				token: null,
				isAuth: false,
				user: "",
				// isRegistered: false,
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
		case "RESET_CURRENTLY_DISPLAYED":
			return {
				...state,
				currentlyDisplayed: action.payload,
			};
		default:
			return state;
	}
}
