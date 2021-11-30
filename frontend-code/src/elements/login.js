import styled from 'styled-components'

const Main = styled.main`
    max-width: 800px;
	width: 35%;
	margin: auto;
	padding: 20px;

`;

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
	/* padding: 50px; */
	min-width:300px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;


    @media (max-width: 800px){
        grid-template-columns: 1fr;
		
    }
`;
const Title = styled.p`
    font-size: 32px;
    display: flex;
    justify-content: center;
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 1;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	height: 45px;
    margin-top: 20px;
	line-height: 45px;
	width: 100%;
	background: #05ad23;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	outline: none;
	&:focus{
		outline: none;
		
	}
	&:hover {
		/* background: #04931d; */	
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	
	}
`;

export {
    Main,
    Title,
    Form, 
    ContenedorBotonCentrado,
    Boton
}