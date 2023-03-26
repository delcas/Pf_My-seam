import {GET_PRODUCTS,    
        GET_SERVICES, 
        SEARCH_PRODUCT_BY_NAME,
        } from "./actions";

const initialState = {
    products: [],
    allProducts: [],
    services: [],    
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, 
                products: action.payload,
                allProducts: action.payload};  
        case GET_SERVICES:
            return {...state, 
                services: action.payload};  
        case SEARCH_PRODUCT_BY_NAME:
            return {...state, 
                products: action.payload};
                
        
        default:
            return {...state};
    }
};

export default rootReducer