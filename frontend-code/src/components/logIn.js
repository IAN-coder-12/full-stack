import React, { useState } from 'react';
import { MensajeExito } from '../elements/signup';
import { Main, Form, ContenedorBotonCentrado,Boton, Title} from '../elements/login';
import ComponentInput from './input'
import { useHistory } from 'react-router'
import axios from 'axios';

const LogIn = () => {
  
    const [username, setUsername]= useState({campo:'', valido:null});
    const [password, setPassword]= useState({campo:'', valido:null});
    const [formValido, setFormValido] = useState(null)

    const expresiones = {
            usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
            nombre: /^[a-zA-Z\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            password: /^.{4,12}$/, // 4 a 12 digitos.
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
		/* telefono: /^\d{7,14}$/ // 7 a 14 numeros. */
	}
    const history = useHistory();
    const onsubmit = async (e) => {
        e.preventDefault(); 
        console.log(username.campo, password.campo)   
        if(
            username.valido === 'true' &&
			password.valido === 'true'        
        ){
            try{
                axios.post('http://localhost:4000/api/login', {
                    username: username.campo,
                    password: password.campo
                },
                )
                .then((res) =>{
                    setUsername({campo: '', valido: ''});
                    setPassword({campo: '', valido: null});
                    setFormValido(true);
                    console.log(res.data + 'lol')
                    history.push('/')
                })
            }catch(e){
                    console.log(e, 'mamaste')
                    console.log('mamaste')  
                    history.push('/signup')  
            
            }     
        }else{
            setFormValido(false)
        } 
       
    } 

    const getUser = () => {
        axios.get('http://localhost:4000/api/user')
        .then(res => console.log(res.data))
    }

    return(
        <div>
             <Main>
                 <Title>Iniciar Sesión</Title>
                <Form onSubmit = {onsubmit} >
                    <ComponentInput
                            state={username}
                            setState={setUsername}
                            type="text"
                            name="username"
                            label="Username"
                            placeholder="Username"
                            leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
                            expresionRegular = {expresiones.usuario}

                    />
                    <ComponentInput
                            state={password}
                            setState={setPassword}
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Password"
                            leyendaError="El usuario o la contraseña son incorrectos"
                            expresionRegular = {expresiones.usuario}

                    />

                <ContenedorBotonCentrado>
                    <Boton  type="submit">Enviar</Boton>
                    <Boton onClick={getUser} type="submit">Get User</Boton>
                    { formValido === true && <MensajeExito>Formulario enviado correctamente.</MensajeExito>}
                </ContenedorBotonCentrado>
                </Form>
            </Main>
        </div>
    )
};

export default LogIn;
/* 
{
                    method:'post',
                    data:{
                        username: username.campo,
                        password: password.campo 
                    },
                    withCredentials: true,
                    url:'http://localhost:4000/api/login'
                }
*/