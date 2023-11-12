import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cartSlice";

import styles from "./Cart.module.scss";

import Card from "../Card/Card";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart ? cart.items : [];
  const totalAmount = cart ? cart.totalAmount : 0;

  const addToCartHandler = (itemId) => {
    dispatch(cartAction.addItems({ id: itemId, quantity: 1 }));
  };

  const removeFromCartHandler = (itemId) => {
    dispatch(cartAction.removeFromCart({ id: itemId, quantity: 1 }));
  };

  return (
    <div className={styles.container}>
      <Card>
        <div>
          <h2>Корзина</h2>
          {cartItems.length === 0 ? (
            <p>Ваша корзина пуста.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <li>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <p>Количество: {item.quantity}</p>
                  </li>
                  <div className={styles.buttons}>
                    <button
                      onClick={() => addToCartHandler(item.id)}
                      className={styles.button}
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        removeFromCartHandler(item.id, item.quantity)
                      }
                      className={styles.button}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          )}
          <p>Общая сумма: ${Math.max(0, totalAmount).toFixed(2)}</p>
        </div>
      </Card>
    </div>
  );
};

export default Cart;
