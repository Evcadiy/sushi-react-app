import React from "react";

import styles from "./MealList.module.scss";

import MealItem from "./MealItem";
import Card from "../Card/Card";
import DUMMY_MEALS from "../Data/mealsData";

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section>
      <Card>
        <ul className={styles.list}>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
