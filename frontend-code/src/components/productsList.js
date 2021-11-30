import React, { useState, useEffect } from 'react';
import * as productsService from './productsService';
import Product from './productItem'
import { Link } from 'react-router-dom'

const ProductsList = () =>{
    const [productList, setProductList] = useState([]);  
    
    //Trayendo los productos del backend y almacenandolos en una lista.
    const loadProducts = async () => {
        await productsService.getProducts()
        .then( res => setProductList(res.data))      
    }
    //Renderizando la lista 
    useEffect(()=> {  
        loadProducts();  
    }, [])

    return (
        <div className="container p-4"> 
            <button type="button" className="navbar-toggler ">
           
                <Link className="navbar-brand" to="/products/add">
                Añadir Producto
                </Link>
            </button>
            <div className="display-3 text center 10">PRODUCTS</div>
            <div className="row">
                {productList.map((product) => {
                    return <Product product={product} key={product.id} loadProducts={loadProducts}/>
                })}
            </div>
        </div>
    )
}
export default ProductsList;