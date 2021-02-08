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
import SignupSuccess from "./SignupSuccess";

function App() {
	const { checkIsAuth, isAuth, isRegistered } = useContext(GlobalContext);

	useEffect(() => {
		checkIsAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/contact" component={Contact} />
				<Route path="/signin">
					{isAuth ? <Redirect to="/profile" /> : <SignIn />}
				</Route>
				<Route path="/signup">
					{isRegistered ? <Redirect to="/success" /> : <SignUp />}
				</Route>
				<Route path="/success" component={SignupSuccess} />
				<PrivateRoute path="/profile">
					<Profile />
				</PrivateRoute>
			</Switch>
		</Router>
	);
}

export default App;
