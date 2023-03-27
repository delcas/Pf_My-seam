import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_SERVICES = "GET_SERVICES";
export const SEARCH_PRODUCT_BY_NAME = "SEARCH_PRODUCT_BY_NAME";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";


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


export const orderByAlphabet = (type) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload: type
    }
}

// export const nameAlphabet = (a, b) => {
//     if(a.name < b.name) return -1
//   if(b.name < a.name) return 1 
//   return 0
// }