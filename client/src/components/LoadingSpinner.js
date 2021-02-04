import React from "react";
import spinner from "../loading-spinner.svg";
import { P, Spinner, Title } from "../styles/HelperStyles";

function LoadingSpinner() {
	return (
		<div>
			<Title>myDiary</Title>
			<Spinner>
				<div>
					<P>Please wait ...</P>
					<img src={spinner} alt="spinner" />
				</div>
			</Spinner>
		</div>
	);
}

export default LoadingSpinner;
