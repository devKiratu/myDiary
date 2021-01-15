// import React, { useReducer } from "react";

export default function AppReducer(state, action) {
	switch (action.type) {
		case "SET_CURRENTLY_DISPLAYED":
			return {
				...state,
				currentlyDisplayed: `${action.payload}`,
			};
		default:
			return state;
	}
}
