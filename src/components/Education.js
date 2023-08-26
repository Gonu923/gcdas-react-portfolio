import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc(Engineering) in Computer Science and Engineering',
      institution: 'Sylhet International University, Sylhet, Bangladesh',
      date: '02/2016 - 12/2019',
      gpa: 'GPA: 3.76 (Out of 4)',
      coursework: 'Completed coursework in Structured Programming Language, Object Oriented Programming Language, Data Structures, Algorithms, Web Engineering and Database Systems'
    },
    {
      degree: 'Higher Secondary Certificate (Group Science)',
      institution: 'SAARC International College Bangladesh, Sylhet, Bangladesh',
      date: '01/2013 - 12/2014',
      gpa: 'GPA: 4.17 (Out of 5)'
    },
    {
      degree: 'Secondary Certificate (Group Science)',
      institution: 'Pathantulla B/L High School, Sylhet, Bangladesh',
      date: '01/2011 - 12/2012',
      gpa: 'GPA: 4.81 (Out of 5)'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-content">
        <h2>Education</h2>
        {educationData.map((education, index) => (
          <div className="education-item" key={index}>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <p>{education.date}</p>
            <p>{education.gpa}</p>
            {education.coursework && <p>{education.coursework}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
