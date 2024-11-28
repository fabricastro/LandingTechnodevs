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
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark2">
      {/* Encabezado */}
      <div className="fade-in-animation 2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-bgDark2 pt-8 lg:pt-14 mx-auto lg:flex-row flex-col">
        <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
          <span className="block-subtitle text-center">
            El trabajo que nos respalda
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
            className={`filter-button ${
              selectedCategory === category.id ? "active" : ""
            } bg-primaryColor text-white py-2 px-4 rounded-md hover:bg-bgDark2 transition duration-300 ease-in-out`}
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
          <div
            key={project.id}
            className="bg-bgDark2 border border-gray-600 rounded-lg overflow-hidden shadow-lg project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
