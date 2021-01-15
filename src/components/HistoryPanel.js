import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { HistoryContainer } from "../styles/ProfileStyles";
import HistoryCard from "./HistoryCard";

function HistoryPanel() {
	const { entries, currentlyDisplayed } = useContext(GlobalContext);

	console.log("the current note is", currentlyDisplayed);

	return (
		<HistoryContainer>
			History cards appear here
			{entries.map((entry) => (
				<HistoryCard
					key={entry.id}
					content={entry.content}
					created={entry.created}
					id={entry.id}
				/>
			))}
		</HistoryContainer>
	);
}

export default HistoryPanel;
