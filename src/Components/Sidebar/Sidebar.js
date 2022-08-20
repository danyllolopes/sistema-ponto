import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import relogio from "../../Assets/icons/relogio.svg";
import ponto from "../../Assets/icons/ponto.svg";
import Cadastro from "../Cadastro/Cadastro";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <h1>P.</h1>
      <div className={styles.sidebarContainer}>
        <nav className={styles.sidebarNavegacao}>
          <Link to="/">
            <img src={relogio} alt="Relogio" />
          </Link>
          <Link to="#">
            {" "}
            <img src={ponto} alt="Ponto" />
          </Link>

          <Cadastro />
        </nav>
        <p>DC</p>
      </div>
    </section>
  );
};

export default Sidebar;
