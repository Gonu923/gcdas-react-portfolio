import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const skillsList = [
    "Figma, MarvelApp, Whimsical",
    "HTML, CSS, Bootstrap, Tailwind CSS",
    "Vue.js, React.js",
    "C, C++, Java, PHP, JavaScript",
    "Python, MATLAB, Assembly Language",
    "Laravel, WordPress",
    "SQL, Oracle, NoSQL, MS Access, MongoDB",
    "Visual Studio, Netbeans, Sublime, Eclipse",
    "Windows, Linux, Mac",
    "Strong knowledge of software lifecycle",
    "Slack, Zira, Trello, Github, Svelte.js",
    "Good communication skills in English"
  ];

  return (
    <section className="about-me" id="about">
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>
          I'm a seasoned software engineer with a strong background in cloud computing.
          My expertise lies in developing scalable and secure cloud-based solutions.
          I'm passionate about tackling complex challenges and delivering efficient
          software solutions that drive business growth.
        </p>
        <h3>Skills</h3>
        <ul className="skills-list list-group">
          {skillsList.map((skill, index) => (
            <li className="list-group-item" key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
