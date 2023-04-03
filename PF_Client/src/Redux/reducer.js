import {GET_PRODUCTS,    
        GET_SERVICES, 
        SEARCH_PRODUCT_BY_NAME,
        GET_PROMOTIONS,
        GET_PRODUCT_QUESTION,
        ORDER_BY_ALPHABET,
        GET_PRODUCT_BY_ID,
        FILTER_BY_PRICE,
        SET_PRODUCT_CHANGE,
        GET_USERS,
        GET_SERVICE_BY_ID
        } from "./actions";


  import { nameAlphabet } from "./actions";

const initialState = {
    products: [],
    allProducts: [],
    services: [],  
    details: [],
    productQuestions: [],  
    promotions: [],  
    cart: [],
    users: []
};

const rootReducer = (state = initialState, action) => {
    // let aux = [];   

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
        case SET_PRODUCT_CHANGE:
            return {...state,
                details: action.payload }; 
        case GET_PROMOTIONS:
            return {...state, 
                promotions: action.payload};
                case FILTER_BY_PRICE:
            console.log('reducer: action.payload: ', action.payload )
            let productsShown = state.allProducts
            let productsFiltered = []
            if(action.payload === 'none'){
                productsFiltered = productsShown
            } else if(action.payload === 'Hasta $ 100'){
                productsFiltered = productsShown.filter(p => p.price < 100)
            } else if (action.payload === '$ 100 a $ 500' ){
                productsFiltered = productsShown.filter( p => p.price > 100 && p.price < 500)
            } else {
                productsFiltered = productsShown.filter(p => p.price > 500)
            }
            return {...state,
                products: productsFiltered
            }        
        case ORDER_BY_ALPHABET: {
            if(action.payload === 'a-z') {
                return {
                    ...state,
                    products: state.products.slice().sort(nameAlphabet)
                }
                } else {
                    return {
                        ...state,
                        products: state.products.slice().sort(nameAlphabet).reverse()
                    }
            }
        }
        case GET_USERS: {
            return {...state, 
                users: action.payload}; 
            }
            case GET_SERVICE_BY_ID:{
                return {...state,
                    details: action.payload };  
            }

        default:
            return {...state};
    }
};

export default rootReducer
