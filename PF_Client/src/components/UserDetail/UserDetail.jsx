import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import style  from './UserDetail.module.css'
import { NavBar } from "../NavBar/NavBar";
import { getProducts, getServices, getUser } from "../../redux/actions";
import { CardProducts } from "../Card/CardProducts/CardProducts";
import { Loading } from "../Loading/Loading";
import { CardService } from "../CardService/CardService/CardService";

export  function UserDetail(){
    const dispatch = useDispatch()
    
    const user = useSelector(state=>state.user)
    const products = useSelector(state=>state.allProducts)
    const services = useSelector(state=>state.services)
 

    const userProduct= products.filter(e=>e.userid===user.id)
    const userServices= services.filter(e=>e.userid===user.id)


    console.log(userServices);
    useEffect(()=>{
        const urlID = (window.location.href)
        let prodID =urlID.split('/')
        // eslint-disable-next-line
        dispatch(getUser(prodID[prodID.length -1]));
        dispatch(getProducts())
        dispatch(getServices())
    },[dispatch])

    return(
        <div>
            <NavBar/>
            {
                user.length !== 0 ?
                <div className={style.container}>
                    <img className={style.img} src={user.image} alt={user.image}/>
                    <h1 className={style.name}>Nombre: {user.name}</h1>
                    <h3 className={style.h3}>Address: {user.address}</h3>
                    <h3 className={style.h3}>Username: {user.username}</h3>
                    <h3 className={style.h3}>Email: {user.email}</h3>
                    <h3 className={style.h3}>Country: {user.country} </h3>
                    <h3 className={style.h3}>City: {user.city}</h3>
                    <h3 className={style.h3}>isActive: {user.isActive===true?"True":"False"}</h3>
                </div>:
                <div>
                    <h1>Nos encontro el ID</h1>
                </div>
            }
            <h1>Productos de: {user.name}</h1>
            <ul className={style.cardContainer}>
            {
                userProduct.length>=0?(
                    userProduct.map((product)=>{
                        return(

                            <CardProducts
                            id={product.id}
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            />
                        )
                    })
                ):(

                    "No hay productos"
                )
 
            }
            </ul>
            <h1>Servicios de: {user.name}</h1>
            <ul className={style.cardContainer}>
        {userServices.length > 0 ? (
          userServices.map((el) => {
            return (
              <CardService
                id={el.id}
                key={el.id}
                image={el.image}
                name={el.name}
                price={el.price}
                description={el.description}
              />
            );
          })
        ) : (
         "No hay servicios"
        )}
      </ul>

        </div>
    )
}