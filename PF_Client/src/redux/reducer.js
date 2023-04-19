import {
  GET_PRODUCTS,
  GET_SERVICES,
  SEARCH_PRODUCT_BY_NAME,
  GET_PROMOTIONS,
  GET_PRODUCT_QUESTION,
  GET_SERVICE_QUESTION,
  ORDER_BY_ALPHABET,
  GET_PRODUCT_BY_ID,
  FILTER_BY_PRICE,
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
} from "./actions";

import { nameAlphabet } from "./actions";

const initialState = {
  products: [],
  allProducts: [],
  services: [],
  allServices: [],
  details: [],
  productQuestions: [],
  serviceQuestions: [],
  promotions: [],
  cart: [],
  users: [],
  userInfo: {},
  user: {},
  favourites: [],
};

const rootReducer = (state = initialState, action) => {
  // let aux = [];

  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        allServices: action.payload,
      };
    case SEARCH_PRODUCT_BY_NAME:
      return { ...state, products: action.payload };
    case GET_PRODUCT_QUESTION:
      return { ...state, productQuestions: action.payload };
    case GET_SERVICE_QUESTION:
      return { ...state, serviceQuestions: action.payload };
    case GET_PRODUCT_BY_ID:
      return { ...state, details: action.payload };
    case SET_PRODUCT_CHANGE:
      return { ...state, details: action.payload };
    case GET_PROMOTIONS:
      return { ...state, promotions: action.payload };
    case FILTER_BY_PRICE:
      let productsShown = state.allProducts;
      let productsFiltered = [];
      if (action.payload === "none") {
        productsFiltered = productsShown;
      } else if (action.payload === "Hasta $ 100") {
        productsFiltered = productsShown.filter((p) => p.price < 100);
      } else if (action.payload === "$ 100 a $ 500") {
        productsFiltered = productsShown.filter(
          (p) => p.price > 100 && p.price < 500
        );
      } else {
        productsFiltered = productsShown.filter((p) => p.price > 500);
      }
      return { ...state, products: productsFiltered };
    case ORDER_BY_ALPHABET: {
      if (action.payload === "a-z") {
        return {
          ...state,
          products: state.products.slice().sort(nameAlphabet),
        };
      } else {
        return {
          ...state,
          products: state.products.slice().sort(nameAlphabet).reverse(),
        };
      }
    }

    case FILTER_BY_CATEGORY: {
      const category = action.payload;
      let productCategory = state.allProducts;
      let filterCategory = [];
      if (category === "All") {
        filterCategory = productCategory;
      } else {
        filterCategory = productCategory.filter((p) => p.category === category);
      }
      return {
        ...state,
        products: filterCategory,
      };
    }

    case FILTER_BY_GENDER: {
      const gender = action.payload;
      let productGender = state.allProducts;
      let filterByGender = [];
      if (gender === "All") {
        filterByGender = productGender;
      } else {
        filterByGender = productGender.filter((p) => p.gender === gender);
      }
      return {
        ...state,
        products: filterByGender,
      };
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
        filterbyCountry = serviceCountry;
      } else {
        filterbyCountry = serviceCountry.filter((p) => p.country === countrys);
      }
      return {
        ...state,
        services: filterbyCountry,
      };
    }

    case GET_USERS: {
      return { ...state, users: action.payload };
    }
    case GET_SERVICE_BY_ID: {
      return { ...state, details: action.payload };
    }

    case GET_USER_BY_EMAIL: {
      return { ...state, userInfo: action.payload };
    }
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
