import React from "react";
import { Message } from "../styles/LandingPageStyles";
import { CardContent, CardPara } from "../styles/ProfileStyles";

function HistoryCard() {
	return (
		<CardContent>
			<h5>Note title</h5>
			<CardPara>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at
				risus erat. Vestibulum facilisis nunc lectus. Mauris faucibus arcu quis
				finibus hendrerit. Ut venenatis ac ligula at porta. Etiam tempor, sapien
				non vestibulum vestibulum, ipsum orci mollis est, sit amet facilisis
				augue metus scelerisque dui. Pellentesque pharetra massa a ante pulvinar
				pellentesque. Cras sed ex accumsan, consequat risus et, aliquet felis.
				Nunc nibh tellus, posuere non dui at, efficitur vehicula sapien. Morbi
				scelerisque bibendum consequat. Ut consectetur turpis ac dapibus mattis.
				Suspendisse lacinia libero ut velit lobortis tincidunt. Maecenas
				imperdiet imperdiet porttitor.
			</CardPara>
		</CardContent>
	);
}

export default HistoryCard;
