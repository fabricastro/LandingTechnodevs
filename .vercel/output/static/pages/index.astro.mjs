import '../chunks/page-ssr_BzXtKxRH.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_MIQXHXPB.mjs';
import 'kleur/colors';
import { b as $$Image, c as getFileUrl, a as getBlogPosts, $ as $$Layout } from '../chunks/BlogService_IC66CNDG.mjs';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const feature1 = new Proxy({"src":"/_astro/image-innovation-2048x2048.C0QX8cGE.webp","width":2048,"height":2048,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/image-innovation-2048x2048.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/image-innovation-2048x2048.webp");
							return target[name];
						}
					});

const feature2 = new Proxy({"src":"/_astro/cohete.XlRvI90A.webp","width":500,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/cohete.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/cohete.webp");
							return target[name];
						}
					});

const feature3 = new Proxy({"src":"/_astro/pc-ia.CpSV-7Wb.webp","width":500,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/pc-ia.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/pc-ia.webp");
							return target[name];
						}
					});

const feature4 = new Proxy({"src":"/_astro/code.pca36vOD.webp","width":4500,"height":4500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/code.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/code.webp");
							return target[name];
						}
					});

const $$NetIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" class="text-6xl icon-bg" data-astro-cid-45rx5ufn="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1"> <stop offset="0%" stop-color="#818cf8"></stop> <stop offset="50%" stop-color="#c7d2fe"></stop> <stop offset="100%" stop-color="#bcee22"></stop> </linearGradient> </defs> <g></g><path fill="url(#gradient)" d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"></path></svg>`;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/Icons/NetIcon.astro", void 0);

const $$ScreenIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-6xl text-primaryText" data-astro-cid-45rx5ufn="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1"> <stop offset="0%" stop-color="#818cf8"></stop> <stop offset="50%" stop-color="#c7d2fe"></stop> <stop offset="100%" stop-color="#bcee22"></stop> </linearGradient> </defs> <g id="Monitor"><path fill="url(#gradient)" d="M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5v8.88a2.507,2.507,0,0,0,2.5,2.5h2.91l-.37,3H7a.5.5,0,0,0,0,1h10.01a.5.5,0,0,0,0-1H15.9l-.37-3h2.91a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM14.9,19.94H9.115l.37-3h5.03Zm5.04-5.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z"></path></g></svg>`;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/Icons/ScreenIcon.astro", void 0);

const $$ImageIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-6xl text-primaryText" data-astro-cid-45rx5ufn="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1"> <stop offset="0%" stop-color="#818cf8"></stop> <stop offset="50%" stop-color="#c7d2fe"></stop> <stop offset="100%" stop-color="#bcee22"></stop> </linearGradient> </defs> <path fill="url(#gradient)" d="M400 421.3V154.7c0-23.5-19.2-42.7-42.7-42.7H90.7C67.2 112 48 131.2 48 154.7v266.7c0 23.5 19.2 42.7 42.7 42.7h266.7c23.4-.1 42.6-19.3 42.6-42.8zM157.3 304l45.3 64 66.7-96 88 128H90.7l66.6-96z"></path><path fill="url(#gradient)" d="M421.3 48H154.7C131.2 48 112 67.2 112 90.7V96h261.3c23.5 0 42.7 19.2 42.7 42.7V400h5.3c23.5 0 42.7-19.2 42.7-42.7V90.7c0-23.5-19.2-42.7-42.7-42.7z"></path></svg>`;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/Icons/ImageIcon.astro", void 0);

const $$Features1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full section-with-glow pt-7 md:pt-[12vw] lg:pt-16 z-20 relative" data-astro-cid-45rx5ufn> <div class="w-screen flex justify-center relative" data-astro-cid-45rx5ufn> <!--     <div class="mt-[-80px]">
      <MetalCard></MetalCard>
    </div> --> <div class="w-11/12  sm:w-4/5 lg:w-[90%] xl:w-[80%] 2xl:w-[1200px] mx-auto lg:grid gap-0 lg:gap-3 xl:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10 rounded-xl lg:mt-[-150px] xl:mt-[-250px]" id="features" data-astro-cid-45rx5ufn> <div class="feature-card hover:cursor-pointer p-6 flex flex-col items-center gap-6 rounded-t-xl lg:rounded-3xl backdrop-blur-lg duration-300 ease-in-out lg:min-h-[350px] shadow-[0_0_50px_0_rgba(200,200,200,0.1)] bg-[#03041f] lg:bg-[rgba(200,200,200,0.2)] relative cursor-pointer transition opacity-0 transform translate-y-10 lg:border-[1px] lg:border-white/20" data-astro-cid-45rx5ufn> ${renderComponent($$result, "NetIcon", $$NetIcon, { "data-astro-cid-45rx5ufn": true })} <h4 class="gradient-text text-2xl font-semibold text-center custom-shadow" data-astro-cid-45rx5ufn>
