import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, {css} from 'styled-components'

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Main = styled.main`
    max-width: 800px;
	width: 90%;
	margin: auto;
	padding: 40px;
`;
const Form = styled.form`
    display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	min-width:300px;
    
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GroupInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px ;
    transition: .3s ease all;
    border: 3px solid black;

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
	${props => props.valido === 'true' && css`
		border:	3px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border:	3px solid ${colores.error} !important;
	`}
	/* ${props => props.id && css`
		grid-area: correo;
	`} */
	

`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
	display: none;
	
	${props => props.valido === 'true' && css`
		display: none;
	`}
	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}
	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`; 

const ContenedorTerminos = styled.div`
	grid-column: span 2;
	input {
		margin-right: 10px;
	}
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const Boton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
    
`;

const MensajeError = styled.div`
/* ${setTimeout(() => MensajeError,3000)} */
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

export {
    Main,
    Form, 
    Label,
    GroupInput,
    Input,
    LeyendaError,
    IconoValidacion,
    ContenedorBotonCentrado,
    Boton,
    ContenedorTerminos,
    MensajeError,
    MensajeExito,
}; 