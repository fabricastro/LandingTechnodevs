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
    <section className="w-full relative flex flex-col justify-center items-center bg-[url('/noise-text.png')] bg-secondary-950 bg-opacity-40 py-12">

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
      <div className="fade-in-animation 2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center mx-auto lg:flex-row flex-col">
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
            className={`filter-button ${selectedCategory === category.id ? "bg-primary-700" : "bg-[#444]"} px-[1rem] py-[0.5rem] transition-[0.2s] rounded-[0.25rem] bg-primary-700 text-white`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Galería de Proyectos */}
      <div
        id="project-gallery"
        className="w-full max-w-screen-lg mx-auto pt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4"
      >
        {filteredProjects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            key={project.id}
            className="backdrop-blur-lg bg-[rgba(3,7,18,0.4)] group border  hover:cursor-pointer border-gray-600 rounded-lg overflow-hidden project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
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
