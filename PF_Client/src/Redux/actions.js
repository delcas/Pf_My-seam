import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_SERVICES = "GET_SERVICES";


export const getProducts = ()=>{
    return async function(dispatch){
        const productsData = await axios.get(`/product`);
        const products = productsData.data
        dispatch({type: GET_PRODUCTS, payload: products});
    };
};

export const getServices = ()=>{
    return async function(dispatch){
        const servicesData = await axios.get(`/service`);
        const services = servicesData.data
        dispatch({type: GET_SERVICES, payload: services});
    };
};