import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import Swal from 'sweetalert';
import * as productsService from './productsService';

const ProductsAdd = () =>{
    const initialState = {
        id: "",
        clave: "",
        nombre: "",
        descripcion: ""
      };

    const[product, setProduct] = useState({});

    const params = useParams();
    const history = useHistory();
  

    //Obteniendo los datos de un producto ya existente 
    const getProduct = async (id_) => {
        const res = await productsService.getProductById(id_)
        const { id,clave,nombre,descripcion } = res.data; 
        setProduct({ id,clave,nombre,descripcion});  
    };

    //Renderizando esos datos en los inputs del formEdit
  useEffect(() => {
    if (params.id) getProduct(params.id);
  }, [params.id]);
    

    //capturando los datos de los inputs del form 
    const handleOnChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    };

    //enviado los datos al backend de acuerdo a la ruta (edit/add)
    const onsubmit = async (e) => {
        e.preventDefault();
        console.log(product.id);
   
           
        if(product.nombre === '' || product.clave === '' || product.descripcion === '' || product.id === ''){
            Swal('Por favor rellene todos los campos');

        } else if(product.id === ''){
            Swal('Por favor agregue un Id al producto');
        } else{

            //Comproband si ya existe Id en la base de datos 
            //Enviando datos al server 
            try{
                if (!params.id) {
                    const res = await axios.post('http://localhost:4000/api/products',{product})
                    setProduct(initialState);
                    Swal('Producto agregado correctamente');
                    if(res){
                        Swal({
                            text: '¿Desea agregar otro producto?',
                            buttons:['Sí', 'No']
                        }).then(res => {
                            if(res){
                            history.push('/products');
                            }
                        });
                    }
                } else {
                    await productsService.updateProduct(params.id, product); 
                    setProduct(initialState); 
                    history.push('/products')
                }
            }catch(e){    
                console.log(e)
                if(403){
                    Swal('Agregue un Id diferente al producto');
                }
            }
        }
    
    };
    
   
        return(
            <div >
               
            <nav>
                <div className="red darken-4">
                <div className="nav-wrapper red darken-2"></div>
                <div className="brand-logo right">MERN</div>
            
                </div>
            </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={onsubmit}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="id" onChange={handleOnChange} type="text" placeholder="Id" value={product.id}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="clave" onChange={handleOnChange} type="text" placeholder="Clave" value={product.clave}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="nombre"  onChange={handleOnChange} type="text" placeholder="Producto" value={product.nombre}/>                                            
                                            </div>  
                                        </div>  
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="descripcion"  onChange={handleOnChange} type="text" placeholder="Descripción" value={product.descripcion}/>                                            
                                            </div>  
                                        </div>  
                                        {params.id ? 
                                        (<button className="btn btn-info">Update</button>) : 
                                        (<button className="btn btn-primary">Create</button>)}
                                           
                                    </form> 
                                </div>
                            </div>
                        </div>
                        <div className="col s7"></div>    
                      
                    </div>
                </div>
               
        </div>
            
        )
    

}

export default ProductsAdd;
