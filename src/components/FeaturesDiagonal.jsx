import React, { useState, useEffect } from "react";
import net from "../assets/icons/net.png";
import dev from "../assets/icons/develop.png";
import rocket from "../assets/icons/rocket.png";
import { getProjects } from "../service/ProjectsService";


const SkeletonCard = () => (
  <div className="animate-pulse backdrop-blur-lg bg-[rgba(3,7,18,0.4)] border border-gray-600 rounded-lg overflow-hidden">
    <div className="w-full h-48 bg-gray-700"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
);

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: "ALL", name: "Todo" },
    { id: "WEB", name: "Web" },
    { id: "DES", name: "Diseño" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const data = await getProjects();
      setProjects(data);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === "ALL") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => 
        project.categories.includes(selectedCategory)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);

  return (
    <section id="projects" className="w-full relative flex flex-col justify-center items-center bg-gradient-to-b from-bgDark2 to-bgDark1 py-12 border-y-[1px] border-bgDark3">
      {/* Decoradores */}
      <div className="hidden lg:block">
        <div className="w-32 h-[1px] absolute bg-greenPrimary left-0 top-12 opacity-100"></div>
        <div className="w-2 h-2 absolute rounded-full bg-greenPrimary left-32 top-[45px] opacity-100"></div>
      </div>
      <div className="hidden lg:block">
        <div className="w-48 h-[1px] absolute bg-greenPrimary left-0 top-16 opacity-100"></div>
        <div className="w-2 h-2 absolute rounded-full bg-greenPrimary left-48 top-[60px] opacity-100"></div>
      </div>

      <div className="w-full hidden lg:block">
        <div className="w-20 h-[1px] absolute bg-greenPrimary right-0 top-32 opacity-100"></div>
        <div className="w-2 h-2 absolute rounded-full bg-greenPrimary right-20 top-[125px] opacity-100"></div>
      </div>
      <div className="w-full hidden lg:block">
        <div className="w-16 h-[1px] absolute bg-greenPrimary right-0 top-36 opacity-100"></div>
        <div className="w-2 h-2 absolute rounded-full bg-greenPrimary right-16 top-[141px] opacity-100"></div>
      </div>

      <div className="hidden w-7 opacity-100 absolute md:left-12 top-12 lg:top-auto lg:bottom-12 md:flex gap-3">
        <img src={net.src} alt="network icon" />
        <img src={rocket.src} alt="rocket icon" />
        <img src={dev.src} alt="dev icon" />
      </div>

      {/* Encabezado */}
      <div className="fade-in-animation 2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center mx-auto lg:flex-row flex-col">
        <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
          <span className="text-center text-xs text-white tracking-wider font-bold uppercase">
            El Trabajo que Habla por Nosotros
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
            className={`filter-button ${selectedCategory === category.id ? "bg-primary-700" : "bg-[#444]"
              } px-[1rem] py-[0.5rem] transition-[0.2s] rounded-[0.25rem]  text-white`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Galería de Proyectos */}
      <div
        id="project-gallery"
        className="w-full max-w-screen-lg mx-auto pt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 h-[340px]"
      >
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
          : filteredProjects.map((project) => (
            <a
              href={project.url}
              target="_blank"
              key={project.id}
              className="backdrop-blur-lg bg-[rgba(3,7,18,0.4)] group border hover:cursor-pointer border-gray-600 rounded-lg overflow-hidden project-card"
            >
              <img
                src={project.img}
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
            </a>
          ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
