import styled from "styled-components";

export const ProfilePage = styled.div`
	height: 100vh;
	/* overflow-y: auto; */
`;

export const NotesContainer = styled.div`
	height: 88%;
	overflow-y: auto;
	display: grid;
	grid-template-columns: 1fr 2fr;
`;

export const DisplayContainer = styled.div`
	/* background-color: #f7f7f7; */
	overflow-y: auto;
`;

export const HistoryContainer = styled.div`
	/* background-color: #f7f7f7; */
	overflow-y: auto;
`;

export const StyledProfileNav = styled.nav`
	min-height: 10%;
	background-color: #000;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	/* padding-top: 10px; */
	position: sticky;
	top: 0;

	/* @media (max-width: 400px) {
	} */
	@media (max-width: 400px) {
		display: inline-block;
		width: 100vw;
		position: unset;
	}
`;

export const CardContent = styled.div`
	margin: 10px;
	height: 100px;
	overflow: hidden;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
	cursor: pointer;
	text-align: left;
	padding: 10px;
`;

export const CardPara = styled.p`
	padding: 5px 5px 10px;
`;
