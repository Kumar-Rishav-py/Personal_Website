import React from "react";
import styles from "../styles/My.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./Contact";
import Progress_bar from "./Components/Progress_bar";



const Me = () => {

  
  return (
    <section className={styles["Main"]}>
      <div className={styles["Set"]}>
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
            <div className={styles["content"]}>
            Hi, I am Kumar Rishav, a passionate and skilled student of Electronic and Communication Engineering. With a strong background in programming languages such as C++, C, Python, and web development technologies like HTML5, CSS3, ReactJS, and NextJS, I have also excelled in various extracurricular activities and competitions.
            </div>
          </div>
          <div className={styles["Profile-skills"]}>
            <div>
              <h2>PROFILE</h2>
              <p>
              I am an accomplished undergraduate student in Electronic and Communication Engineering at IIIT Nagpur. He has a passion for programming, with expertise in web and Android development and a track record of success in coding competitions.
              </p>
              <ul className={styles["gg"]}>
                <li>
                  <strong>FULLNAME:</strong>
                  <h3>KUMAR RISHAV</h3>
                </li>
                <li>
                  <strong>COLLEGE:</strong>
                  <h3>Indian Institute of Information Technology, Nagpur</h3>
                </li>
                <li>
                  <strong>E-MAIL:</strong>
                  <h3>krishavbe@gmail.com</h3>
                </li>
              </ul>
            </div>
            <div>
              <h2>SKILLS</h2>
              <p>
                I'm a cell-like independent teamworker, strong in research and
                coding. My areas of expertise are web development and competitive programing. Below are highlights of my
                technical skills:
                <p>Primary: C++, C, Python, HTML5, CSS3, ReactJS, NextJS, TypeScript, MongoDB.</p>
              </p>
              
            </div>
          </div>
        </div>
        <div className={styles["button"]}>
          <a href="https://www.linkedin.com/in/kumar-rishav-507bab233/"> <button type="submit">Open to Work</button></a>
           <a href="http://"> <button type="submit">Download CV</button></a>
           
        </div>

      </div>
    </section>
    // <section className={styles["body"]}>
    //   <div className={styles["about"]}>
    //     <h3 className={styles["h3"]}>about </h3>
    //     <h1 className={styles["h1"]}>Let Me introduce myself</h1>

    //   </div>
    //   <div className={styles["desc"]}>
    //     <div>
    //         <img src="myself.jpg" alt="Per"
    //         style={{
    //             height: "10rem",
    //             width: "10rem",
    //             border: "3px solid #F06000",
    //             borderRadius: "50%",
    //             float: "left",
    //             marginLeft: "17rem"

    //         }}
    //         />
    //     </div>
    //     <div className={styles["lead"]}>

    //     <p>
    //    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem in at, quibusdam voluptate quo cumque id aliquam dicta! Nostrum iure beatae veritatis eligendi officiis corporis tenetur laudantium asperiores, magnam exercitationem itaque, maiores aperiam voluptas deserunt doloribus provident, laborum praesentium?.
    //     </p>
    //     </div>
    //   </div>
    //   <div className={styles["intro"]}>
    //         <div className={styles["profile"]}>
    //             <h3 className={styles["h31"]}>PROFILE</h3>
    //             <div className={styles["para1"]}>
    //                 <p>
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ab aut illo impedit architecto iusto tenetur, rem quis totam sequi.
    //             </p>
    //             <ul className={styles["gg"]}>
    //                 <li>
    //                     <strong>FULL NAME:</strong>
    //                     <p>KUMAR RISHAV</p>
    //                 </li>
    //                 <li>
    //                     <strong>COLLEGE:</strong>
    //                     <p>Indian Institute of Information Technology, Nagpur</p>
    //                 </li><li>
    //                     <strong>E-MAIL:</strong>
    //                     <p>krishavbe@gmail.com</p>
    //                 </li>

    //             </ul>
    //             </div>

    //         </div>
    //         <div className={styles["profile"]}>
    //         <h3 className={styles["h31"]}>SKILLS</h3>
    //         <div className={styles["para1"]}>
    //         <p>
    //         I'm a cell-like independent teamworker, strong in research and coding. My areas of expertise are computer science, bioinformatics, and genetics. Below are highlights of my technical skills:

    //         </p>
    //         <ul className={styles["gg"]}>
    //                 <li>
    //                     <strong>CODECHEF:</strong>
    //                     <span>4 star</span>
    //                 </li>
    //                 <li>
    //                     <strong>CODEForces:</strong>
    //                     <span>pupil</span>
    //                 </li>
    //                 <li>
    //                     <strong>Kickstart:</strong>
    //                     <span>3 star</span>
    //                 </li>
    //                 </ul>
    //         </div>
    //         </div>
    //   </div>
    // </section>
  );
};

export default Me;
