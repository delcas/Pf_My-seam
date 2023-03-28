import {GET_PRODUCTS,    
        GET_SERVICES, 
        SEARCH_PRODUCT_BY_NAME,
        GET_PROMOTIONS,
        GET_PRODUCT_QUESTION,
       GET_PRODUCT_BY_ID,
        ORDER_BY_ALPHABET
        } from "./actions";


 import { nameAlphabet } from "./actions";

const initialState = {
    products: [],
    allProducts: [],
    services: [],  
    details: [],
    productQuestions: [],  
    promotions: [],   
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
        case GET_PRODUCT_QUESTION:
            return {...state, 
                productQuestions: action.payload}; 
        case GET_PRODUCT_BY_ID:
            return {...state,
                details: action.payload };  
        case GET_PROMOTIONS:
            return {...state, 
                promotions: action.payload
            };
        case ORDER_BY_ALPHABET:
            console.log("ORDER_BY_ALPHABET",action.payload);
            {
           if(action.payload === 'a-z') {
               return {
              ...state,
              allProducts: state.allProducts.slice().sort(nameAlphabet),
                
           }
          } else {
             return {
               ...state,
                allProducts: state.allProducts.slice().sort(nameAlphabet).reverse(),
          
              }
          }
        }
        
        default:
            return {...state};
    }
};

export default rootReducer