import React, { useEffect, useState } from "react";
import style from "./ProductDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {
  deleteProduct,
  getProductById,
  getProductQuestions,
  getUserByEmail,
  setProductChange,
} from "../../redux/actions";
import { NavBar } from "../../components/NavBar/NavBar";
import Detail from "../../components/Detail/Detail";
import Questions from "../../components/Questions/Questions";

//Chakra
import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";


export const ProductDetail = ({ isAuthenticated, user }) => {

  const details = useSelector((state) => state.details);
  const userInfo = useSelector((state) => state.userInfo);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [currentImg, setCurrentImg] = useState(0);
  const userId = userInfo.id;
  let ver;
  console.log(userId);
  console.log(details.userid );
  userId === details.userid ? (ver = true) : (ver = false);
  
  const [edit, setEdit] = useState({
    e: false,
    s: "none",
  });
  const [input_ed, setInpEd] = useState({});

  useEffect(() => {
    const urlID = window.location.href;
    let prodID = urlID.split("/");
    // eslint-disable-next-line
    dispatch(getProductById(prodID[prodID.length - 1]));
    dispatch(getProductQuestions(prodID[prodID.length - 1]));
    dispatch(getUserByEmail(user?.email));
    // dispatch(getProductById(id));
  }, [dispatch]);

  
  function handleEdition() {
    edit.e ? setEdit({ ...edit, e: false }) : setEdit({ ...edit, e: true });
  }
  function handleDelete() {
    dispatch(deleteProduct(details.id));
  }
  function EditionPDetail(ev) {
    edit.s !== ev.target.name
      ? setEdit({ ...edit, s: ev.target.name })
      : setEdit({ ...edit, s: "none" });
  }
  function InputHandler(event) {
    setInpEd({ [event.target.name]: event.target.value });
  }
  function SendCange() {
    dispatch(setProductChange(details.id, input_ed));
    setEdit({ ...edit, s: "none" });
  }

  const showNotify = () => {
    setNotify(!notify);
  };

   // Agregar producto al carrito de compras
   const handleCart =  () => {    
    // Validar si ya existe el producto en el carrito de compras
    if (cart.find(el => el === details)) {   
      details.quantity +=  1 
    } else {
      details.quantity = 1 
        cart.push(details)
      }
  };

  return (
    <div>
      <NavBar />
      {details.length !== 0 ? (
        <div>
          <h1> Detalle del producto </h1>
          <Detail 
          userId={userId}
          handleEdition={handleEdition}
          handleDelete={handleDelete}
          details={details}
          currentImg={currentImg}
          setCurrentImg={setCurrentImg}
          InputHandler={InputHandler}
          SendCange={SendCange}
          EditionPDetail={EditionPDetail}
          edit={edit}
          ver={ver}
          />
                  <div>
            <button as={BsFillCartPlusFill} w={8} h={8} className={style.buttonCart} onClick={handleCart} title="Agregar al carrito"> Agregar al carrito</button>

                  </div>
          <Questions
          userId={userId}
          details={details}
          ver={ver}
          />
        </div>
      ) : (
        "No se encontró el ID"
      )}
    </div>
  );
};
