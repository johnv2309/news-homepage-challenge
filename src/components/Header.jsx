import styles from "../styles/Header.module.scss";
import logo from "../assets/images/logo.svg";
import menuOpen from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

export function Header() {
  const [menu, setMenuActive] = useState(false);
  function toggleMenu() {
    setMenuActive(!menu);
  }
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} />
      <nav
        className={
          menu ? `${styles.header__nav} ${styles.active} ` : styles.header__nav
        }
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
      <img
        className={menu ? styles.header__open : styles.header__close}
        src={menu ? menuClose : menuOpen}
        onClick={toggleMenu}
      />
    </header>
  );
}
