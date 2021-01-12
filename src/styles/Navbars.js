import styled from "styled-components";

export const StyledNav = styled.nav`
	background-color: black;
	color: #fff;
	min-height: 15vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
`;

export const SignUpButton = styled.button`
	border: none;
	padding: 10px;
	margin: 0 40px;
	border-radius: 5px;
	background-color: #fff;
	font-weight: bold;
	outline: none;
	border: 2px solid #000;
	cursor: pointer;
`;
