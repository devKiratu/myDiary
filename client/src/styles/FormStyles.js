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
	min-height: 550px;
	border-radius: 10px;
	box-sizing: border-box;
	padding: 30px;

	@media (max-width: 500px) {
		width: 300px;
		/* height: 500px; */
	}
`;

export const Label = styled.label`
	padding: 15px 20px;
	display: block;
	width: 90%;
	text-align: left;
	margin: 0 auto;
`;

export const Input = styled.input`
	padding: 15px 20px;
	width: 80%;
	border-radius: 5px;
	border: 1px solid #999;
	outline: none;
	&:focus {
		border: 2px solid cornflowerblue;
	}
`;

export const Button = styled.button`
	padding: 15px 20px;
	width: 80%;
	border: 1px solid #999;
	border-radius: 10px;
	margin: 30px 0;
	outline: none;
`;

export const NotesForm = styled.form`
	margin: 0 auto;
	border: 1px solid #dcdcdc;
	box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);
	min-height: 95%;
	border-radius: 10px;
	box-sizing: border-box;
`;

export const NotesLabel = styled.label`
	display: inline-block;
	padding: 20px 10px;
	/* width: 10%; */
	text-align: left;
	/* border: 1px solid #dcdcdc; */
	border-radius: 5px;
`;

export const NotesInput = styled.input`
	display: inline-block;
	outline: none;
	margin: 10px;
	padding: 20px;
	width: 85%;
	border-radius: 5px;
	border: 1px solid #dcdcdc;
	/* background-color: rgb(223, 223, 223); */
	&:focus {
		border: 2px solid cornflowerblue;
	}
`;

export const TextArea = styled.textarea`
	outline: none;
	padding: 10px;
	width: 95%;
	height: 70vh;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	border: 1px solid #dcdcdc;
	border-radius: 5px;
	/* background-color: rgb(223, 223, 223); */
	&:focus {
		border: 2px solid cornflowerblue;
	}
`;

export const Alert = styled.p`
	padding: 10px 10px;
	width: 80%;
	border: 1px solid #999;
	border-radius: 10px;
	margin: 0 auto;
	background-color: salmon;
	text-align: left;
`;
