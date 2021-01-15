import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { CardContent, CardPara } from "../styles/ProfileStyles";

function HistoryCard({ content, created, id }) {
	const { displayNote } = useContext(GlobalContext);
	const [noteSnippet, setNoteSnippet] = useState(content);
	const [maxLength, setMaxLength] = useState(215);

	console.log(maxLength);

	useEffect(() => {
		window.addEventListener(
			"resize",
			setMaxLength(Math.floor(window.innerWidth / 8))
		);
	}, [setMaxLength]);

	useEffect(() => {
		setNoteSnippet(
			content.length > maxLength
				? `${content.substr(0, maxLength)}...`
				: content
		);
	}, [content, maxLength]);

	return (
		<CardContent onClick={() => displayNote(id)}>
			<h5>
				Note title &nbsp; &nbsp;
				<span>Created: {new Date(created).toDateString()}</span>
			</h5>
			<CardPara>{noteSnippet}</CardPara>
		</CardContent>
	);
}

export default HistoryCard;
