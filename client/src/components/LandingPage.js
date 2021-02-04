import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import LandingHero from "./LandingHero";

function LandingPage() {
	const { checkIsAuth } = useContext(GlobalContext);

	useEffect(() => {
		checkIsAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<LandingHero />
		</div>
	);
}

export default LandingPage;
