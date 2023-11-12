import React from "react";

import styles from "./MealItem.module.scss";
import CardItem from "../Card/CardItem";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  return (
    <CardItem>
      <li className={styles.list}>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
        <div>
          <MealItemForm
            id={props.id}
            name={props.name}
            description={props.description}
            price={props.price}
          />
        </div>
      </li>
    </CardItem>
  );
};

export default MealItem;
