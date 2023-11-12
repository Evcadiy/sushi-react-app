import React from "react";

import styles from "./Home.module.scss";

import MealList from "../Meal/MealList";

const Home = () => {
  return (
    <div className={styles.container}>
      <MealList />
    </div>
  );
};

export default Home;
