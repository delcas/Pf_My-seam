import { useState } from "react";
import questyle from "./Questions.module.css";

export default function Questions({userId}) {    
  const productQuestions = useSelector((state) => state.userInfo);
    const [ questions, setQuestion ] = useState()

    function onChange(event) {
    if (event !== "-") {
      setQuestion(questions.find((q) => q.name === event));
    } else {
      setActivity("");
    }
  }

    return <table className={questyle.detailTable}>
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
}

