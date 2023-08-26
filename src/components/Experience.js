import React from 'react';
import './Experience.css';

const experienceData = [
  {
    company: 'Flyte Solutions Limited',
    duration: '1 June 2022 – June 2023',
    address: 'House 11 (Level C1, The Reeve, Rd 33, Dhaka 1212)',
    phone: '+8801793532035',
    website: 'https://flytesolutions.com',
    position: 'Software Engineer',
    responsibilities: [
      "Analyzed solutions and coding fixes for software problems.",
      "Coordinated with project managers to meet development timelines and plan testing.",
      "Conducted full lifecycle software development from planning to deployment and maintenance.",
      "Reviewed and modified unit and integration tests to improve software quality and reliability.",
      "Collaborated with cross-functional team to define features and build powerful and easy-to-use products and customer-facing workflow tools.",
      "Documented technical specifications and project testing methods for future reference.",
      "Introduced automation tools to enhance workflow."
    ]
  },
  {
    company: 'Sylhet ICT Park',
    duration: '1 August 2020 – 30 May 2022',
    address: 'Amborkhana, Sylhet',
    position: 'Software Engineer',
    responsibilities: [
      "Analyzed solutions and coding fixes for software problems.",
      "Coordinated with project managers to meet development timelines and plan testing.",
      "Conducted full lifecycle software development from planning to deployment and maintenance.",
      "Reviewed and modified unit and integration tests to improve software quality and reliability.",
      "Tackled development tasks based on system requirements and documented approaches.",
      "Collaborated with cross-functional team to define features and build powerful and easy-to-use products and customer-facing workflow tools."
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2>Professional Experience</h2>
        {experienceData.map((experience, index) => (
          <div className="experience-item" key={index}>
            <h3>{experience.company}</h3>
            <p>{experience.duration}</p>
            {experience.address && <p>{experience.address}</p>}
            {experience.phone && <p>Phone: {experience.phone}</p>}
            {experience.website && <p>Website: <a href={experience.website} target="_blank" rel="noopener noreferrer">{experience.website}</a></p>}
            <h4>{experience.position}</h4>
            <ul>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
