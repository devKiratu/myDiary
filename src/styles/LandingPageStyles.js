import styled from "styled-components";
import img4 from "./img/plain-notebk-flower.jpg";

export const Hero = styled.div`
	height: 85vh;
	padding: 20px;
	background: url(${img4}) center center no-repeat fixed;
	/* background-position: -3000px -2300px; */
	background-size: cover;

	/* @media (max-width: 1500px) {
		background-size: center/cover;
		background-position: 0 0px;
	} */
`;

export const Container = styled.div`
	width: 80%;
	margin: 12% auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 875px) {
		grid-template-columns: 1fr;
	}
`;

export const Message = styled.p`
	display: inline-block;
	text-align: left;
	padding: 10px;
	margin: 0 20px;

	/* @media (max-width: 705px) {
		display: block;
	} */
`;
