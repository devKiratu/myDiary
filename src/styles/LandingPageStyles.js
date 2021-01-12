import styled from "styled-components";

export const Hero = styled.div`
	height: 85vh;
	padding: 20px;
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
