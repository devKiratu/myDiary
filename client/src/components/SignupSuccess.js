import React from "react";
import { Button } from "../styles/FormStyles";
import { P, Title } from "../styles/HelperStyles";
import { Wrapper } from "../styles/HelperStyles";
import { StyledLink } from "../styles/Navbars";

function SignupSuccess() {
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
