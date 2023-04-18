import axios from "axios";
export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_SERVICES = "GET_SERVICES";
export const SEARCH_PRODUCT_BY_NAME = "SEARCH_PRODUCT_BY_NAME";
export const GET_PRODUCT_QUESTION = "GET_PRODUCT_QUESTION";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PROMOTIONS = "GET_PROMOTIONS";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const SET_PRODUCT_CHANGE = "SET_PRODUCT_CHANGE";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_SERVICE_BY_ID = "GET_SERVICE_BY_ID";
export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";
export const FILTER_BY_CATEGORY = " FILTER_BY_CATEGORY";
export const FILTER_BY_GENDER = "FILTER_BY_GENDER";
export const FILTER_BY_TYPE_SERVICE = "FILTER_BY_TYPE_SERVICE";
export const FILTER_BY_COUNTRY = "FILTER_BY_COUNTRY";
export const GET_CART = "GET_CART";

export const getUsers = () => {
  return async function (dispatch) {
    const usersData = await axios.get(`/users`);
    const users = usersData.data;
    // console.log("get users result: ", users.length);
    dispatch({ type: GET_USERS, payload: users });
  };
};

export const getUser = (id) => {
  return async function (dispatch) {
    const userData = await axios.get(`/users/${id}`);
    const user = userData.data;
    // console.log("get users result: ", user.length);
    dispatch({ type: GET_USER, payload: user });
  };
};

export const getProducts = () => {
  return async function (dispatch) {
    const productsData = await axios.get(`/product`);
    const products = productsData.data;
    dispatch({ type: GET_PRODUCTS, payload: products });
  };
};

export const getServices = () => {
  return async function (dispatch) {
    const json = await axios.get(`/service`);
    const services = json.data;
    dispatch({ type: GET_SERVICES, payload: services });
  };
};

export const searchProductByName = (search) => {
  return async (dispatch) => {
    try {
      let json = await axios.get(`/product?name=${search}`);
      dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: json.data });
    } catch (error) {
      alert(`El producto "${search}" no existe, intenta con otro`);
    }
  };
};

export const getServiceById = (id) => {
  return async function (dispatch) {
    const json = await axios.get(`/service/${id}`);
    const details = json.data;
    dispatch({ type: GET_SERVICE_BY_ID, payload: details });
  };
};

export const getProductById = (ID) => {
  return async function (dispatch) {
    const res = await axios.get(`/product/${ID}`);
    const details = res.data;
    dispatch({ type: GET_PRODUCT_BY_ID, payload: details });
  };
};

export const getProductQuestions = (pId) => {
  console.log("getProdQ pre axios", pId);
  return async function (dispatch) {
    const productQuestionData = await axios.get(
      `/questprod/product/?offerId=${pId}`
    );
    const ProductQuestions = productQuestionData.data;
    dispatch({ type: GET_PRODUCT_QUESTION, payload: ProductQuestions });
  };
};

export const getPromotions = () => {
  return async function (dispatch) {
    const productsData = await axios.get(`/product`);
    let products = productsData.data;
    products = products.slice(8, 12);
    dispatch({ type: GET_PROMOTIONS, payload: products });
  };
};

export const orderByAlphabet = (type) => {
  return { type: ORDER_BY_ALPHABET, payload: type};
};


export const nameAlphabet = (a, b) => {
  var aName = a.name.toLowerCase();
  var bName = b.name.toLowerCase();
  if (aName < bName) return -1;
  if (bName < aName) return 1;
  return 0;
}



export const filterByCategory = (category) => {
  return { type: FILTER_BY_CATEGORY, payload: category };
};

export const filterByGender = (payload) => {
  return { type: FILTER_BY_GENDER, payload,}
};


export function filterByPrice(payload) {
  // console.log('action por price')
  return {
    type: FILTER_BY_PRICE,
    payload,
  };
}

export const filterByTypeService = (type) => {
  return { type: FILTER_BY_TYPE_SERVICE, payload: type };
};

export const filterByCountry = (country) => ({
  type: FILTER_BY_COUNTRY,
  payload: country,
});


export function setProductChange(id, change) {
  return async function (dispatch) {
    const res = await axios.put(`/product/${id}`, change);
    const detail = res.data;
    // console.log("generando cambio al Producto: ", detail);
    dispatch({
      type: SET_PRODUCT_CHANGE,
      payload: detail,
    });
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    await axios.delete(`/product/?id=${id}`).then(dispatch(getProducts()));
    // console.log(`Se ejecutó la funcion de borrado del producto ${id}`);
  };
}

export function getUserByEmail(info) {
  return async function (dispatch) {
    const emailData = await axios.get(`/users?email=${info}`);
    const infoUser = emailData.data;
    // console.log(infoUser);
    dispatch({ type: GET_USER_BY_EMAIL, payload: infoUser });
  };
}

export function getCart(id) {
  return async function (dispatch) {
    const cart = await axios.get(`/cart?customer_id=${id}`);
    const infoCart = cart.data;
    dispatch({ type: GET_CART, payload: infoCart });
  };
}