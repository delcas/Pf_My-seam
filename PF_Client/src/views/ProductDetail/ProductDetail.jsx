import React, { useEffect, useState } from "react";
import style from "./ProductDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductById, getProductQuestions, setProductChange } from "../../Redux/actions";
import { NavBar } from "../../components/NavBar/NavBar";
export const ProductDetail = () => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const questions = details.questions;
  const [currentImg, setCurrentImg] = useState (0);  
  //Variable provisoria que a futuro deberá llegar desde el estado global
  const [userId, setuserId] = useState(3);
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
    console.log(edit, "Line 36");
  }
  function EditionPDetail(ev) {
    edit.s !== ev.target.name
      ? setEdit({ ...edit, s: ev.target.name })
      : setEdit({ ...edit, s: "none" });
    console.log(edit, "Line 42");
  }
  function InputHandler(event) {
    setInpEd({[event.target.name]: event.target.value})
};
function SendCange() {
  dispatch(setProductChange(details.id, input_ed));
}

 
  return (
    <div>
      <NavBar />
      {details.length !== 0 ? (
        <div>
          <h1> Detalle del producto </h1>
          {userId === details.userid ? (
            <button onClick={handleEdition}>Habilitar Edición 🖊</button>
          ) : (
            ""
          )}
          <table className={style.detailTable}>
            <tr>
          <td><button name="leftBtn" className={currentImg===0 ? style.ArrowButtonDisabled :style.ArrowButton} 
            onClick={()=> currentImg===0 ? setCurrentImg(0) : setCurrentImg(currentImg-1)}>{"◀"}</button></td>
              <td className={style.box} rowSpan="6">
                <img
                  className={style.FlagImg}
                  src={details.image[currentImg]}
                  alt={`imagen del producto ${details.name}`}
                />
            </td>
          <td><button name="rightBtn" className={currentImg===(details.image.length -1) ? style.ArrowButtonDisabled :style.ArrowButton} 
onClick={()=> currentImg===(details.image.length -1) ? setCurrentImg(currentImg) : setCurrentImg(currentImg+1)}>{"▶"}</button></td>
            <td className={style.tdLeft}>
              <tr>
                  <td>
                    Producto:{" "}
                    {edit.s === "name" ? (<span>
                      <input type="text" name='name' onChange={InputHandler}/>
                      <button onClick={SendCange}>OK</button>
                      </span>) : ( details.name )}
                  </td>
                  <td>
                    {edit.e ? (
                      <button name="name" onClick={EditionPDetail}>
                        {" "}
                        🖊{" "}
                      </button>
                    ) : (
                      ""
                    )}
                  </td>{" "}
                </tr>
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
