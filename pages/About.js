import React, { useState, useEffect } from "react";
import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { CSSTransition } from "react-transition-group";

const About = () => {
  const [name, setName] = useState("Kumar Rishav");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setName(name === "Kumar Rishav" ? "Web Developer" : "Kumar Rishav");
    }, 2000);
    return () => clearInterval(intervalId);
  }, [name]);

  return (
    <section className={styles["main"]}>
      <div className={styles["set"]}>
        <div className={styles["section-A"]}>
          <video
            autoPlay
            loop
            muted
            playsInline
            // style={{
            //   position: "absolute",
            //   width: "100%",
            //   left: "50%",
            //   top: "50%",
            //   height: "100%",
            //   objectFit: "cover",
            //   transform: "translate( -50%, -50%)",
            //   zIndex: "-1",
            // }}
          >
            <source src="ppp.mp4" type="video/mp4" />
          </video>

          <div className={styles["content"]}>
            <h3>Hello, it's me</h3>
            <CSSTransition
                in={true}
                timeout={1000}
                classNames="name"
                
            >
                <h1>{name}</h1>
            </CSSTransition>
            
            
            <h4>I built this thing for web</h4>
          </div>
          <div className={styles["social"]}>
            <a href="https://www.linkedin.com/in/kumar-rishav-507bab233/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className={styles["Insta"]} href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/Kumar-Rishav-py">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <div className={styles["line"]}></div>
          </div>
          <div className={styles["email"]}>
            <a href="https://gmail.com">krishavbe@gmail.com</a>
          </div>
          <div className={styles["line2"]}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
