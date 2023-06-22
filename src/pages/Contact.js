import React from "react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:krishavbe@gmail.com";
      };
  return (
    <div className={styles["Main"]}>
      <div className={styles["set"]}>
        <div className={styles["Section-c"]}>
          <h2>Contact</h2>
          <h1>Id Love To Connect With You</h1>

          <div className={styles["Endpart"]}>
            <div className={styles["part1"]}>
              <FontAwesomeIcon className={styles["icon"]} icon={faEnvelope} />
              <p>Email at me</p>
              <h3 onClick={handleEmailClick}><a href="mailto:krishavbe@gmail.com">krishavbe@gmail.com</a></h3>
            </div>
            <div className={styles["part2"]}>
              <FontAwesomeIcon className={styles["icon"]} icon={faLinkedinIn} />
              <p>Lets Connect</p>
              <h3>
                <a href="https://www.linkedin.com/in/kumar-rishav-507bab233/">
                  Lindedin Profile
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
