import React, { useEffect, useState } from "react";
import style from "./ProductDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {
  deleteProduct,
  getProductById,
  getProductQuestions,
  setProductChange,
} from "../../Redux/actions";
import { NavBar } from "../../components/NavBar/NavBar";
import Detail from "../../components/Detail/Detail";

//Chakra
import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";


export const ProductDetail = () => {
  const details = useSelector((state) => state.details);
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const questions = details.questions;
  const [currentImg, setCurrentImg] = useState(0);
  //Variable provisoria que a futuro deberá llegar desde el estado global
  const userId = 1;
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
    // dispatch(getProductById(id));
    getProductQuestions();
  }, [dispatch]);

  function onChange(event) {
    if (event !== "-") {
      setQuestion(questions.find((q) => q.name === event));
    } else {
      setActivity("");
    }
  }
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

  }

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
          />
                  <div>
            <button as={BsFillCartPlusFill} w={8} h={8} className={style.buttonCart} onClick={handleCart} title="Agregar al carrito"> Agregar al carrito</button>

                  </div>
          <table className={style.detailTable}>
            <tr>
              <th colSpan="2">Preguntas:</th>
            </tr>

            <select
              onChange={(e) => {
                onChange(e.target.value);
              }}
            >
              <option value="-">ver preguntas</option>
              {questions &&
                questions.map((q) => (
                  <option value={`${q.id}`} key={`${q.id}`}>
                    {q.id}
                  </option>
                ))}
            </select>

            {question ? (
              <>
                <tr>
                  <td>Pregunta: </td>
                  <td>{question.question}</td>
                </tr>
                <tr>
                  <td>Respuesta: </td>
                  <td>{question.answer}</td>
                </tr>
              </>
            ) : (
              ""
            )}
          </table>
        </div>
      ) : (
        "No se encontró el ID"
      )}
    </div>
  );
};
