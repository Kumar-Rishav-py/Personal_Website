import React from "react";
import My from "../pages/My"
import styles from "../styles/Reach.module.css"
import Resume from "../pages/Resume";
import About from "./About";
import Contact from "./Contact";


import Resum from "./Resume";

const index= () => {
  return (
    <div className={styles["mains"]}>
        <About />
        <My />
        {/* <Resum/> */}
        <Contact />
    </div>
    
  );
};

export default index;
