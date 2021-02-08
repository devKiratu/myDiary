import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button } from "../styles/FormStyles";
import { P, Title } from "../styles/HelperStyles";
import { Wrapper } from "../styles/HelperStyles";
import { StyledLink } from "../styles/Navbars";

function SignupSuccess() {
	const { resetIsRegistered } = useContext(GlobalContext);
	useEffect(() => {
		resetIsRegistered();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<StyledLink to="/">
				<Title>myDiary</Title>
			</StyledLink>

			<Wrapper>
				<P>Registration successful. Sign in to use myDiary</P>
				<StyledLink to="/signin">
					<Button>Sign in</Button>
				</StyledLink>
			</Wrapper>
		</>
	);
}

export default SignupSuccess;
