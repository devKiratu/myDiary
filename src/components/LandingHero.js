import React from "react";
import { Hero } from "../styles/LandingPageStyles";
import { SignInButton, SignUpButton } from "../styles/Navbars";

function LandingHero() {
	return (
		<Hero>
			<div>
				<h1>Karibu hapa</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id mi
					tempor, interdum lorem sit amet, vestibulum enim. Curabitur iaculis,
					est sed porta malesuada, arcu leo accumsan orci, eget viverra dui
					dolor nec lectus.
				</p>
			</div>
			<div>
				<h1>Get Started</h1>
				<p>Already have an account:</p>
				<SignInButton>Sign In Here</SignInButton>
				<p>OR</p>
				<p>New here to myDiary? </p>
				<SignUpButton>Sign Up Here</SignUpButton>
			</div>
		</Hero>
	);
}

export default LandingHero;