Desarrollo web
</h4> <p class="text-primaryText text-center text-base hidden lg:flex" data-astro-cid-45rx5ufn>
Diseñamos sitios web modernos, rápidos y seguros. Nuestros desarrollos están optimizados para destacar en buscadores y ofrecer experiencias excepcionales a tus usuarios.
</p> </div> <div class="feature-card hover:cursor-pointer p-6 flex flex-col items-center gap-6 lg:rounded-3xl lg:mt-12 backdrop-blur-lg duration-300 ease-in-out lg:min-h-[350px] lg:h-full shadow-[0_0_50px_0_rgba(200,200,200,0.1)] bg-[#03041f] lg:bg-[rgba(200,200,200,0.2)] relative cursor-pointer transition opacity-0 transform translate-y-10 lg:border-[1px] lg:border-white/20" data-astro-cid-45rx5ufn> ${renderComponent($$result, "ScreenIcon", $$ScreenIcon, { "data-astro-cid-45rx5ufn": true })} <h4 class="gradient-text text-2xl font-semibold text-center custom-shadow" data-astro-cid-45rx5ufn>
Aplicaciones a Medida
</h4> <p class="text-primaryText text-center text-base hidden lg:flex" data-astro-cid-45rx5ufn>
Creamos software personalizado que se adapta a las necesidades específicas de tu negocio. Automatiza procesos, mejora la productividad y lleva tu empresa al siguiente nivel con nuestras aplicaciones web.
</p> </div> <div class="feature-card hover:cursor-pointer p-6 flex flex-col items-center gap-6 rounded-b-3xl lg:rounded-3xl backdrop-blur-lg duration-300 ease-in-out lg:min-h-[350px] shadow-[0_0_50px_0_rgba(200,200,200,0.1)] bg-[#03041f] lg:bg-[rgba(200,200,200,0.2)] relative cursor-pointer transition opacity-0 transform translate-y-10 lg:border-[1px] lg:border-white/20" data-astro-cid-45rx5ufn> ${renderComponent($$result, "ImageIcon", $$ImageIcon, { "data-astro-cid-45rx5ufn": true })} <h4 class="gradient-text text-2xl font-semibold text-center custom-shadow" data-astro-cid-45rx5ufn>
Gestión de Redes Sociales
</h4> <p class="text-primaryText text-center text-base hidden lg:flex" data-astro-cid-45rx5ufn>
Impulsa tu marca con estrategias efectivas en redes sociales. Aumenta tu visibilidad, conecta con tu audiencia y genera un impacto auténtico que convierta seguidores en clientes.
</p> </div> </div> </div> <div class="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 py-28 xl:pt-[100px]" id="about" data-astro-cid-45rx5ufn> <div class="w-full lg:w-1/2 mb-12 mt-10 lg:mt-32 lg:mb-0" data-astro-cid-45rx5ufn> <div class="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset" data-astro-cid-45rx5ufn> <span class="block-subtitle" data-astro-cid-45rx5ufn>Abrazando la Innovación</span> <h2 class="mt-6 mb-8 text-4xl lg:text-4xl block-big-title" data-astro-cid-45rx5ufn>
Expertos en Transformación Digital
</h2> <p class="mb-10 text-secondaryText leading-loose" data-astro-cid-45rx5ufn>
La vida ha dado un giro hacia la digitalización, creando una inteligencia artificial más avanzada de lo que jamás imaginamos. Los canales de venta han cambiado, las relaciones se han transformado, el trabajo se ha redefinido y la tecnología avanza a pasos agigantados. Nada es como antes; la publicidad ya no es lo único.
</p> <p class="mb-10 text-secondaryText leading-loose" data-astro-cid-45rx5ufn>
En este nuevo escenario, surge Technodevs, estamos aquí para ayudarte a explorar las infinitas oportunidades del universo digital, construir una identidad visual poderosa y destacar entre las demás empresas. Somos únicos y nuestra forma de trabajar también lo es. No solo seguimos tendencias, las creamos, siempre enfocados en generar un impacto significativo.
</p> <div class="flex flex-col items-center lg:items-start max-w-[40rem] gap-10 lg:gap-2 self-end sm:gap-4 sm:self-auto  custom-shadow z-20 h-full justify-center" data-astro-cid-45rx5ufn> <a href="https://wa.me/+5492646270803" target="_blank" class="relative w-[200px] h-[50px] rounded-full p-[2px] bg-gradient-to-r from-primaryColor to-secondary-200 bg-[length:200%_200%] bg-[0%_0%] hover:bg-[100%_0%] transition-all duration-200 ease-out" data-astro-cid-45rx5ufn> <span class="flex items-center justify-center w-full h-full bg-[#03041f] text-white rounded-full" data-astro-cid-45rx5ufn>
Contáctanos
</span> </a> </div> </div> </div> <div class="hidden w-3/4 mx-auto lg:w-1/2 lg:flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8" data-astro-cid-45rx5ufn> <div class="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0" data-astro-cid-45rx5ufn> <div class="mb-4 py-3 pl-3 pr-2 rounded" data-astro-cid-45rx5ufn> ${renderComponent($$result, "Image", $$Image, { "src": feature1, "alt": "Mujer iluminada por rayo celeste", "class": "rounded-xl main-border-gray mx-auto sm:mx-unset", "data-astro-cid-45rx5ufn": true })} </div> <div class="py-3 pl-3 pr-2 rounded" data-astro-cid-45rx5ufn> ${renderComponent($$result, "Image", $$Image, { "src": feature2, "alt": "Cohete Despegando", "class": "rounded-xl main-border-gray mx-auto sm:mx-unset", "data-astro-cid-45rx5ufn": true })} </div> </div> <div class="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block" data-astro-cid-45rx5ufn> <div class="mb-4 py-3 pl-3 pr-2 rounded-lg" data-astro-cid-45rx5ufn> ${renderComponent($$result, "Image", $$Image, { "src": feature3, "alt": "Mujer Programando", "class": "rounded-xl main-border-gray", "data-astro-cid-45rx5ufn": true })} </div> <div class="py-3 pl-3 pr-2 rounded-lg" data-astro-cid-45rx5ufn> ${renderComponent($$result, "Image", $$Image, { "src": feature4, "alt": "Codigo de programaci\xF3n", "class": "rounded-xl main-border-gray", "data-astro-cid-45rx5ufn": true })} </div> </div> </div> </div> </section>  `;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/Features1.astro", void 0);

const net = new Proxy({"src":"/_astro/net.BZGwM-oh.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/icons/net.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/icons/net.png");
							return target[name];
						}
					});

const dev = new Proxy({"src":"/_astro/develop.Cg4JeVDT.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/icons/develop.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/icons/develop.png");
							return target[name];
						}
					});

const rocket = new Proxy({"src":"/_astro/rocket.GtwW8ml5.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/icons/rocket.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/icons/rocket.png");
							return target[name];
						}
					});

const CONTENT_URL = "http://localhost:3000";
const COLLECTION_NAME = "projects";
const pb = new PocketBase(CONTENT_URL);
const getProjects = async () => {
  const records = await pb.collection(COLLECTION_NAME).getFullList({
    sort: "-created"
  });
  const parsedRecords = records.map((record) => ({
    ...record,
    img: getFileUrl(COLLECTION_NAME, record.id, record.field)
  }));
  return parsedRecords;
};

const SkeletonCard = () => /* @__PURE__ */ jsxs("div", { className: "animate-pulse backdrop-blur-lg bg-[rgba(3,7,18,0.4)] border border-gray-600 rounded-lg overflow-hidden", children: [
  /* @__PURE__ */ jsx("div", { className: "w-full h-48 bg-gray-700" }),
  /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsx("div", { className: "h-6 bg-gray-700 rounded w-3/4 mb-2" }),
    /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-700 rounded w-full mb-1" }),
    /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-700 rounded w-5/6" })
  ] })
] });
const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const categories = [
    { id: "ALL", name: "Todo" },
    { id: "WEB", name: "Web" },
    { id: "DES", name: "Diseño" }
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
      const filtered = projects.filter(
        (project) => project.categories.includes(selectedCategory)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "w-full relative flex flex-col justify-center items-center bg-gradient-to-b from-bgDark2 to-bgDark1 py-12 border-y-[1px] border-bgDark3", children: [
    /* @__PURE__ */ jsxs("div", { className: "hidden lg:block", children: [
      /* @__PURE__ */ jsx("div", { className: "w-32 h-[1px] absolute bg-greenPrimary left-0 top-12 opacity-100" }),
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 absolute rounded-full bg-greenPrimary left-32 top-[45px] opacity-100" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden lg:block", children: [
      /* @__PURE__ */ jsx("div", { className: "w-48 h-[1px] absolute bg-greenPrimary left-0 top-16 opacity-100" }),
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 absolute rounded-full bg-greenPrimary left-48 top-[60px] opacity-100" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full hidden lg:block", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-[1px] absolute bg-greenPrimary right-0 top-32 opacity-100" }),
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 absolute rounded-full bg-greenPrimary right-20 top-[125px] opacity-100" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full hidden lg:block", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-[1px] absolute bg-greenPrimary right-0 top-36 opacity-100" }),
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 absolute rounded-full bg-greenPrimary right-16 top-[141px] opacity-100" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden w-7 opacity-100 absolute md:left-12 top-12 lg:top-auto lg:bottom-12 md:flex gap-3", children: [
      /* @__PURE__ */ jsx("img", { src: net.src, alt: "network icon" }),
      /* @__PURE__ */ jsx("img", { src: rocket.src, alt: "rocket icon" }),
      /* @__PURE__ */ jsx("img", { src: dev.src, alt: "dev icon" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "fade-in-animation 2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center mx-auto lg:flex-row flex-col", children: /* @__PURE__ */ jsxs("div", { className: "w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto", children: [
      /* @__PURE__ */ jsx("span", { className: "text-center text-xs text-white tracking-wider font-bold uppercase", children: "El Trabajo que Habla por Nosotros" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-10 mb-8 text-4xl lg:text-5xl block-big-title text-center", children: "Proyectos" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-screen-lg px-4 mb-8 flex justify-center space-x-4", children: categories.map((category) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `filter-button ${selectedCategory === category.id ? "bg-primary-700" : "bg-[#444]"} px-[1rem] py-[0.5rem] transition-[0.2s] rounded-[0.25rem]  text-white`,
        onClick: () => setSelectedCategory(category.id),
        children: category.name
      },
      category.id
    )) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "project-gallery",
        className: "w-full max-w-screen-lg mx-auto pt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 h-[340px]",
        children: isLoading ? Array.from({ length: 2 }).map((_, index) => /* @__PURE__ */ jsx(SkeletonCard, {}, index)) : filteredProjects.map((project) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: project.url,
            target: "_blank",
            className: "backdrop-blur-lg bg-[rgba(3,7,18,0.4)] group border hover:cursor-pointer border-gray-600 rounded-lg overflow-hidden project-card",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.img,
                  alt: project.title,
                  className: "w-full h-48 object-cover"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: project.title }),
                project.description ? /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-secondaryText",
                    dangerouslySetInnerHTML: { __html: project.description }
                  }
                ) : /* @__PURE__ */ jsx("p", { className: "text-secondaryText", children: "Descripción no disponible." })
              ] })
            ]
          },
          project.id
        ))
      }
    )
  ] });
};

const CheckArrowIcon = () => /* @__PURE__ */ jsx("div", { className: "rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4", children: /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20px",
    height: "20px",
    className: "fill-secondaryColor",
    children: /* @__PURE__ */ jsx("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" })
  }
) });

const plans = [
	{
		type: "web",
		plan: "basic",
		title: "Landing Page",
		price: "$300.000 ARS",
		description: "Desde",
		features: [
			"Diseño limpio y profesional.",
			"Optimización SEO básica para Google.",
			"Llamada a la acción estratégica.",
			"Velocidad de carga optimizada.",
			"Compatible con dispositivos móviles (responsive)."
		],
		badge: "¡Perfecta para campañas publicitarias!"
	},
	{
		type: "web",
		plan: "standard",
		title: "Sitio Institucional",
		price: "$500.000 ARS",
		description: "Desde",
		features: [
			"Hasta 5 secciones personalizadas (Inicio, Nosotros, Servicios, etc.).",
			"Optimización SEO avanzada.",
			"Diseño responsivo y accesible en todos los dispositivos.",
			"Integración de formularios de contacto.",
			"Panel de administración para editar contenido."
		],
		badge: "¡Refleja la identidad de tu empresa con estilo!"
	},
	{
		type: "web",
		plan: "standard",
		title: "Tienda Online",
		price: "$800.000 ARS",
		description: "Desde",
		features: [
			"Catálogo autogestionable de productos.",
			"Integración con pasarelas de pago (Mercado Pago, PayPal, etc.).",
			"Gestión de inventario en tiempo real.",
			"Diseño responsivo para dispositivos móviles.",
			"SEO para productos y categorías."
		],
		badge: "¡Aumenta tus ventas con una tienda 100% funcional!"
	},
	{
		type: "social",
		plan: "basic",
		title: "Manual de Marca",
		price: "Consultar",
		description: "Construye la base de tu identidad visual.",
		features: [
			"Diseño de logotipo y variantes.",
			"Paleta de colores oficial.",
			"Tipografías para impresos y digitales.",
			"Guía de uso para mantener coherencia en tu marca.",
			"Diseños que refuercen tu identidad visual."
		],
		badge: "¡Crea una identidad profesional!"
	},
	{
		type: "social",
		plan: "premium",
		title: "Contenido para Redes Sociales",
		price: "Consultar",
		description: "¡Impulsa tu presencia en redes con estilo!",
		features: [
			"Plantillas gráficas personalizadas.",
			"Optimización para diferentes plataformas (Instagram, Facebook, etc.).",
			"Diseños que refuercen tu identidad visual.",
			"Estrategias de publicación efectivas.",
			"Contenido orientado a resultados."
		],
		badge: "¡Impulsa tu presencia en redes con estilo!"
	},
	{
		type: "other",
		plan: "basic",
		title: "PALTA",
		price: "Consultar",
		description: "Sistema de gestión empresarial.",
		features: [
			"Gestión de clientes y proveedores.",
			"Generación de presupuestos en PDF.",
			"Envío directo de presupuestos por correo electrónico.",
			"Gestión de usuarios con roles específicos.",
			"Soporte técnico continuo."
		],
		badge: "¡Optimiza tu administración en minutos!"
	},
	{
		type: "other",
		plan: "basic",
		title: "Chatbot con IA",
		price: "$120.000 ARS",
		description: "Desde",
		features: [
			"Atención 24/7 con IA avanzada.",
			"Respuestas rápidas y naturales.",
			"Capacitado para resolver preguntas frecuentes.",
			"Soporte para múltiples idiomas.",
			"Automatización avanzada para mejorar eficiencia."
		],
		badge: "¡Reduce tiempos de espera y mejora la experiencia del cliente!"
	},
	{
		type: "other",
		plan: "premium",
		title: "Chatbot Atención Virtual",
		price: "$60.000 ARS",
		description: "Desde",
		features: [
			"Brinda información sobre productos y servicios.",
			"Guía a los usuarios en tiempo real.",
			"Reduce la carga del personal de atención al cliente.",
			"Fácil integración con múltiples plataformas.",
			"Automatización para una atención rápida."
		],
		badge: "¡Agiliza la atención y ahorra recursos!"
	}
];

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-screen flex justify-center bg-gradient-to-b from-bgDark1 to-bgDark2 relative section-with-glow overflow-hidden" data-astro-cid-hkoc4sea> <div class="absolute -top-16" id="pricing" data-astro-cid-hkoc4sea></div> <div class="pb-20 pt-12 2xl:w-[1150px] lg:w-[1050px] md:w-4/5" data-astro-cid-hkoc4sea> <div class="" data-astro-cid-hkoc4sea> <!-- Título y Selector --> <div class="max-w-2xl mx-auto text-center mb-16" data-astro-cid-hkoc4sea> <span class="text-center text-xs text-white tracking-wider font-bold uppercase" data-astro-cid-hkoc4sea>Elige el Plan Ideal para Tu Negocio</span> <h2 class="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText" data-astro-cid-hkoc4sea>
Nuestros planes
</h2> <div class=" flex justify-center items-center mt-12 px-4 flex-col sm:flex-row gap-2 sm:gap-5 w-full" data-astro-cid-hkoc4sea> <button class="toggle-button active w-full max-w-[70%] lg:max-w-48" id="webToggle" data-type="web" data-astro-cid-hkoc4sea>Diseño Web</button> <button class="toggle-button w-full max-w-[70%] lg:max-w-48" id="socialToggle" data-type="social" data-astro-cid-hkoc4sea>Diseño Gráfico
</button> <button class="toggle-button w-full max-w-[70%] lg:max-w-48" id="otherToggle" data-type="other" data-astro-cid-hkoc4sea>Otros Servicios
</button> </div> </div> <!-- Planes --> <div id="plansContainer" class="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-20 mt-10 w-full justify-items-center px-2 sm:px-4" data-astro-cid-hkoc4sea> ${plans.map((plan) => renderTemplate`<a${addAttribute(`https://wa.me/+5492646270803?text=Hola,%20estoy%20interesado%20en%20el%20servicio:%20${encodeURIComponent(
    plan.title
  )}`, "href")} target="_blank" class="plan-card w-full sm:w-[380px] px-3 mb-8 lg:mb-0 block"${addAttribute(plan.type, "data-type")}${addAttribute(plan.plan, "data-plan")} data-astro-cid-hkoc4sea> <div class="py-8 px-5 bg-[rgba(48,49,54,0.7)] flex flex-col justify-start h-full rounded-3xl border-[1px] border-[rgba(255,255,255,0.2)] min-h-[560px]" data-astro-cid-hkoc4sea> <h3 class="text-xl font-bold font-heading text-primaryText text-left" data-astro-cid-hkoc4sea> ${plan.title} </h3> <div class="flex justify-start flex-col" data-astro-cid-hkoc4sea> <p class="text-gray-300 text-left mt-4" data-astro-cid-hkoc4sea>${plan.description}</p> <div class="text-4xl sm:text-4xl font-bold text-primaryText text-left mt-1 mb-10" data-astro-cid-hkoc4sea> ${plan.price} </div> </div> <ul class="mb-2 text-primaryText" data-astro-cid-hkoc4sea> ${plan.features.map((feature, index) => renderTemplate`<li class="mb-3 flex" data-astro-cid-hkoc4sea> ${renderComponent($$result, "CheckArrowIcon", CheckArrowIcon, { "data-astro-cid-hkoc4sea": true })} <span data-astro-cid-hkoc4sea>${feature}</span> </li>`)} </ul> <span class="text-sm mt-auto text-gray-300 text-center w-full self-end place-self-end px-7" data-astro-cid-hkoc4sea> ${plan.badge} </span> </div> </a>`)} </div> <!-- Botón CTA ilustrativo --> <div class="text-center mt-10" data-astro-cid-hkoc4sea> <div class="inline-block px-6 mt-9 text-white text-3xl font-bold rounded-md cursor-default" data-astro-cid-hkoc4sea>
Elige tu plan y contáctanos ahora
</div> </div> </div> </div> </section>  `;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/Pricing.astro", void 0);

