import React, { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import styles from "../Review/Review.module.css";
import { Button } from "@chakra-ui/react";
import Star from "./Stars";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Review = () => {
  const { isAuthenticated } = useAuth0(); // obtener el estado de autenticación actual y la información del usuario
  const [rating, setRating] = useState(0);

  const locationData = window.location.href.split("/");
  let tipo = locationData[locationData.length - 2].slice(0, 7);
  let ratedId = locationData[locationData.length - 1];

  function rate() {
    try {
      alert(
        `Su review de ${rating} estrellas \nfue agregado con exito \nen el ${tipo} con id:${ratedId}`
      );
    } catch (error) {
      alert(error.message);
    }
  }

  // Condiciona la renderizacion del componente si el usuario esta autenticado
  return isAuthenticated ? (
    <table className={styles.review}>
      <tr>
        <td rowSpan={3}>
          <BsEmojiLaughing size={60} />
        </td>
      </tr>
      <tr className={styles.negrita}>
        <h3>Calificaciones</h3>
        <td className={styles.chiquita}>
          Deja tu puntuacion del servicio : {rating}
        </td>
        <td className={styles.star}>
          <Star className={styles.starRat} rating={rating} onRating={(rate) => setRating(rate)} />
          <Link to="/home">
            <Button className={styles.buttonEnviar} colorScheme="orange" onClick={rate}>
              Enviar
            </Button>
          </Link>
        </td>
      </tr>
    </table>
  ) : null; // si el usuario no esta autenticado, no se renderiza nada
};

export default Review;
