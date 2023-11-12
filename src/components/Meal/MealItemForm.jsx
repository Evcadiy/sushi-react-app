import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import styles from "./MealItemForm.module.scss";

import Input from "./Input";
import { cartAction } from "../store/cartSlice";

const MealItemForm = ({ name, description, price, id }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = (e) => {
    e.preventDefault();

    const item = {
      id,
      name,
      description,
      price,
      quantity,
    };

    dispatch(cartAction.addToCart(item));
  };

  const formChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  return (
    <form className={styles.form}>
      <Input
        label="Количество"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          step: 1,
          value: quantity,
          onChange: formChange,
        }}
      />
      <button onClick={addToCartHandler}>Добавить</button>
    </form>
  );
};

export default MealItemForm;