const FAQData = [
  {
    question: "¿A medida que trabajan en mi nueva web, puedo ver avances?",
    answer: "¡Por supuesto! En Technodevs mantenemos una comunicación abierta durante todo el proceso. Te compartimos actualizaciones periódicas para que puedas ver los avances y aportar tus comentarios en cada etapa."
  },
  {
    question: "¿En qué área geográfica proveen servicios?",
    answer: "Trabajamos con clientes de cualquier parte del mundo. Gracias a herramientas digitales, podemos colaborar contigo sin importar tu ubicación geográfica."
  },
  {
    question: "¿Realizan modificaciones sobre sitios web existentes?",
    answer: "Sí, realizamos rediseños y mejoras en sitios web ya existentes. Analizamos tu página actual y te proponemos las mejores soluciones para modernizarla, optimizar su rendimiento y adaptarla a tus necesidades."
  },
  {
    question: "¿Cuánto tiempo lleva disponer de mi nueva página web?",
    answer: "El tiempo depende de la complejidad del proyecto. Una landing page puede estar lista en 1-2 semanas, mientras que un sitio más completo puede tomar entre 3 y 6 semanas. Siempre te brindamos un cronograma detallado antes de iniciar."
  },
  {
    question: "Ya tengo una web y quisiera transformarla en autoadministrable… ¿es posible?",
    answer: "¡Claro que sí! Podemos adaptar tu sitio actual a un sistema autoadministrable (como WordPress), para que puedas actualizar su contenido de manera sencilla y sin conocimientos técnicos avanzados."
  }
];
const FAQ = () => /* @__PURE__ */ jsxs("section", { className: "relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute -top-10", id: "FAQ" }),
  /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0.2 },
      children: /* @__PURE__ */ jsx("div", { className: "relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full", children: /* @__PURE__ */ jsxs("div", { className: "md:max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-7 block-subtitle text-center", children: "¿TIENES PREGUNTAS?" }),
        /* @__PURE__ */ jsx("h2", { className: "mb-16 block-big-title text-center text-4xl", children: "Preguntas Frecuentes" }),
        /* @__PURE__ */ jsx("div", { className: "mb-11 flex flex-wrap -m-1", children: FAQData.map((item, index) => /* @__PURE__ */ jsx("div", { className: "w-full p-1 select-none", children: /* @__PURE__ */ jsx(
          FAQBox,
          {
            title: item.question,
            content: item.answer,
            defaultOpen: index === 0
          },
          `${item.question}-${item.answer}`
        ) }, `${item.question}-${index}`)) })
      ] }) })
    }
  )
] });
const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition",
      onClick: () => setIsOpen(!isOpen),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-2  justify-center items-start", children: [
          /* @__PURE__ */ jsx("h3", { className: " content-title pt-3 sm:pt-0 pr-8 sm:pr-0", children: title }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: `text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`,
              children: content
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-4 sm:top-8 sm:right-8", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "28px",
            height: "30px",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: `transition-all duration-200  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"}`,
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M4.16732 12.5L10.0007 6.66667L15.834 12.5",
                stroke: "#4F46E5",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        ) })
      ]
    }
  );
};

