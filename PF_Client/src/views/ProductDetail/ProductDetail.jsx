import React, { useEffect, useState } from "react";
import style from "./ProductDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductById, getProductQuestions } from "../../Redux/actions";
import { NavBar } from "../../components/NavBar/NavBar";
export const ProductDetail = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const questions = details.questions;
  //Variable provisoria que a futuro deberá llegar desde el estado global
  const [userId, setuserId] = useState(1);

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

  return (
    <div>
      <NavBar />
      {details.length !== 0 ? (
        <div>
          <h1> Detalle del producto </h1>
          <table className={style.detailTable}>
            <tr>
              <td className={style.box} rowSpan="6">
                <img
                  className={style.FlagImg}
                  src={details.image[0]}
                  alt={`imagen del producto ${details.name}`}
                />
              </td>
              <td className={style.tdLeft}>
                {userId === details.userid ? <th>Editar 🖊
            </th> : ''}
                <tr>Producto: {details.name}</tr>
                <tr>Descripcion: {details.description}</tr>
                <tr>Precio: {details.price}</tr>
                <tr>Stock: {details.stock}</tr>
                <tr>Vendedor: {details.userid}</tr>
                <tr>Disponible: NYI</tr>
              </td>
            </tr>
          </table>
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
