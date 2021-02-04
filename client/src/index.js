import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalProvider from "../src/context/GlobalState";

ReactDOM.render(
	<GlobalProvider>
		<App />
	</GlobalProvider>,
	document.getElementById("root")
);