const Tacu = new Proxy({"src":"/_astro/tacu.BrMUXp_X.png","width":188,"height":61,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/tacu.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/tacu.png");
							return target[name];
						}
					});

const Domum = new Proxy({"src":"/_astro/domum.C_d5YaTd.svg","width":127,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/domum.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/domum.svg");
							return target[name];
						}
					});

const Titanes = new Proxy({"src":"/_astro/clubDeTitanes.DyK91Okj.png","width":1105,"height":438,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/clubDeTitanes.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/clubDeTitanes.png");
							return target[name];
						}
					});

const Daes = new Proxy({"src":"/_astro/daes.BsNNJ2Go.png","width":1217,"height":272,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/daes.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/daes.png");
							return target[name];
						}
					});

const Gobierno = new Proxy({"src":"/_astro/gobiernoSJ.D12cyxsT.png","width":250,"height":98,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/gobiernoSJ.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/gobiernoSJ.png");
							return target[name];
						}
					});

const DonTomas = new Proxy({"src":"/_astro/dontomas.CjFiq4Gh.png","width":343,"height":116,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/dontomas.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/logos/dontomas.png");
							return target[name];
						}
					});

const VillaDonTomas = new Proxy({"src":"/_astro/VillaDonTomas.2OyGxdRa.webp","width":1784,"height":1786,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/VillaDonTomas.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/VillaDonTomas.webp");
							return target[name];
						}
					});

