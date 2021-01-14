import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
	background-color: transparent;
	color: #000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding-top: 10px;
	position: sticky;
	top: 0;

	@media (max-width: 700px) {
		display: inline;
	}
`;

export const Header = styled.h1`
	padding: 20px;
	margin: 0 40px;
`;

export const SignInButton = styled.button`
	border: none;
	padding: 10px;
	border-radius: 5px;
	border: 2px solid #fff;
	color: #fff;
	background-color: black;
	outline: none;
	font-weight: bold;
	cursor: pointer;
	margin: 10px;
`;

export const SignUpButton = styled.button`
	border: none;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	background-color: #fff;
	font-weight: bold;
	outline: none;
	border: 2px solid #000;
	cursor: pointer;
`;

export const Logo = styled.h1`
	font-family: "Hachi Maru Pop", cursive;
	/* font-family: "Homemade Apple", cursive; */
	/* font-family: "Crafty Girls", cursive; */
	padding: 20px;
	margin: 0 40px;

	@media (max-width: 700px) {
		padding: 0;
		margin: 0;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
`;
