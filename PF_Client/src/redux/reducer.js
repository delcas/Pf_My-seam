import {GET_PRODUCTS,    
    GET_SERVICES, 
    SEARCH_PRODUCT_BY_NAME,
    GET_PROMOTIONS,
    GET_PRODUCT_QUESTION,
  GET_SERVICE_QUESTION,
    ORDER_BY_ALPHABET,
    GET_PRODUCT_BY_ID,
    FILTER_BY_PRICE,
    FILTER_BY_RANGE,
    SET_PRODUCT_CHANGE,
    GET_USERS,
    GET_USER,
    GET_SERVICE_BY_ID,
    GET_USER_BY_EMAIL,
    FILTER_BY_CATEGORY,
    FILTER_BY_GENDER,
    FILTER_BY_TYPE_SERVICE,
    FILTER_BY_COUNTRY,
    GET_CART,
    ADD_CART,
    DELETE_CART,
    UPDATE_CART,
    UPDATE_CART_SET,
   nameAlphabet } from "./actions";

const initialState = {
products: [],
allProducts: [],
filterProducts: [],
services: [],
allServices: [],
details: [],
productQuestions: [],  
serviceQuestions: [],
promotions: [],  
cart: localStorage.hasOwnProperty("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : [],
users: [],
userInfo: {},
user: {},
favourites: [],
};

const rootReducer = (state = initialState, action) => {
  // let aux = [];

    switch (action.type){
        case GET_PRODUCTS:
            return {...state, 
                products: action.payload,
                allProducts: action.payload,
                filterProducts: action.payload
            }; 
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_SERVICES:
            return {...state, 
                services: action.payload,
                allServices: action.payload
            };  
        case SEARCH_PRODUCT_BY_NAME:
            return {...state, 
                products: action.payload};
        case GET_PRODUCT_QUESTION:
            return {...state, 
                productQuestions: action.payload}; 
                case GET_SERVICE_QUESTION:
                  return { ...state, serviceQuestions: action.payload };
        case GET_PRODUCT_BY_ID:
            return {...state,
                details: action.payload };  
                case GET_SERVICE_BY_ID: {
                  return { ...state, details: action.payload };
                }
        case SET_PRODUCT_CHANGE:
            return {...state,
                details: action.payload }; 
        case GET_PROMOTIONS:
            return {...state, 
                promotions: action.payload};
        case FILTER_BY_PRICE:
            let productsShown = state.filterProducts
            let productsFiltered = []
            if(action.payload === 'Hasta $50'){
                productsFiltered = productsShown.filter(p => p.price < 50)
            } else if (action.payload === '$50 a $100' ){
                productsFiltered = productsShown.filter( p => p.price >= 50 && p.price <= 100)
            } else {
                productsFiltered = productsShown.filter(p => p.price > 100)
                if (productsFiltered.length === 0) {
                    productsFiltered = state.products 
                    alert('No hay productos con ese rango de precios') 
                } 
            }
            return {...state,
                products: productsFiltered
            }        
        case FILTER_BY_RANGE:
            let productsByRange = state.filterProducts
            let filterRange = []
            if (action.min < 1 && action.max < 1 || action.min > action.max) {
                alert('No hay productos con ese rango de precios')
                 filterRange = state.products
            } else if (action.min === action.max) {
                filterRange = productsByRange.filter(p => p.price == action.min)
                if (filterRange.length === 0) {
                    filterRange = state.products 
                    alert('No hay productos con ese rango de precios') 
                } 
            } else {
                filterRange = productsByRange.filter(p => p.price > action.min && p.price < action.max)
                if (filterRange.length === 0) {
                    filterRange = state.products 
                    alert('No hay productos con ese rango de precios') 
                } 
            }
            return {...state,
                products: filterRange
            }        
       case ORDER_BY_ALPHABET: {
         if (action.payload === 'a-z') {
           return {
              ...state,
               products: state.products.slice().sort(nameAlphabet)
          };
          } else {
               return {
                ...state,
                products: state.products.slice().sort(nameAlphabet).reverse()
             };
           }
        }
           
        case FILTER_BY_CATEGORY: {
            const category = action.payload;
            let productCategory = state.filterProducts;
            let filterCategory = [];
            if (category === "All") {
                filterCategory = productCategory
            } else {                
                filterCategory = productCategory.filter((p) => p.category === category)
                if (filterCategory.length === 0) {
                    filterCategory = state.products 
                    alert('No hay productos de esa categoría') 
                } 
            }
            return {
                ...state,
                products: filterCategory
            }
        }
        
       case FILTER_BY_GENDER: {
            const gender = action.payload;
            let productGender = state.filterProducts;
            let filterByGender = [];
            if (gender === "All") {
                filterByGender = productGender
            } else {
                filterByGender = productGender.filter((p) => p.gender === gender)
                if (filterByGender.length === 0) {
                    filterByGender = state.products 
                    alert('No hay productos de ese género') 
                } 
            }
            return {
                ...state,
                products: filterByGender
            }
        }
      case FILTER_BY_TYPE_SERVICE: {
            const type = action.payload;
            let productType = state.allServices;
            let filterByType = [];
            if (type === "Todos") {
                filterByType = productType;
            } else {
                filterByType = productType.filter((p) => p.name === type);
            }
            return {
              ...state,
              services: filterByType,
            };
        }
        case FILTER_BY_COUNTRY: {
            const countrys = action.payload;
            let serviceCountry = state.allServices;
            let filterbyCountry = [];
            if (countrys === "All") {
                filterbyCountry = serviceCountry
            } else {
                filterbyCountry = serviceCountry.filter((p) => p.country === countrys)
            }
            return {
                ...state,
                services: filterbyCountry
            }
        }
            
        case GET_USERS: {
            return {...state, 
                users: action.payload}; 
            }

    case GET_USER_BY_EMAIL:{
        return { ...state, userInfo: action.payload}
    }
    case GET_CART:
        return {
            ...state,
            cart: action.payload
        }
    case ADD_CART: 
            
            let itemInCart = state.cart.find(
                (product) => product.id === action.payload.id
            );
            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                    ),
                  }
                : {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                  };
        
    case DELETE_CART:
        let deleteProduct = state.cart.filter((p) => p.id !== action.payload);
        return {
            ...state,
            cart: deleteProduct
        }
    case UPDATE_CART:
        let cartLength = state.cart.reduce((accumulator, currentValue) => 
        accumulator + currentValue.quantity, 0)
            return{
                ...state,
                cartLength: cartLength 
            }
    case UPDATE_CART_SET:
            return{
                ...state,
                 cartLength: action.payload
            }

    default:
      return { ...state };
  }
};

export default rootReducer;
