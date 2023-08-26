import React from 'react';
import './Skills.css';

const Skills = () => {
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
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li className="skills-item" key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
