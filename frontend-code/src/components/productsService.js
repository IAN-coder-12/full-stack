import axios from "axios";


const API = "http://localhost:4000/api";

export const getProducts = async () => {
  return await axios.get(`${API}/products`)
};

export const createNewProduct = async () => {
  return await axios.post(`${API}/products`);
};

export const getProductById = async (id) => {
  return await axios.get(`${API}/products/edit/${id}`);
}; 

export const deleteProductById = async (id) => {
  return await axios.delete(`${API}/products/${id}`);
};

export const updateProduct = async (id, product) => {
  return await axios.put(`${API}/products/edit/${id}`, product);
};