import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { NavButton, NotesNav } from "../styles/Navbars";
import { HistoryContainer } from "../styles/ProfileStyles";
import HistoryCard from "./HistoryCard";

function HistoryPanel() {
	const { entries, toggleNoteEditor, displayNote, getEntries } = useContext(
		GlobalContext
	);
	useEffect(() => {
		getEntries();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleNewNote() {
		displayNote(0);
		toggleNoteEditor();
	}

	return (
		<HistoryContainer>
			<NotesNav>
				<NavButton onClick={handleNewNote}>New Note</NavButton>
			</NotesNav>
			{entries.map((entry) => (
				<HistoryCard
					key={entry._id}
					content={entry.content}
					created={entry.created}
					id={entry._id}
					title={entry.title}
				/>
			))}
		</HistoryContainer>
	);
}

export default HistoryPanel;
