import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CardUser.module.css";
import { useDispatch } from "react-redux";
import { useColorMode, Icon } from "@chakra-ui/react";
 import { BsFillCartPlusFill, BsFillHeartFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";


export const CardUser = ({
  id,
  name,
  birthdate,
  address,
  username,
  email,
  image,
  isActive,
}) => {
  const [isBlock, setIsBlock] = useState(isActive);
  const dispatch = useDispatch();
  const { toggleColorMode, colorMode } = useColorMode();
  const currentTheme = useColorMode().colorMode;

  const urlBack = "http://localhost:3001/users"

  const handleBlock = async () => {
    try {
      const newBlockStatus = !isBlock;
      const response = await fetch(`${urlBack}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: newBlockStatus }),
      });
      if (!response.ok) {
        throw new Error("Failed to update user status");
      }
      setIsBlock(newBlockStatus);
    } catch (error) {
      console.error(error);
    }
  };
 
  console.log(isBlock);
  //console.log(isBlock)
  return (
    <div>
      <li
        className={
          currentTheme === "dark"
            ? `${styles.cardDarkTheme} ${isBlock ? styles.cardBlocked : ""}`
            : `${styles.cardLightTheme} ${!isBlock ? styles.cardBlocked : ""}`
        }
      >
        <div key={id}>
          {isBlock ? (
            <button onClick={() => handleBlock()}>✅</button>
          ) : (
            <button onClick={() => handleBlock()}>🚫</button>
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

