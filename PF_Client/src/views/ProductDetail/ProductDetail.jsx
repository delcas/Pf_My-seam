import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import style from "./ProductDetail.module.css"
import { getProductById, getProductQuestions } from '../../Redux/actions'


export const ProductDetail = (id) => {
  const details = useSelector(state => state.details) //
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('')
  const questions = details.questions  

    //deberia llegar el productID por->(params)
    useEffect(()=>{    
      const productID = id
      // eslint-disable-next-line
      dispatch(getProductById(productID));    
      getProductQuestions()
    },[dispatch]) 


  return (
    <div>
      <div>Detalle del Producto</div>
      <table className={style.detailTable}>
      <tr>                
        <td className={style.box} rowSpan="6">
          <img className={style.DetailImg} src={details.image[0]} alt={`imagen del producto`} />
        </td>
        <td className={style.tdRight}>
          <tr>nombre: </tr>   
          <tr>descripcion: </tr>  
          <tr>precio: </tr>  
          <tr>stock: </tr> 
          <tr>vendedor: </tr> 
          <tr>disponible: </tr>   
        </td>        
        <td className={style.tdLeft}>
          <tr>{details.name}</tr>   
          <tr>{details.description}</tr>  
          <tr>{details.price}</tr> 
          <tr>{details.stock}</tr> 
          <tr>{details.userId}</tr>   
          <tr>details.available a implementar</tr>               
        </td>  
      </tr>
      </table>
      <table className={style.detailTable}>
      <tr>
        <th colspan="2">Preguntas:</th>
      </tr>
      <tr>
        <td>Aqui deben cargarse las preguntas</td>
      </tr>  
      </table>
    </div>    
  )
}
