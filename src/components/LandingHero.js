import React from "react";
import { Container, Hero, Message } from "../styles/LandingPageStyles";
import { Header, SignInButton, SignUpButton } from "../styles/Navbars";
import LandingNav from "./LandingNav";

function LandingHero() {
	return (
		<Hero>
			<LandingNav />
			<Container>
				<div>
					<Header>Karibu hapa</Header>
					<Message>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi
						tempor, interdum lorem sit amet, vestibulum enim. Curabitur iaculis,
						est sed porta malesuada, arcu leo accumsan orci, eget viverra dui
						dolor nec lectus.
					</Message>
				</div>
				<div>
					<Header>Get Started</Header>
					<SignInButton>Sign In Here</SignInButton> |
					<SignUpButton>Sign Up Here</SignUpButton>
				</div>
			</Container>
		</Hero>
	);
}

export default LandingHero;
