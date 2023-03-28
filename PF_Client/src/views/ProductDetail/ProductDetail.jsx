import React, { useEffect, useState } from 'react';
import style from "./ProductDetail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductById, getProductQuestions } from '../../Redux/actions'

export const ProductDetail = (id) => {
  const details = useSelector(state => state.details) 
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('')
  const questions = details.questions 

  useEffect(()=>{    
    const urlID = (window.location.href)
    prodID =urlID.split('/')
    // eslint-disable-next-line
    dispatch(getCountryById(prodID[prodID.length -1]));   
    //dispatch(getProductById(id)); 
    getProductQuestions()
  },[dispatch])  

  function onChange(event) {
    if(event !== '-') {
      setQuestion(questions.find(q => q.name === event))       
    } else {
    setActivity('')
    }
  }

  return (
    <div>
      <h1> Detalle del producto </h1>
      <table className={style.detailTable}>
      <tr>                
        <td className={style.box} rowSpan="6">
            <img className={style.FlagImg} src={details.image[0]} alt={`imagen del producto${details.name}`} />
          </td>
          <td className={style.tdRight}>
            <tr>Producto : </tr>   
            <tr>Descripcion : </tr>  
            <tr>Precio: </tr>  
            <tr>Stock: </tr> 
            <tr>Vendedor: </tr> 
            <tr>Disponible: </tr>                 
        </td>
            <td className={style.tdLeft}>
              <tr>{details.name}</tr>   
              <tr>{details.description}</tr>  
              <tr>{details.price}</tr> 
              <tr>{details.stock}</tr> 
              <tr>{details.userId}</tr>   
              <tr>NYI</tr>               
            </td>                
        </tr>
        </table>
        <table className={style.detailTable}>
        <tr><th colspan="2">Preguntas:</th></tr>             
          <div >
            <select onChange={(e) => {onChange(e.target.value)}}>
            <option value='-'>ver preguntas</option>
            {questions && questions.map((q) => (
              <option value={`${q.id}`} key={`${q.id}`}>{q.id}</option>
            ))}
            </select>
          <div>
            { activity ? (
                <>
                    <tr><td>Pregunta: </td><td>{question.question}</td></tr>
                    <tr><td>Respuesta: </td><td>{question.answer}</td></tr>                    
                </> ) : (
                <p></p>)
            }
            </div>        
            </div>
                                
    </table>

    </div>
  )
}
