import styled from "styled-components";

export const FormContainer = styled.div`
	background-color: rgb(230, 230, 230);
	/* box-sizing: border-box; */
	height: 100vh;
	overflow-y: auto;
`;

export const Form = styled.form`
	width: 400px;
	margin: 30px auto;
	border: 1px solid #999;
	box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);
	height: 550px;
	border-radius: 10px;
	box-sizing: border-box;
	padding: 30px;
`;

export const Label = styled.label`
	padding: 20px;
	display: block;
	width: 90%;
	text-align: left;
	margin: 0 auto;
`;

export const Input = styled.input`
	padding: 20px;
	width: 80%;
	border-radius: 5px;
	border: 1px solid #999;
`;

export const Button = styled.button`
	padding: 20px;
	width: 80%;
	border: 1px solid #999;
	border-radius: 10px;
	margin: 40px 0;
`;
