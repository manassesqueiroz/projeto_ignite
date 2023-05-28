import { Post } from "./components/Publication.jsx";
import React from "react";
import { Header } from "./components/Header.jsx";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar.jsx";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <Post  />
      </div>
    </div>
  );
}
