import {GET_PRODUCTS,    
        GET_SERVICES, 
        GET_PRODUCT_QUESTION,
        GET_PRODUCT_BY_ID,
        } from "./actions";

const initialState = {
    products: [],
    services: [],  
    details: [],
    productQuestions: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {
                ...state, 
                products: action.payload};  
        case GET_SERVICES:
            return {
                ...state, 
                services: action.payload};  
        case GET_PRODUCT_QUESTION:
            return {
                ...state, 
                productQuestions: action.payload}; 
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                details: action.payload };
        default:
            return {...state};
    }
};

export default rootReducer