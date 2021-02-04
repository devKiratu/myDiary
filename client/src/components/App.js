import React, { useContext, useEffect } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import LandingPage from "./LandingPage";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Contact from "./Contact";
import Profile from "./Profile";
import { GlobalContext } from "../context/GlobalState";
import PrivateRoute from "./PrivateRoute";
import LoadingSpinner from "./LoadingSpinner";
import SignupSuccess from "./SignupSuccess";

function App() {
	const { checkIsAuth, isLoading } = useContext(GlobalContext);

	useEffect(() => {
		checkIsAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		// <GlobalProvider>
		<Router>
			<GlobalStyles />
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/contact" component={Contact} />
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/success" component={SignupSuccess} />
				<Route path="/verify-register">
					{!isLoading ? <Redirect to="/success" /> : <LoadingSpinner />}
				</Route>
				<Route path="/loading">
					{!isLoading ? <Redirect to="/profile" /> : <LoadingSpinner />}
				</Route>
				<PrivateRoute path="/profile">
					<Profile />
				</PrivateRoute>
			</Switch>
		</Router>
		// </GlobalProvider>
	);
}

export default App;
