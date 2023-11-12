import React from "react";

import styles from "./Card.module.scss";

const CardItem = (props) => {
  return <div className={styles.item}>{props.children}</div>;
};

export default CardItem;
