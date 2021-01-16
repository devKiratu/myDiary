import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { CardContent, CardPara } from "../styles/ProfileStyles";

function HistoryCard({ content, created, id, title }) {
	const { displayNote } = useContext(GlobalContext);

	// console.log(maxLength);

	const maxLength = 150;
	const noteSnippet =
		content.length > maxLength ? `${content.substr(0, maxLength)}...` : content;

	return (
		<CardContent onClick={() => displayNote(id)}>
			<h5>
				{title} &nbsp; &nbsp;
				<span>Created: {new Date(created).toDateString()}</span>
			</h5>
			<CardPara>{noteSnippet}</CardPara>
		</CardContent>
	);
}

export default HistoryCard;
