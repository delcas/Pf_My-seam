import { useEffect, useState } from "react";
import questyle from "./Questions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductQuestions } from "../../Redux/actions";

export default function Questions({ userId, details }) {
  const dispatch = useDispatch();
  const productQuestions = useSelector((state) => state.productQuestions);
  const [question, setQuestion] = useState();
//   useEffect(() => {
//     // eslint-disable-next-line
//     dispatch(getProductQuestions(details.id));
//     // dispatch(getProductById(id));
//   }, [dispatch]);

  function onChange(event) {
    if (event !== "-") {
      dispatch(getProductQuestions(details.id));
      setQuestion(productQuestions.find((q) => q.name === event));
    } else {
      setActivity("");
    }
  }

  return (
    <table className={questyle.detailTable}>
      <tr>
        <th colSpan="2">Preguntas:</th>
      </tr>

      <select
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option value="-">ver preguntas</option>
        {productQuestions.length > 0
          ? productQuestions.map((q) => (
              <option value={`${q.id}`} key={`${q.id}`}>
                {q.id}
              </option>
            ))
          : ""}
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
  );
}
