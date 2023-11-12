import React from "react";

import styles from "./Header.module.scss";

import CartButton from "../Cart/CartButton";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <ul>
        <li className={styles.title}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sushi
          </NavLink>
        </li>
        <li>
          <Link to="/cart">
            <CartButton />
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
