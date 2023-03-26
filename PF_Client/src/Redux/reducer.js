import {GET_PRODUCTS,    
       GET_SERVICES,
        } from "./actions";

const initialState = {
    products: [],
    services: [],  
    
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS:
            return {...state, 
                products: action.payload};  
        case GET_SERVICES:
            return {...state, 
                services: action.payload
            }; 
        
        default:
            return {...state};
    }
};

export default rootReducer