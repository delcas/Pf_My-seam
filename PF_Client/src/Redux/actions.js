import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_SERVICES = "GET_SERVICES";
export const GET_PRODUCT_QUESTION = "GET_PRODUCT_QUESTION";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";


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

export const getProductById = (ID) =>{
    return async function (dispatch) {
        const res = await axios.get(`/product/${ID}`)
        const details = res.data
        dispatch({type: GET_PRODUCT_BY_ID, payload: details});        
    };
};

export const getProductQuestions = ()=>{
    return async function(dispatch){
        const productQuestionData = await axios.get(`/question`); //deberia quedar /productQuestion (y /serviceQuestion para servicios)?        
        const ProductQuestions = productQuestionData.data
        dispatch({type: GET_PRODUCT_QUESTION, payload: ProductQuestions});
    };
};
