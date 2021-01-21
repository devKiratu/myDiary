import React from "react";
import { NavButton, NotesNav } from "../styles/Navbars";

export default function NotesboardNavbar() {
	return (
		<NotesNav>
			<NavButton>Edit</NavButton>
			<NavButton>Delete</NavButton>
		</NotesNav>
	);
}
