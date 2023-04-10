import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CardUser.module.css";
import { useDispatch } from "react-redux";

import { useColorMode, Icon, Alert, AlertIcon } from "@chakra-ui/react";
import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";

export const CardUser = ({
  id,
  name,
  birthdate,
  address,
  username,
  email,
  image,
}) => {
  const [isBlock, setIsBlock] = React.useState(false);
  const dispatch = useDispatch();
  const { toggleColorMode, colorMode } = useColorMode();
  const currentTheme = useColorMode().colorMode;

  const handleBlock = () => {
    if (isBlock) {
      setIsBlock(false);
      //props.deleteCharacter(props.id);
    } else {
      setIsBlock(true);
      //props.addCharacter(props);
      //console.log(props.myFavorites);
      // console.log(props);
    }
  };

  return (
    <div>
      <li
        className={
          currentTheme === "dark" ? styles.cardDarkTheme : styles.cardLightTheme
        }
      >
        <div key={id}>
          {isBlock ? (
            <button onClick={() => handleBlock()}>🚫</button>
          ) : (
            <button onClick={() => handleBlock()}>✅</button>
          )}
          <Link to={`/UserDetail/${id}`}>
            <img
              className={styles.imgCenter}
              src={image}
              alt={name}
              width="200px"
              height="200px"
            />
          </Link>
          <Link>
            <h1 className={styles.textMedium}>{name}</h1>
            <h2 className={styles.textMedium}> {username}</h2>
            <h3 className={styles.textSmall}> {email}</h3>
            <h3 className={styles.textSmall}> {address}</h3>
            <h3 className={styles.textSmall}> {birthdate}</h3>
          </Link>
        </div>
      </li>
    </div>
  );
};
