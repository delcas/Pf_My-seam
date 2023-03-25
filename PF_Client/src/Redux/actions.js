import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_SERVICES = "GET_SERVICES";
export const SEARCH_PRODUCT_BY_NAME = "SEARCH_PRODUCT_BY_NAME";


export const getProducts = () => {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/product');
        const products = json.data
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

/* export const searchProductByName = (search) => {
    return async function (dispatch) {
        try {
            const json = await axios.get(`http://localhost:3001/product?name=${search}`);
            console.log(json);
            const search = json.data
            console.log(search);
            
            return dispatch({type: SEARCH_PRODUCT_BY_NAME, payload: search})
        }
        catch(error) {
            alert(`Product "${search}" not found, try with another`)
          }
    };
}; */

export const searchProductByName = (search) => {
    return async (dispatch) => {
      try {
        let json = await axios.get(`http://localhost:3001/product?name=${search}`);
        let data = json.data        
        return dispatch({
          type: 'SEARCH_PRODUCT_BY_NAME',
          payload: data
        })
      }
      catch(error) {
        alert(`Product "${search}" not found, try with another`)
      }
    }
  };