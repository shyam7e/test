import React from "react";
import Styles from "../styles/FoodCard.module.css";
import Image from "next/image";

export const FoodCard = ({ image, title, description }) => {
  return (
    <div className={Styles.container}>
      <Image src={image} layout="responsive" />
      <div className={Styles.cardInfo}>
        <span className={Styles.title}>{title}</span>
        <span className={Styles.description}>{description}</span>
      </div>
    </div>
  );
};
