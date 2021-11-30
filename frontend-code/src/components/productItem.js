import React from 'react';
import { useHistory } from 'react-router-dom';
import * as productsService from './productsService';
import Swal from 'sweetalert';


const Product = (props) => {
    const {product, loadProducts} = props;
    const history = useHistory();
    
    const deleteProduct = (id) => { 
        Swal({
            text: '¿Estas seguro de querer eliminarlo?',
            buttons:['No', 'Sí']
        }).then((res) => {
            if(res){
                 productsService.deleteProductById(id)    
                loadProducts();    
                  
            }
        });
    }

    return(
            
        <div className="col-md-3"  >
            <div className="card text-center" >
                <div className="card-body">
                    <a href="https://ctonline.mx/buscar/productos?b=ACCBRT170 "className=" h5 card-tittle text-uppercas text-info">                 
                        {product.nombre}
                    </a> 
                    <p className="m-2">
                        {product.id}
                    </p>
                    <p className="m-2">
                        {product.clave}
                    </p>
                    <p className="m-2">
                       {product.descripcion}
                    </p>
                    
                    <button onClick={() => {history.push(`/products/edit/${product.id}`)} } type="submit" className="btn blue darken-2 mr-4">Editar</button>
                    <button onClick={() => {deleteProduct(product.id)}} type="submit" className="btn red darken-2">Eliminar</button>
                </div>
            </div>
        </div>                         
    )
}
export default Product;