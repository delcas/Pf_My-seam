import React from 'react'
import { useDispatch } from "react-redux"
import { orderByAlphabet } from "../../Redux/actions"


export const FilterAlphabet = () => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
      dispatch(orderByAlphabet(e.target.value))
      console.log(dispatch);
  } 
   
  return (
      <div>
           <select onChange={handleChange}>
            <option value="reset">Por orden alfabetico</option>
            <option value="AZ">A - Z</option>
            <option value="ZA">Z - A</option>
          </select>
     </div>
  )
}
