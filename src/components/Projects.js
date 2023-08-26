import React from 'react';
import './Projects.css';

const projectsData = [
  {
    name: 'Digiteyes Art',
    description: 'Collaborated on the development of Digiteyes Art...',
    link: 'https://digiteyesart.com/'
  },
  {
    name: 'Gig Homes Blogs',
    description: 'Played a key role in building the Gig Homes Blogs website...',
    link: 'https://gig.homes/blogs'
  },
  {
    name: 'Nanosoma Miracle',
    description: 'Contributed to the development of the Nanosoma Miracle website...',
    link: 'https://nanosomamiracle.com/'
  },
  {
    name: 'PDMC Malaysia',
    description: 'Took part in the creation of the PDMC Malaysia website...',
    link: 'https://pdmc.com.my/'
  },
  {
    name: 'SGFL Organization',
    description: 'Contributed to the development of the SGFL Organization website...',
    link: 'https://sgflorg.online/'
  },
  {
    name: 'Charicenter',
    description: 'Collaborated on the Charicenter website...',
    link: 'https://charicenter.com/'
  },
  {
    name: 'Libido for Men',
    description: 'Contributed to the development of the Libido for Men website...',
    link: 'https://libidoformen.com/'
  },
  {
    name: 'Siyuan Lim Portfolio',
    description: 'Collaborated on the Siyuan Lim Portfolio website...',
    link: 'https://siyuanlim.com/'
  },
  {
    name: 'Fast Anxiety Help',
    description: 'Played a role in the development of the Fast Anxiety Help website...',
    link: 'https://fastanxietyhelp.com/'
  },
  {
    name: 'WSCTSE',
    description: 'Contributed to the WSCTSE website...',
    link: 'https://www.wsctse.com/'
  },
  {
    name: 'ReShade',
    description: 'Collaborated on the ReShade website...',
    link: 'https://www.reshade.net/'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
