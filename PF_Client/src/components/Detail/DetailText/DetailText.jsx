import React, { useEffect, useState } from "react";
import txtstyle from "./DetailText.module.css";
import { useSelector, useDispatch } from "react-redux";
import Review from '../../../components/Review/Review';
//Chakra
import { useColorMode, Icon, Alert, AlertIcon } from '@chakra-ui/react'
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";

export default function DetailText({
    details,
    InputHandler,
    SendCange,
    EditionPDetail,
    edit,
    setTotalPrice,
    totalQuantity,
    setTotalQuantity,
    el
  }){
    const cart = useSelector(state => state.cart);
    const [itemsPerProduct, setItemsPerProduct] = useState(cart.quantity)
      const prodDetails = useSelector((state) => state.details);

      const handleCart =  () => {    
        // Validar si ya existe el producto en el carrito de compras
        if (cart.find(el => el === prodDetails)) {   
          prodDetails.quantity +=  1 
        } else {
          prodDetails.quantity = 1 
            cart.push(prodDetails)
          }
      };
 
    return <td className={txtstyle.tdLeft}>
    <tr>
      <h1>
        <td>
          {edit.s === "name" ? (
            <span>
              <input
                type="text"
                name="name"
                onChange={InputHandler}
              />
              <button onClick={SendCange}>OK</button>
            </span>
          ) : (
            details.name
          )}
        </td>
      </h1>
      <td>
        {edit.e ? (
          <button name="name" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>
    <tr>
      <h4>
      <td>
        {edit.s === "description" ? (
          <span>
            <input
              type="text"
              name="description"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.description
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="description" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
          )}
      </td>
          </h4>
      </tr>
       <tr>
      <td>
        Ropa de:
        {edit.s === "gender" ? (
          <span>
            <input
              type="text"
              name="gender"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.gender
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="gender" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>

       <tr>
      <td>
        Categoria:
        {edit.s === "category" ? (
          <span>
            <input
              type="text"
              name="category"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.category
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="category" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>

    <tr>
      <td>
       $
        {edit.s === "price" ? (
          <span>
            <input
              type="text"
              name="price"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.price
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="price" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>
    <tr>
      <td>
        Stock:
        {edit.s === "stock" ? (
          <span>
            <input
              type="text"
              name="stock"
              onChange={InputHandler}
            />
            <button onClick={SendCange}>OK</button>
          </span>
        ) : (
          details.stock
        )}
      </td>
      <td>
        {edit.e ? (
          <button name="stock" onClick={EditionPDetail}>
            {" "}
            ✍{" "}
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>
    <tr>Vendedor: {details.userid}</tr>
    {/* <tr>Disponible: NYI</tr> */}
      <div>
        <button as={BsFillCartPlusFill} w={8} h={8} className={txtstyle.buttonCart} onClick={handleCart} title="Agregar al carrito"> Agregar al carrito</button>
        <button as={BsFillHeartFill} w={8} h={8} className={txtstyle.buttonFavourites} title="Agregar a favoritos">Agregar a favoritos</button>
      </div>
      <Review/>
  </td>
}