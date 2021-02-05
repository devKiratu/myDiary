import styled from "styled-components";

export const Spinner = styled.div`
	height: 75vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const P = styled.p`
	margin: 20px;
`;

export const Title = styled.h1`
	font-family: "Hachi Maru Pop", cursive;
	padding: 20px;
	margin: 0 40px;
	text-align: left;
`;

export const Wrapper = styled.div`
	width: 400px;
	margin: 50px auto;
	height: 500px;
	@media (max-width: 500px) {
		width: 300px;
	}
`;
