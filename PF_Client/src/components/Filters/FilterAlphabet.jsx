import React from 'react'
import { useDispatch } from "react-redux"
import { orderByAlphabet } from "../../Redux/actions"


export const FilterAlphabet = () => {
    


    const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(orderByAlphabet(e.target.value))
    
  } 
   
  return (
      <div onChange={(e) => handleChange(e)}>
           <select>
            <option value="reset">Por orden alfabetico</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
     </div>
  )
}
