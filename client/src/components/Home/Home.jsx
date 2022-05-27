import { useEffect } from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.divHome}>
      <Cards />
    </div>
  );
}

export default Home;
