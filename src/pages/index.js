import React from "react";
import My from "../pages/My"
import styles from "../styles/Reach.module.css"
import About from "../pages/About";
import Contact from "../pages/Contact";



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
