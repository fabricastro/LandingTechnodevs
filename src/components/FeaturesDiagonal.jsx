import React, { useState, useEffect } from "react";
import { fetchProjectsWithCategories } from "../service/ProjectsService";

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const categories = [
    { id: "All", name: "Todo" },
    { id: "10", name: "Desarrollo Web" },
    { id: "12", name: "Diseño" },
  ];

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchProjectsWithCategories();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  // Update filtered projects when selectedCategory or projects change
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.categories.includes(parseInt(selectedCategory))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);

  return (
    <section className="lg:mb-16 w-full relative flex flex-col justify-center items-center bg-[url('./noise-text.png')] bg-secondary-900 bg-opacity-30">

      {/* Decoradores */}
      <div>
        <div className="w-32 h-[1px] absolute bg-greenPrimary left-0 top-12 opacity-100"></div>
        <div className="w-2 h-2 absolute rounded-full bg-greenPrimary left-32 top-[45px] opacity-100"></div>
      </div>
      <div>
        <div className="w-48 h-[1px] absolute bg-greenPrimary left-0 top-16 opacity-100"></div>
        <div className="w-2 h-2 absolute rounded-full bg-greenPrimary left-48 top-[60px] opacity-100"></div>
      </div>

      {/* Encabezado */}
      <div className="fade-in-animation 2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center pt-8 lg:pt-14 mx-auto lg:flex-row flex-col">
        <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
          <span className="text-center text-xs text-secondary-400 tracking-wider font-bold uppercase">
            EL TRABAJO NOS RESPALDA
          </span>
          <h2 className="mt-10 mb-8 text-4xl lg:text-5xl block-big-title text-center">
            Proyectos
          </h2>
        </div>
      </div>

      {/* Selector de categoría */}
      <div className="w-full max-w-screen-lg px-4 mb-8 flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-button ${selectedCategory === category.id ? "active" : ""
              } bg-gradient-to-br from-primary-600 to-primary-800 hover:shadow-[0_0_40px_0_rgba(133,177,0,0.5)] text-white py-2 px-4 rounded-md hover:bg-bgDark2 transition-all duration-300 ease-in-out`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Galería de Proyectos */}
      <div
        id="project-gallery"
        className="w-full max-w-screen-lg mx-auto my-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4"
      >
        {filteredProjects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            key={project.id}
            className="backdrop-blur-lg bg-[rgba(3,7,18,0.4)] border hover:cursor-pointer border-gray-600 rounded-lg overflow-hidden shadow-lg project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              {project.description ? (
                <p
                  className="text-secondaryText"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
              ) : (
                <p className="text-secondaryText">Descripción no disponible.</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
