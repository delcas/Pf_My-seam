import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_SERVICES = "GET_SERVICES";
export const SEARCH_PRODUCT_BY_NAME = "SEARCH_PRODUCT_BY_NAME";
export const GET_PRODUCT_QUESTION = "GET_PRODUCT_QUESTION";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PROMOTIONS = "GET_PROMOTIONS";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const GET_USERS = "GET_USERS"


export const getUsers = ()=>{
    return async function(dispatch){
        const usersData = await axios.get(`/users`);
        const users = usersData.data
        dispatch({type: GET_USERS, payload: users});
    };
};


export const getProducts = ()=>{
    return async function(dispatch){
        const productsData = await axios.get(`/product`);
        const products = productsData.data
        dispatch({type: GET_PRODUCTS, payload: products});
    };
};

export const getServices = () => {
    return async function (dispatch) {
        const json = await axios.get(`/service`);
        const services = json.data
        dispatch({type: GET_SERVICES, payload: services});
    };
};


export const searchProductByName = (search) => {
    return async (dispatch) => {
      try {
        let json = await axios.get(`http://localhost:3001/product?name=${search}`);
        dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: json.data })
      }
      catch(error) {
        alert(`El producto "${search}" no existe, intenta con otro`)
      }
    }
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
        const productQuestionData = await axios.get(`/questprod/product`); 
        const ProductQuestions = productQuestionData.data
        dispatch({type: GET_PRODUCT_QUESTION, payload: ProductQuestions});
    };
};

  export const getPromotions = ()=>{
    return async function(dispatch){
        const productsData = await axios.get(`/product`);
        let products = productsData.data
        products = products.slice(8, 12)        
        dispatch({type: GET_PROMOTIONS, payload: products});
    };  
};



export const orderByAlphabet = (type) => {
    return {type:ORDER_BY_ALPHABET, payload: type}
};

export const nameAlphabet = (a, b) => {
    if(a.name < b.name) return -1
    if(b.name < a.name) return 1 
  return 0
}

export function filterByPrice(payload) {
  // console.log('action por price')
  return {
    type: FILTER_BY_PRICE,
    payload
  }

}
