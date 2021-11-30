import React, { useState } from 'react';
import {Main, Form, Label, ContenedorBotonCentrado,Boton,ContenedorTerminos,MensajeError,MensajeExito} from '../elements/signup';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ComponentInput from './input'
import { useHistory } from 'react-router'
import axios from 'axios';

const SignUp = () => {
    
    const [fullname, setFullname]= useState({campo:'', valido:null});
    const [username, setUsername]= useState({campo:'', valido:null});
    const [email, setEmail]= useState({campo:'', valido:null});
    const [password, setPassword]= useState({campo:'', valido:null});
    const [password2, setPassword2]= useState({campo:'', valido:null});
    const [terminos, setTerminos] = useState(false);
    const [formValido, setFormValido] = useState(null)

    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-Z\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
		/* telefono: /^\d{7,14}$/ // 7 a 14 numeros. */
	}

    const history = useHistory()
    const onsubmit = async (e) => {
        e.preventDefault();    

        if(
			fullname.valido === 'true' &&
            username.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			email.valido === 'true' &&
			terminos
            
        ){
            try{
                axios.post('http://localhost:4000/api',{
                    fullname: fullname.campo,
                    username: username.campo,
                    correo: email.campo,
                    password: password.campo 
                
                }).then(() =>{
                    setFullname({campo: '', valido: null});
                    setUsername({campo: '', valido: ''});
                    setPassword({campo: '', valido: null});
                    setPassword2({campo: '', valido: 'null'});
                    setEmail({campo: '', valido: null});
                    setFormValido(true);
                    history.push('/')
                })
            }catch(e){
                console.log(e)
                console.log('mamaste')
                history.push('/login')
            }
            
        }else{
            setFormValido(false)
        }       
    } 
    
    
	const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				setPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				setPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
        
			}
		}   
	}
    const onChangeTerminos = (e) =>{
        setTerminos(e.target.checked)
    }


    return(
        <div>
            
            <Main>
                <Form onSubmit = {onsubmit} >
            <ComponentInput
                    state={fullname}
                    setState={setFullname}
                    type="text"
                    name="nombre"
                    label="Nombre"
                    placeholder="Nombre"
                    leyendaError="El nombre solo puede contener letras y espacios."
                    expresionRegular = {expresiones.nombre}

            />
            <ComponentInput
                    state={username}
                    setState={setUsername}
                    type="text"
                    name="username"
                    label="Usuario"
                    placeholder="Usuario"
                    leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
                    expresionRegular={expresiones.usuario}
                   
            />
            <ComponentInput
                    state={email}
                    setState={setEmail}
                    type="email"
                    name="email"
                    label="Correo Electronico"
                    placeholder="Correo Electronico"
                    leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                    expresionRegular = {expresiones.correo}
                   
            />
            <ComponentInput
                    state={password}
                    setState={setPassword}
                    type="password"
                    name="password"
                    label="Contraseña"
                    placeholder="Contraseña"
                    leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                    expresionRegular = {expresiones.password}
                   
            />
            <ComponentInput
                    state={password2}
                    setState={setPassword2}
                    type="password"
                    name="password2"
                    label="Confirmar Contraseña"
                    placeholder="Confirmar Contraseña"
                    leyendaError="Ambas contraseñas deben ser iguales."
                    funcion = {validarPassword2}
            />
           
           
                     
            <ContenedorTerminos>
                <Label>
                    <input type="checkbox" name="terminos" id="terminos" checked={terminos} onChange={onChangeTerminos}/>
                    Acepto los terminos y condiciones
                </Label>
            </ContenedorTerminos>

            {formValido === false && 
            <MensajeError>
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                    <b>Error: </b> Por favor rellena todos los campos.
                </p>
            </MensajeError>
            
           }

            <ContenedorBotonCentrado>
                <Boton type="submit">Enviar</Boton>
               { formValido === true && <MensajeExito>Formulario enviado correctamente.</MensajeExito>}
            </ContenedorBotonCentrado>


                
                </Form> 
                                
            </Main>    
        </div>
            
        )
    
}

export default SignUp;