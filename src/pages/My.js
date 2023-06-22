import React from "react";
import styles from "../styles/My.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../pages/Contact";

const Me = () => {
  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/1O-U4wo4vyQ7i_PMosqLYzdIrK3QDHIOD/view?usp=drive_link", "_blank");
  };
  const handleOpenToWork = () => {
    window.location.href = "mailto:krishavbe@gmail.com";
  };
  return (
    <section className={styles.Main}>
      <div className={styles.Set}>
        <div className={styles["Section-B"]}>
          <h2>about</h2>
          <h1>Let me introduce myself</h1>

          <div className={styles["Image-intro"]}>
            <div>
              <img
                src="myself.jpeg"
                alt="#"
                style={{
                  height: "10rem",
                  width: "10rem",
                  border: "3px solid #F06000",
                  borderRadius: "50%",
                  float: "left",
                }}
              />
            </div>
            <div className={styles.content}>
              Hi, I am Kumar Rishav, a passionate and skilled student of
              Electronic and Communication Engineering. With a strong background
              in programming languages such as C++, C, Python, and web
              development technologies like HTML5, CSS3, ReactJS, and NextJS, I
              have also excelled in various extracurricular activities and
              competitions.
            </div>
          </div>
          <div className={styles["Profile-skills"]}>
            <div>
              <h2>PROFILE</h2>
              <p>
                I am an accomplished undergraduate student in Electronic and
                Communication Engineering at IIIT Nagpur. I have a passion for
                programming, with expertise in web and Android development and a
                track record of success in coding competitions.
              </p>
              <div className={styles["gg"]}>
                <strong>FULLNAME:</strong>
                <h3>KUMAR RISHAV</h3>
                <strong>COLLEGE:</strong>
                <h3>Indian Institute of Information Technology, Nagpur</h3>
                <strong>E-MAIL:</strong>
                <h3>krishavbe@gmail.com</h3>
              </div>
            </div>
            <div>
              <h2>SKILLS</h2>
              <p>
                Im a cell-like independent team worker, strong in research and
                coding. My areas of expertise are web development and
                competitive programming. Below are highlights of my technical
                skills:
              </p>
              <p>
                Primary: C++, C, Python, HTML5, CSS3, ReactJS, NextJS,
                TypeScript, MongoDB.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button type="submit" onClick={handleOpenToWork}>Open to Work</button>
          <button type="submit" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Me;
