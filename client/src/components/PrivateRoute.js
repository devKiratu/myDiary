import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

function PrivateRoute({ children, ...rest }) {
	const { isAuth } = useContext(GlobalContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuth ? (
					children
				) : (
					<Redirect to={{ pathname: "/signin", state: { location } }} />
				)
			}
		/>
	);
}

export default PrivateRoute;
