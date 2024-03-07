import "./proyectos.css";

const Proyectos = () => {
  const proyectos = [
    {
      image: "../assets/images/proyectos/Galleta.png",
      title: "Galletas de la Fortuna",
      description:
        "Aplicación Web que nos trae citas aleatorias",
      techStack: ["HTML", "CSS","ViteJs", "ReactJS"],
      link: "https://entregable1-seven.vercel.app/",
      github: "https://github.com/JhonnyIham/entregable1",
    },
    {
      image: "../assets/images/proyectos/Weather.png",
      title: "Weather App",
      description:
        "Aplicación Web que nos permite ver el estado clima, para eso usaremos una API llamada Open Weather Map",
      techStack: ["HTML", "CSS","ViteJs",  "ReactJS", "Axios", "API"],
      link: "https://entregable2-cyan.vercel.app/",
      github: "https://github.com/JhonnyIham/entregable2",
    },
    {
      image: "../assets/images/proyectos/RickAndMorty.png",
      title: "Rick And Morty",
      description:
        "Aplicación Web que nos permite ver a todos los personajes de la serie de Rick and Morty por su locación",
      techStack: ["HTML", "CSS","ViteJs",  "ReactJS", "Axios", "API"],
      link: "https://entregable3-sage.vercel.app/ ",
      github: "https://github.com/JhonnyIham/entregable3",
    },
    {
      image: "../assets/images/proyectos/CRUDdeUsuarios.png",
      title: "CRUD de Usuarios",
      description:
        "Aplicación Web que nos permite interactuar con una API de Users, a través de, todos los métodos http",
      techStack: ["HTML", "CSS","ViteJs",  "ReactJS", "Axios", "API", "React Hook Form"],
      link: "https://entregable4-coral.vercel.app/",
      github: "https://github.com/JhonnyIham/entregable4",
    },
    {
      image: "../assets/images/proyectos/Pokedex.png",
      title: "Pokedex",
      description:
        "Aplicación Web que nos permite ver la información de nuestros pokemons favoritos, asi como verlos por tipo y nombre",
      techStack: ["HTML", "CSS","ViteJs",  "ReactJS", "Axios", "API", "React Hook Form", "Redux"],
      link: "https://entregable5-ashy.vercel.app/",
      github: "https://github.com/JhonnyIham/entregable5",
    },
  ];

  return (
    <div className="proyectos">
      <h2 className="proyectos-title">Proyectos</h2>
      <p className="proyectos-subtitle">
        Algunas aplicaciones que he desarrollado
      </p>
      <div className="proyectos-grid">
        {proyectos.map((project, index) => (
          <div key={index} className="project-item">
            <div className="proyecDatos">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="link-outline"></ion-icon>
                </a>
                <a
                  href={project.github}
                  className="project-github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </div>
            </div>
            <a href={project.link}         target="_blank">
              <figure className="figureProy">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </figure>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Proyectos;
