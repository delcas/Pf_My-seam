import React, { useState } from 'react'
import styles from './CartProducts.module.css';

export const CartProducts = ({ cart, totalPrice, setTotalPrice, quantity, setQuantity, el }) => {
  
  const findProduct = cart.find(e => e.id == el.id)
  const [itemsPerCart, setItemsPerCart] = useState(findProduct.quantity)
  
  const addQuantity = () => {
      setTotalPrice(totalPrice + findProduct.price)
      setQuantity(quantity + 1)
      findProduct.quantity += 1
      setItemsPerCart(itemsPerCart + 1)
  }

  const reduceQuantity = () => {
    if (itemsPerCart > 1) {
      setTotalPrice(totalPrice - findProduct.price)
      setQuantity(quantity - 1)
      findProduct.quantity -= 1
      setItemsPerCart(itemsPerCart - 1)
    }
  }

  const handleDeleteItem = () => {
    const indexProduct = cart.findIndex(e => e.id == el.id)
    cart.splice(indexProduct, 1)
    // Recalcular total de dinero y Cantidad de productos
    let totalPrice = 0
    let totalQuantity = 0

    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity
      totalQuantity += cart[i].quantity
    } 
    setTotalPrice(totalPrice)
    setQuantity(totalQuantity)
  }

  return (
    <div className={styles.containerMain}>
        <li className={styles.containerCartItems}>          
            {/* Elementos de la card */}
            <div className={styles.containerLeft}>
              <img className={styles.imgCenter} src={el.image[0]} alt={el.name} width='200px' height='200px'/>
            </div>

            <div className={styles.cartMiddle}>
              <h1 className={styles.textBig}>{el.name}</h1>
              <div className={styles.quantity}>
                <button className={styles.buttonLess} onClick={reduceQuantity}>-</button>
                <p>{itemsPerCart}</p>
                <button onClick={addQuantity}>+</button>
              </div>
            </div>

            <div className={styles.cartRight}>
              <h2 className={styles.textMedium}> <b>${el.price}</b></h2>
              <button className={styles.buttonDeleteItem} onClick={handleDeleteItem}><b>X</b></button>
            </div>
        </li>                      
    </div>
  )
}