const TomasCasiva = new Proxy({"src":"/_astro/tomasCasiva.DkjsvdS7.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/tomasCasiva.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/tomasCasiva.png");
							return target[name];
						}
					});

const DomumPNG = new Proxy({"src":"/_astro/Domum.CRfVkehV.png","width":77,"height":77,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/Domum.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/Domum.png");
							return target[name];
						}
					});

const triangle = new Proxy({"src":"/_astro/triangle.DHTNr41A.svg","width":800,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/triangle.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/triangle.svg");
							return target[name];
						}
					});

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  const testimonialsData = [
    {
      customerName: "Daniela",
      customerTitle: "Villa Don Tom\xE1s",
      content: "El equipo de Technodevs transform\xF3 mi sitio web en algo moderno y funcional. Ahora refleja perfectamente mi marca, y mis clientes lo aman. \xA1Fue una experiencia incre\xEDble trabajar con ellos!",
      image: VillaDonTomas
    },
    {
      customerName: "Marcelo Casiva",
      customerTitle: "Web Escritor",
      content: "Desde el primer contacto, el equipo de Technodevs entendi\xF3 lo que quer\xEDa. Dise\xF1aron mi sitio desde cero, y ahora puedo compartir mis relatos de forma profesional y sencilla. \xA1Estoy encantado con el resultado!",
      image: TomasCasiva
    },
    {
      customerName: "Franco",
      customerTitle: "Domum",
      content: "El equipo de Technodevs no solo redise\xF1\xF3 nuestra web, sino que tambi\xE9n tom\xF3 el control de nuestras redes sociales con gran profesionalismo. La imagen renovada y los resultados en interacci\xF3n fueron inmediatos. \xA1Son geniales!",
      image: DomumPNG
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden"> <div class="absolute top-[-100px] left-[-300px] rotate-45 z-[100] hidden lg:block"> ${renderComponent($$result, "Image", $$Image, { "src": triangle, "alt": "triangle", "class": "opacity-50" })} </div> <div class="absolute top-[400px] right-[-200px] rotate-45 z-[100] w-[500px] hidden lg:block"> ${renderComponent($$result, "Image", $$Image, { "src": triangle, "alt": "triangle", "class": "opacity-50" })} </div> <div class="bg-gradient-to-b from-bgDark2 to-bgDark1 w-full py-32 relative overflow-hidden"> <div class="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5 z-[300]"> <div class="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center"> <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"> <div class="flex flex-col"> <h2 class="mb-2 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText z-[300]">
Confían en
</h2> <h2 class="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor z-[300]">
Nuestro trabajo
</h2> </div> </div> <div class="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10"> <div class="grid grid-cols-2 sm:grid-cols-3 gap-10 opacity-80"> <div class="flex justify-start items-start"> ${renderComponent($$result, "Image", $$Image, { "src": Domum, "alt": "Domum", "class": "h-14 w-full object-scale-down" })} </div> <div class="flex justify-start items-start"> ${renderComponent($$result, "Image", $$Image, { "src": Tacu, "alt": "Tacu", "class": "h-14 w-full object-scale-down p-2" })} </div> <div class="flex justify-start items-start"> ${renderComponent($$result, "Image", $$Image, { "src": Titanes, "alt": "Titanes", "class": "h-14 w-full object-scale-down p-2" })} </div> <div class="flex justify-start items-start"> ${renderComponent($$result, "Image", $$Image, { "src": Daes, "alt": "Daes", "class": "h-14 w-full object-scale-down p-2" })} </div> <div class="flex justify-start items-start"> ${renderComponent($$result, "Image", $$Image, { "src": Gobierno, "alt": "Gobierno", "class": "h-14 w-full object-scale-down p-2" })} </div> <div class="flex justify-start items-start"> ${renderComponent($$result, "Image", $$Image, { "src": DonTomas, "alt": "Don Tomas", "class": "h-14 w-full object-scale-down p-2" })} </div> </div> </div> </div> </div> </div> <div class="w-full flex justify-center pt-16 pb-24 bg-bgDark1 relative"> <div class="absolute -top-16" id="feedback"></div> <div class="flex flex-col w-full lg:w-[1150px] justify-center"> <div class="text-center mb-6 text-5xl text-white font-semibold">
Testimonios
</div> <div class="text-center text-xs text-white tracking-wider font-bold uppercase mb-5">
PERSONAS QUE AMAN TECHNODEVS
</div> <div class="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center z-[200]"> ${testimonialsData.map((testimonial, index) => renderTemplate`<div class="w-full sm:w-4/5 md:w-[560px] lg:w-1/3 bg-[#f9f9f9] border-[#e0e0e0] shadow-light rounded-xl p-6 flex flex-col"> <div class="flex mb-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-secondary-500" width="35px"> <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"></path> </svg>${" "} </div> <p class="text-gray-dark text-sm mb-4">${`"${testimonial.content}"`}</p> <div class="flex-center mt-4"> <img${addAttribute(testimonial.image.src, "src")} alt="Customer avatar" class="w-12 h-12 rounded-full mr-4"> <div> <div class="text-gray-800 font-medium"> ${testimonial.customerName} </div> <div class="text-gray-500 text-sm"> ${testimonial.customerTitle} </div> </div> </div> </div>`)} </div> </div> </div> </section>`;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/Brands.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getBlogPosts();
  const visiblePosts = posts.slice(0, 3);
  const showMore = posts.length > 3;
  return renderTemplate`${maybeRenderHead()}<section class="w-full flex justify-center py-16 bg-bgDark1/60 relative section-with-glow overflow-hidden px-4" id="blog" data-astro-cid-b4mpjmb3> <div class="container" data-astro-cid-b4mpjmb3> <div class="justify-center flex flex-col lg:text-left mb-16 mx-auto" data-astro-cid-b4mpjmb3> <h2 class="mt-4 mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText text-center" data-astro-cid-b4mpjmb3>
Nuestro
<span class="text-secondaryColor" data-astro-cid-b4mpjmb3>
Blog
</span> </h2> <p class="text-center text-xs text-white tracking-wider font-bold uppercase" data-astro-cid-b4mpjmb3>
Mantente actualizado con los últimos posteos de nuestro blog
</p> </div> <!-- Responsive grid layout for blog posts --> <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full lg:w-[1150px] mx-auto" data-astro-cid-b4mpjmb3> ${visiblePosts.map((post, index) => renderTemplate`<a${addAttribute(`/posts/${post.id}`, "href")} class="bg-[rgba(48,49,54,0.7)] rounded-3xl flex flex-col border-[1px] border-[rgba(255,255,255,0.2)] max-h-[470px] overflow-hidden text-white" data-astro-cid-b4mpjmb3> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-64 object-cover rounded-t-3xl" data-astro-cid-b4mpjmb3> <div class="p-6" data-astro-cid-b4mpjmb3> <h3 class="text-2xl font-semibold text-primaryText mb-4" data-astro-cid-b4mpjmb3> ${post.title} </h3> <p class="text-white" data-astro-cid-b4mpjmb3>${unescapeHTML(post.subtitle)}</p> </div> </a>`)} </div> <!-- "Ver Más" button --> ${showMore && renderTemplate`<div class="flex justify-center mt-8" data-astro-cid-b4mpjmb3> <a href="/blog" class="bg-primaryText text-white py-2 px-6 rounded-full font-semibold transition hover:bg-primaryTextHover" data-astro-cid-b4mpjmb3>
Ver más
</a> </div>`} </div> </section> `;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/Blog.astro", void 0);

const astronautImage = new Proxy({"src":"/_astro/astronaut.C0chFFwg.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/astronaut.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/assets/images/astronaut.png");
							return target[name];
						}
					});

