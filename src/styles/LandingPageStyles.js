import styled from "styled-components";
import img4 from "./img/plain-notebk-flowerv2.jpg";

export const Hero = styled.div`
	height: 100vh;
	padding: 20px;
	background: url(${img4}) center center no-repeat fixed;
	background-size: cover;
	background-color: rgb(230, 230, 230);
`;

export const Container = styled.div`
	width: 75%;
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

	@media (max-width: 700px) {
		margin: 0 5px;
	}
`;
