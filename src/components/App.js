import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import LandingPage from "./LandingPage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Features from "./Features";
import Contact from "./Contact";
import Profile from "./Profile";
import GlobalProvider from "../context/GlobalState";

export default function App() {
	return (
		<GlobalProvider>
			<Router>
				<GlobalStyles />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/features" component={Profile} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
		</GlobalProvider>
	);
}
