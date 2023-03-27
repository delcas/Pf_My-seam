import {GET_PRODUCTS,    
        GET_SERVICES, 
        SEARCH_PRODUCT_BY_NAME,
        ORDER_BY_ALPHABET,
        } from "./actions";


// import { nameAlphabet } from "./actions";

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
                products: action.payload
            };
        case ORDER_BY_ALPHABET:
            aux = [...state.products]
            if (action.payload === "AZ") {
                    aux.sort((a,b)=> {
                    if (b.name > a.name) return -1
                })
            } else if (action.payload === "ZA") {
                    aux.sort((a,b)=> {
                    if (a.name > b.name) return -1
                })
            } else {
                aux = [...state.products]
            }
            return {
                ...state,
                products: [...aux]
            }
                
        default:
            return {...state};
    }
};

export default rootReducer