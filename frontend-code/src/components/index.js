import React,{ useContext } from 'react'
import { myContext } from '../context';
/* import style from './public/styles/index.module.css' */





const Index = () => {
    const ctx = useContext(myContext);
    console.log(ctx)
    
    return (
        <div className="contenedor">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <h3>Welcome</h3>

                    </div>
                </div>
            </div>
            </nav>
                <div className="contenedor__fondo">
                    <img className="fondo__img" /* src={img.fondo} */ alt=""/>
                </div>
                <div className="contenedor__header">
                    <img className="header__img" /* src={img.logo} */ alt=""/>
                    <div className="input"> 
                        <div className="log-in">
                            <a href="https://www.facebook.com/Meganet-108948530805637">Empieza ya</a>
                        </div>
                        <div className="sign-up">
                            <a href="https://www.facebook.com/Meganet-108948530805637">Iniciar Sesión</a>
                        </div>
                    </div>
                </div>
                <div className="contenedor__titular">
                    <p>Expertos en reparación de Computadoras y Laptops</p>
                </div>

                <div className="contenedor__button-1">
                    <a href="https://www.facebook.com/Meganet-108948530805637"><i className="fab fa-facebook"></i>Contactanos</a>
                </div>
                <div className="contenedor__tarjet">
                    <div className="div tarjet__1">
                        <a href="https://www.facebook.com/Meganet-108948530805637" className= "a"><i className=" i fas fa-cog"></i>Mantenimiento y Reparación</a>
                    </div>
                    <div className="div tarjet__2">
                        <a href="https://www.facebook.com/Meganet-108948530805637" className= "a"><i className="i fas fa-print"></i>Venta de equipo y consumibles</a>
                    </div>
                    <div className="div tarjet__3">
                        <a href="https://www.facebook.com/Meganet-108948530805637" className= "a"><i className="i fas fa-shield-alt"></i>Venta de Programas y Antivirus</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Index;