// import React from "react";
// import pic from "../assets/pic.jpg";
// import resume from "../doc/Jeevan_Jyoti_Resume.pdf";

// export default function AboutMe() {
//   const handleResume = () => {
//     fetch("Jeevan_Jyoti_Resume.pdf").then((res) => {
//       res.blob().then((blob) => {
//         const fileURL = window.URL.createObjectURL(blob);
//         let file = document.createElement("a");
//         file.href = fileURL;
//         file.download = "Jeevan_Jyoti_Resume.pdf";
//         file.click();
//         window.open("Jeevan_Jyoti_Resume.pdf", "_blank");
//       });
//     });
//   };

//   return (
//     <div id="about" className="about section">
//       <section id="about__section" className="about__section">
//         <div className="about__section__left">
//           <div className="about__section__left__content">
//             <img
//               src={pic}
//               alt="img"
//               className="about__section__left__content__img home-img"
//             />
//           </div>
//         </div>
//         <div className="about__section__right">
//           <div className="home__section__sub__heading">
//             Let me introduce myself
//           </div>
//           <div
//             className="home__section__heading"
//             style={{
//               marginBottom: -20,
//             }}
//           >
//             About me
//           </div>

//           <div
//             id="user-detail-intro"
//             className="home__section__info"
//             style={{
//               marginBottom: 0,
//               marginTop: 20,
//             }}
//           >
//             I am a passionate full-stack web developer with expertise in React,
//             Node.js, and a strong background in building scalable and
//             high-performance web applications. My skills include HTML, CSS,
//             JavaScript, ReactJS, MongoDB, ExpressJS, NodeJS, Typescript, and
//             Rest API. I am experienced in using tools such as Visual Studio
//             Code, GitHub Desktop, Windows Terminal, Netlify,Postman,
//             Thunder-client and Git. With my knowledge and proficiency in these
//             technologies, I strive to create dynamic and efficient web
//             solutions.
//           </div>
//           {/* <div
//             id="user-detail-intro"
//             className="home__section__info"
//             style={{
//               marginBottom: 0,
//               marginTop: 20,
//             }}
//           >
//             🦄{" "}
//             <span id="user-detail-intro" class="project-tech-stack">
//               Skills:
//             </span>{" "}
//             HTML, CSS, JavaScript, Bootstrap, MUI, ReactJS, NextJS, MongoDB,
//             ExpressJS, NodeJS, Typescript, Rest API
//           </div>
//           <div
//             className="home__section__info"
//             style={{
//               marginTop: 20,
//             }}
//           >
//             💼 <span id="user-detail-intro">Tools:</span> Visual Studio Code,
//             GitHub Desktop, Windows Terminal, Netlify, and Git.
//           </div> */}

//           <div>
//             <button id="resume-button-2" color={"white"} onClick={handleResume}>
//               <a id="resume-link-2">Download CV</a>
//             </button>
//           </div>
//           {/* <a
//             id="resume-link-2"
//             href={resume}
//             title="Download CV"
//             target="_blank"
//             rel="noreferrer"
//             download
//           >
//             <button id="resume-button-2" className="myBtn">
//               Resume
//             </button>
//           </a> */}
//         </div>
//       </section>
//     </div>
//   );
// }
// const handleResume = () => {
//   fetch("Jeevan_Jyoti_Resume.pdf").then((res) => {
//     res.blob().then((blob) => {
//       const fileURL = window.URL.createObjectURL(blob);
//       let file = document.createElement("a");
//       file.href = fileURL;
//       file.download = "Jeevan_Jyoti_Resume.pdf";
//       file.click();
//       window.open("Jeevan_Jyoti_Resume.pdf", "_blank");
//     });
//   });
// };

import React from "react";
import pic from "../assets/pic.jpg";
import resume from "../doc/Jeevan_Jyoti_Resume.pdf";

export default function AboutMe() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1nEB8S5t7fqTs45deJKYAxwlhmOsADxqD/view?usp=sharing"
    );
    const link = document.createElement("a");
    link.href = resume;
    link.target = "_blank";
    link.download = "Jeevan_Jyoti_Resume.pdf";
    link.click();
  };

  // const handleClick = () => {
  //   let resume_redirect = window.open(
  //     "https://drive.google.com/file/d/1nEB8S5t7fqTs45deJKYAxwlhmOsADxqD/view?usp=sharing"
  //   );
  // };

  return (
    <div id="about" className="about section">
      <section id="about__section" className="about__section">
        <div className="about__section__left">
          <div className="about__section__left__content">
            <img
              src={pic}
              alt="img"
              className="about__section__left__content__img home-img"
            />
          </div>
        </div>
        <div className="about__section__right">
          <div className="home__section__sub__heading">
            Let me introduce myself
          </div>
          <div
            className="home__section__heading"
            style={{
              marginBottom: -20,
            }}
          >
            About me
          </div>

          <div
            id="user-detail-intro"
            className="home__section__info"
            style={{
              marginBottom: 0,
              marginTop: 20,
            }}
          >
            I am a passionate full-stack web developer with expertise in React,
            Node.js, and a strong background in building scalable and
            high-performance web applications. My skills include HTML, CSS,
            JavaScript, ReactJS, MongoDB, ExpressJS, NodeJS, Typescript, and
            Rest API. I am experienced in using tools such as Visual Studio
            Code, GitHub Desktop, Windows Terminal, Netlify,Postman,
            Thunder-client and Git. With my knowledge and proficiency in these
            technologies, I strive to create dynamic and efficient web
            solutions.
          </div>
          <br />

          {/* <a id="resume-link-2">
            <button id="resume-button-2" color={"white"} onClick={handleResume}>
              Download CV
            </button>
          </a> */}

          <button
            id="resume-button-2"
            className="resume-button"
            onClick={handleClick}
          >
            Download Resume
          </button>
          {/* <a
            id="resume-link-2"
            href={resume}
            // className="home_section_button"
            title="Download CV"
            target="_blank"
            rel="noreferrer"
            download
          >
            <button id="resume-button-2" className="myBtn">
              Resume
            </button>
          </a> */}
          {/* <div id="resume-button-2" onClick={handleClick}>
            <a
              id="resume-link-2"
              className="resume-button"
              href="../doc/Jeevan_Jyoti_Resume.pdf"
              download
            >
              Resume
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}
