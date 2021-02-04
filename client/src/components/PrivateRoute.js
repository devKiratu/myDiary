import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
	const setToken = localStorage.getItem("token");
	return (
		<Route
			{...rest}
			render={({ location }) =>
				setToken !== null ? (
					children
				) : (
					<Redirect to={{ pathname: "/signin", state: { location } }} />
				)
			}
		/>
	);
}

export default PrivateRoute;
