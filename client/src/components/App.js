import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import LandingPage from "./LandingPage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Profile from "./Profile";
import GlobalProvider from "../context/GlobalState";
import PrivateRoute from "./PrivateRoute";

export default function App() {
	return (
		<GlobalProvider>
			<Router>
				<GlobalStyles />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/contact" component={Contact} />
					<PrivateRoute path="/profile">
						<Profile />
					</PrivateRoute>
				</Switch>
			</Router>
		</GlobalProvider>
	);
}
