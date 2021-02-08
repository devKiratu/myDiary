import React from "react";
import { Container, Hero, Message } from "../styles/LandingPageStyles";
import {
	Header,
	SignInButton,
	SignUpButton,
	StyledLink,
} from "../styles/Navbars";
import LandingNav from "./LandingNav";

function LandingHero() {
	return (
		<Hero>
			<LandingNav />
			<Container>
				<div>
					<Header>We're glad you're here!</Header>
					<Message>
						myDiary is an online journal where you can safely express your
						thoughts and feelings. Have your notes with you always!
					</Message>
				</div>
				<div>
					<Header>Get Started</Header>
					<StyledLink to="/signin">
						<SignInButton>Sign In Here</SignInButton>|
					</StyledLink>
					<StyledLink to="/signup">
						<SignUpButton>Sign Up Here</SignUpButton>
					</StyledLink>
				</div>
			</Container>
		</Hero>
	);
}

export default LandingHero;
