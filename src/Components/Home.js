import React from "react";
import AdicionarPonto from "./AdicionarPonto/AdicionarPonto";

import styles from "./Home.module.css";
const Home = () => {
  return (
    <section className={styles.home}>
      <AdicionarPonto />
    </section>
  );
};

export default Home;
