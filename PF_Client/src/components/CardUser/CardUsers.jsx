import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paginado } from '../Paginado/Paginado';
import { Loading } from '../Loading/Loading';
import { getUsers } from '../../redux/actions';
import { CardUser } from './CardUser/CardUser';
import styles from "./CardUsers.module.css"




export const CardUsers =()=>{
     // Estado para actualizar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Estado de los productos que se muestran por página
  const [usersPerPage, setServicesPerPage] = useState(8);

  // Para ejecutar las funciones de las actions
  const dispatch = useDispatch();
  
  // Me traigo los estados del reducer 
  let users = useSelector((state) => state.users);

  // Delimitar el indíce de los productos a paginar
  const lastUserindex = currentPage * usersPerPage;
  const firstUserIndex = lastUserindex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserindex);
  useEffect(() => {
    dispatch(getUsers());

    }, [])

    return(
        <div>
            <ul className={styles.cardContainer}>
            

                {
                    currentUsers.length>0?
                    currentUsers.map((el)=>{ 
                        return(
                            <CardUser
                            
                            id={el.id}
                            image={el.image}
                            key={el.id}
                            name={el.name}
                            birthdate={el.birthdate}
                            address={el.address}
                            username={el.username}
                            email={el.email}
                            />
                        )
                    })
                    :<Loading/>
                }
          
            </ul>
            <Paginado 
       totalProducts={users.length}
       productsPerPage={usersPerPage}
       setCurrentPage={usersPerPage} 
       currentPage={currentPage} 
      />
        </div>
    )
}