const $$Starfield = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="starfield" class="absolute inset-0 bg-[#03041f]"> <canvas id="starfield-canvas"></canvas> </div> `;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/starfield.astro", void 0);

const $$Splash = createComponent(($$result, $$props, $$slots) => {
  const widths = [450, 800];
  const sizes = "(min-width: 640px) 42vw, 67vw";
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[100vh] lg:h-full lg:py-10 px-5 md:px-12 lg:px-12 xl:px-28 flex lg:flex-col items-center" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Starfield", $$Starfield, { "data-astro-cid-3egmgwtg": true })} <div class="relative h-full sm:grid-cols-2 flex items-center w-full max-w-[1280px] justify-center" data-astro-cid-3egmgwtg> <div class="flex flex-col items-center lg:items-start max-w-[40rem] gap-10 lg:gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end custom-shadow z-20 h-full justify-center" data-astro-cid-3egmgwtg> <div class="gradient-text text-center lg:text-start font-extrabold w-full tracking-tighter text-6xl md:text-7xl xl:text-8xl" data-astro-cid-3egmgwtg> <span data-astro-cid-3egmgwtg>
Web Design &
<br class="hidden lg:block" data-astro-cid-3egmgwtg> Social Media
</span> </div> <span class="text-center lg:text-start text-lg gradient-text" data-astro-cid-3egmgwtg>
Creamos experiencias digitales únicas con desarrollo web, aplicaciones a
        medida y diseño de alto impacto.
</span> <a href="https://wa.me/+5492646270803" target="_blank" class="relative w-[200px] h-[50px] rounded-full p-[2px] bg-gradient-to-r from-primaryColor to-secondary-200 bg-[length:200%_200%] bg-[0%_0%] hover:bg-[100%_0%] transition-all duration-200 ease-out" data-astro-cid-3egmgwtg> <span class="flex items-center justify-center w-full h-full bg-[#03041f] text-white rounded-full" data-astro-cid-3egmgwtg>
Contáctanos
</span> </a> </div> <div id="astronaut" class="w-2/3 max-w-3xl self-start sm:w-10/12 lg:w-8/12 xl:10/12 sm:self-auto sm:justify-self-start mt-10 hidden lg:block" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": astronautImage, "widths": widths, "sizes": sizes, "loading": "eager", "alt": "A floating astronaut in a space suit", "data-astro-cid-3egmgwtg": true })} </div> </div> <div class="hidden lg:block relative w-screen justify-center mb-[-42px] z-10" data-astro-cid-3egmgwtg> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full custom-shadow" data-astro-cid-3egmgwtg> <path d="M0,0 L600,100 L1200,0 L1200,120 L0,120 Z" class="bg-blackPrimary fill-blackPrimary" filter="url(#dropShadowExternal)" data-astro-cid-3egmgwtg></path> </svg> </div> </section> <noscript> <style>
    #splash-bg-fallback {
      display: block;
    }
  </style> </noscript> `;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/splash.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Desarrollo y Dise\xF1o Web Profesional, Aplicaciones y Estrategias Digitales Argentina" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Splash", $$Splash, {})} ${renderComponent($$result2, "Features1", $$Features1, {})} ${renderComponent($$result2, "FeaturesDiagonal", ProjectGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/FeaturesDiagonal.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Blog", $$Blog, {})} ${renderComponent($$result2, "FAQ", FAQ, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/components/FAQ.jsx", "client:component-export": "FAQ" })} ` })}`;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/pages/index.astro", void 0);

const $$file = "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
