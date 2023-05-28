import React from "react";
import style1 from "./Header.module.css";
import logo from "../assets/image/logo_ignite.png";

export const Header = () => {
  return (
    <header className={style1.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};
