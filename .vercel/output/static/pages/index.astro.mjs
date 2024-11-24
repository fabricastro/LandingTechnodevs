import { a as $$Layout } from '../chunks/Layout_DtOe6bX0.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, u as unescapeHTML, s as spreadAttributes, b as createAstro } from '../chunks/astro/server_MIQXHXPB.mjs';
import 'kleur/colors';
import { TfiWorld } from 'react-icons/tfi';
import { CiMonitor } from 'react-icons/ci';
import { IoMdPhotos } from 'react-icons/io';
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
/* empty css                                 */
import 'clsx';
import { a as fetchBlogPosts } from '../chunks/BlogService_BYZmnvuv.mjs';
import { A as AstroError, f as NoImageMetadata, F as FailedToFetchRemoteImageDimensions, E as ExpectedImageOptions, g as ExpectedImage, h as ExpectedNotESMImage, r as resolveSrc, i as isRemoteImage, j as isRemotePath, k as isESMImportedImage, l as isLocalService, D as DEFAULT_HASH_PROPS, m as InvalidImageService, n as ImageMissingAlt } from '../chunks/astro/assets-service_Bi2lnJBY.mjs';
import * as mime from 'mrmime';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const feature1 = new Proxy({"src":"/_astro/image-innovation-2048x2048.C0QX8cGE.webp","width":2048,"height":2048,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/image-innovation-2048x2048.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/image-innovation-2048x2048.webp");
							return target[name];
						}
					});

const feature2 = new Proxy({"src":"/_astro/cohete.XlRvI90A.webp","width":500,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/cohete.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/cohete.webp");
							return target[name];
						}
					});

const feature3 = new Proxy({"src":"/_astro/pc-ia.CpSV-7Wb.webp","width":500,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/pc-ia.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/pc-ia.webp");
							return target[name];
						}
					});

const feature4 = new Proxy({"src":"/_astro/code.pca36vOD.webp","width":4500,"height":4500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/code.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/code.webp");
							return target[name];
						}
					});

const $$Features1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-bgDark2 pt-24 mb-8 sm:mb-24 md:pt-[12vw] lg:pt-16"> <div class="w-screen flex justify-center relative"> <div class="w-11/12 sm:w-4/5 lg:w-[90%] xl:w-[80%] 2xl:w-[1200px] mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10 rounded-xl main-border-gray hero-dashboard-border-gradient bg-bgDark1 bg-opacity-50 backdrop-blur-sm mt-[-50px] lg:mt-[-150px] xl:mt-[-250px]" id="features"> <div class="p-4 flex flex-col gap-4 border-primaryText border rounded-xl m-4 bg-blackPrimary"> ${renderComponent($$result, "TfiWorld", TfiWorld, { "className": "text-5xl text-greenPrimary" })} <h4 class="text-greenPrimary text-xl text-left">Desarrollo web</h4> <p class="text-primaryText text-left">
Creamos sitios web modernos, rápidos y seguros. Diseñados a medida
          para potenciar tu negocio y ofrecer la mejor experiencia a tus
          usuarios.
</p> </div> <div class="p-4 flex flex-col gap-4 border-primaryText border rounded-xl m-4 bg-blackPrimary"> ${renderComponent($$result, "CiMonitor", CiMonitor, { "className": "text-5xl text-greenPrimary" })} <h4 class="text-greenPrimary text-xl text-left">Software a Medida</h4> <p class="text-primaryText text-left">
Soluciones de software adaptadas a tus necesidades específicas.
          Optimiza procesos y mejora la eficiencia de tu empresa con nuestras
          aplicaciones a medida.
</p> </div> <div class="p-4 flex flex-col gap-4 border-primaryText border rounded-xl m-4 bg-blackPrimary"> ${renderComponent($$result, "IoMdPhotos", IoMdPhotos, { "className": "text-5xl text-greenPrimary" })} <h4 class="text-greenPrimary text-xl text-left">Redes Sociales</h4> <p class="text-primaryText text-left">
Impulsa tu marca con estrategias de redes sociales efectivas. Aumenta
          tu alcance y conecta con tu audiencia de manera auténtica y
          significativa.
</p> </div> </div> </div> <div class="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 pt-28 xl:pt-[100px]" id="about"> <div class="w-full lg:w-1/2 mb-12 lg:mb-0"> <div class="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset"> <span class="block-subtitle">Embrace Innovation</span> <h2 class="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
Agencia Technodevs
</h2> <p class="mb-10 text-secondaryText leading-loose">
La vida ha dado un giro hacia la digitalización, creando una
          inteligencia artificial más avanzada de lo que jamás imaginamos. Los
          canales de venta han cambiado, las relaciones se han transformado, el
          trabajo se ha redefinido y la tecnología avanza a pasos agigantados.
          Nada es como antes; la publicidad ya no es lo único.
</p> <p class="mb-10 text-secondaryText leading-loose">
En este nuevo escenario, surge Technodevs, estamos aquí para ayudarte
          a explorar las infinitas oportunidades del universo digital, construir
          una identidad visual poderosa y destacar entre las demás empresas.
          Somos únicos y nuestra forma de trabajar también lo es. No solo
          seguimos tendencias, las creamos, siempre enfocados en generar un
          impacto significativo.
</p> <a href="#FAQ" class="w-[210px] h-12 contained-button mr-10">
Contáctanos
</a> </div> </div> <div class="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8"> <div class="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0"> <div class="mb-4 py-3 pl-3 pr-2 rounded"> <img${addAttribute(feature1.src, "src")} alt="Feature image 1" class="rounded-xl main-border-gray mx-auto sm:mx-unset" aria-label="Feature image 1"> </div> <div class="py-3 pl-3 pr-2 rounded"> <img${addAttribute(feature2.src, "src")} alt="Feature image 2" class="rounded-xl main-border-gray mx-auto sm:mx-unset" aria-label="Feature image 2"> </div> </div> <div class="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block"> <div class="mb-4 py-3 pl-3 pr-2 rounded-lg"> <img${addAttribute(feature3.src, "src")} alt="Feature image 3" class="rounded-xl main-border-gray" aria-label="Feature image 3"> </div> <div class="py-3 pl-3 pr-2 rounded-lg"> <img${addAttribute(feature4.src, "src")} alt="Feature image 4" class="rounded-xl main-border-gray" aria-label="Feature image 4"> </div> </div> </div> </div> </section>`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/Features1.astro", void 0);

const QuoteIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    className: "fill-quoteIconColor",
    width: "35px",
    children: /* @__PURE__ */ jsx("path", { d: "M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" })
  }
);

const testimonial1 = new Proxy({"src":"/_astro/testimonial1.SejLjzBe.png","width":46,"height":46,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/testimonial1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/testimonial1.png");
							return target[name];
						}
					});

const testimonial2 = new Proxy({"src":"/_astro/testimonial2.BHlnIVkU.png","width":46,"height":46,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/testimonial2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/testimonial2.png");
							return target[name];
						}
					});

const testimonial3 = new Proxy({"src":"/_astro/testimonial3.BwLG7L0d.png","width":46,"height":46,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/testimonial3.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/testimonial3.png");
							return target[name];
						}
					});

const testimonialsData = [
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content: "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. technodevs has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial1
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content: "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. technodevs has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial2
  },
  {
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content: "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. technodevs has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial3
  }
];
const Testimonials = () => /* @__PURE__ */ jsxs("section", { className: "w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute -top-16", id: "feedback" }),
  /* @__PURE__ */ jsx("div", { className: "flex flex-col w-full lg:w-[1150px] justify-center", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: 0.3 },
      children: [
        /* @__PURE__ */ jsx("div", { className: "block-subtitle text-center mb-6", children: "Testimonials" }),
        /* @__PURE__ */ jsx("div", { className: "block-big-title text-center mb-20 px-8 sm:px-24 md:px-48", children: "People like you love technodevs" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center", children: testimonialsData.map((testimonial, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex mb-2", children: /* @__PURE__ */ jsx(QuoteIcon, {}) }),
              /* @__PURE__ */ jsxs("div", { className: "content-text-white", children: [
                '"',
                testimonial.content,
                '"'
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex mt-4 mb-2 xl:mt-8 xl:mb-4", children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: testimonial.image.src,
                    alt: "Customer avatar",
                    width: "45px",
                    height: "5px",
                    "aria-label": testimonial.customerName
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col ml-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "content-text-white font-medium", children: testimonial.customerName }),
                  /* @__PURE__ */ jsx("div", { className: "content-text-gray", children: testimonial.customerTitle })
                ] })
              ] })
            ]
          },
          `${testimonial.customerName}-${index}`
        )) })
      ]
    }
  ) })
] });

async function fetchProjectsWithCategories() {
    try {
        const response = await fetch(
            `https://technodevs.com.ar/wp-json/wp/v2/posts?categories=10,11,12&per_page=100`
        );

        if (!response.ok) {
            throw new Error(`Error al obtener los proyectos: ${response.status} ${response.statusText}`);
        }

        const posts = await response.json();

        if (!Array.isArray(posts)) {
            throw new Error("La respuesta de la API no es un array");
        }

        // Mapea los proyectos para incluir imágenes y detalles
        const postsWithDetails = await Promise.all(
            posts.map(async (post) => {
                let imageUrl = 'default-image.png';

                // Verifica si hay imagen destacada y obtén su URL
                if (post.featured_media) {
                    const mediaResponse = await fetch(
                        `https://technodevs.com.ar/wp-json/wp/v2/media/${post.featured_media}`
                    );

                    if (mediaResponse.ok) {
                        const media = await mediaResponse.json();
                        imageUrl = media.source_url || imageUrl;
                    } else {
                        console.warn(`Error al obtener la imagen: ${mediaResponse.status} ${mediaResponse.statusText}`);
                    }
                }

                return {
                    id: post.id,
                    title: post.title.rendered,
                    description: post.excerpt.rendered,
                    image: imageUrl,
                    categories: post.categories, // IDs de las categorías asociadas
                };
            })
        );

        return postsWithDetails;
    } catch (error) {
        console.error("Error al obtener los proyectos:", error);
        return [];
    }
}

const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const categories = [
    { id: "All", name: "Todo" },
    { id: "10", name: "Desarrollo Web" },
    { id: "12", name: "Diseño" }
  ];
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchProjectsWithCategories();
      setProjects(data);
    };
    fetchProjects();
  }, []);
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.categories.includes(parseInt(selectedCategory))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projects]);
  return /* @__PURE__ */ jsxs("section", { className: "lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1", children: [
    /* @__PURE__ */ jsx("div", { className: "fade-in-animation 2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-bgDark1 pt-8 lg:pt-14 mx-auto lg:flex-row flex-col", children: /* @__PURE__ */ jsxs("div", { className: "w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto", children: [
      /* @__PURE__ */ jsx("span", { className: "block-subtitle text-center", children: "El trabajo que nos respalda" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-10 mb-8 text-4xl lg:text-5xl block-big-title text-center", children: "Proyectos" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-screen-lg px-4 mb-8 flex justify-center space-x-4", children: categories.map((category) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `filter-button ${selectedCategory === category.id ? "active" : ""} bg-primaryColor text-white py-2 px-4 rounded-md hover:bg-bgDark2 transition duration-300 ease-in-out`,
        onClick: () => setSelectedCategory(category.id),
        children: category.name
      },
      category.id
    )) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "project-gallery",
        className: "w-full max-w-screen-lg mx-auto my-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4",
        children: filteredProjects.map((project) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-bgDark2 border border-gray-600 rounded-lg overflow-hidden shadow-lg project-card",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.image,
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
		title: "Web Básico",
		price: "$500",
		description: "Ideal para iniciar tu presencia web.",
		features: [
			"Responsive web design",
			"SEO optimization",
			"E-commerce functionality",
			"Custom animations",
			"User-friendly interface"
		]
	},
	{
		type: "web",
		plan: "standard",
		title: "Web Estándar",
		price: "$1000",
		description: "Más funciones para tu sitio web.",
		features: [
			"Advanced SEO",
			"Custom CMS integration",
			"Enhanced security",
			"Faster loading times",
			"Support for multiple languages"
		]
	},
	{
		type: "social",
		plan: "basic",
		title: "Redes Básico",
		price: "$300",
		description: "Inicia tu presencia en redes sociales.",
		features: [
			"Content creation",
			"Community management",
			"Analytics and insights",
			"Engagement strategies",
			"Targeted ad campaigns"
		]
	},
	{
		type: "social",
		plan: "premium",
		title: "Redes Premium",
		price: "$1200",
		description: "Obtén una estrategia de redes completa.",
		features: [
			"Full-scale campaign management",
			"Advanced analytics",
			"Custom ad strategies",
			"Multi-platform support",
			"Comprehensive reporting"
		]
	}
];

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-screen flex justify-center bg-bgDark2 relative" data-astro-cid-hkoc4sea> <div class="absolute -top-16" id="pricing" data-astro-cid-hkoc4sea></div> <div class="pb-20 pt-12 bg-bgDark2 2xl:w-[1150px] lg:w-[1050px] md:w-4/5" data-astro-cid-hkoc4sea> <div class="container mx-auto px-4" data-astro-cid-hkoc4sea> <!-- Título y Selector --> <div class="max-w-2xl mx-auto text-center mb-16" data-astro-cid-hkoc4sea> <span class="block-subtitle" data-astro-cid-hkoc4sea>Encontrá el plan que se adapte a vos</span> <h2 class="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText" data-astro-cid-hkoc4sea>
Mira nuestros planes
</h2> <p class="mb-6 text-secondaryText" data-astro-cid-hkoc4sea>Selecciona el plan que se adapte a vos</p> <div class="toggle-wrapper flex justify-center items-center space-x-4" data-astro-cid-hkoc4sea> <button class="toggle-button active" id="webToggle" data-type="web" data-astro-cid-hkoc4sea>Diseño Web</button> <button class="toggle-button" id="socialToggle" data-type="social" data-astro-cid-hkoc4sea>Redes</button> </div> </div> <!-- Planes --> <div id="plansContainer" class="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20" data-astro-cid-hkoc4sea> ${plans.map((plan) => renderTemplate`<div class="plan-card w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0"${addAttribute(plan.type, "data-type")}${addAttribute(plan.plan, "data-plan")} data-astro-cid-hkoc4sea> <div class="p-8 bg-bgDark3 rounded-3xl" data-astro-cid-hkoc4sea> <h3 class="mb-2 text-xl font-bold font-heading text-primaryText text-left" data-astro-cid-hkoc4sea> ${plan.title} </h3> <div class="flex justify-start items-end" data-astro-cid-hkoc4sea> <div class="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2" data-astro-cid-hkoc4sea> ${plan.price} </div> <div class="text-gray-500" data-astro-cid-hkoc4sea>/ proyecto</div> </div> <p class="mt-4 mb-6 text-gray-500 leading-loose text-left" data-astro-cid-hkoc4sea>${plan.description}</p> <ul class="mb-2 text-primaryText" data-astro-cid-hkoc4sea> ${plan.features.map((feature, index) => renderTemplate`<li class="mb-4 flex"${addAttribute(`${plan.plan}-${index}`, "key")} data-astro-cid-hkoc4sea> ${renderComponent($$result, "CheckArrowIcon", CheckArrowIcon, { "data-astro-cid-hkoc4sea": true })} <span data-astro-cid-hkoc4sea>${feature}</span> </li>`)} </ul> </div> </div>`)} </div> </div> </div> </section>  `;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/Pricing.astro", void 0);

const FAQData = [
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations."
  },
  {
    question: "How to claim your 25% discount offer?",
    answer: "To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase."
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund."
  },
  {
    question: "How to get support for the product?",
    answer: "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have"
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
        /* @__PURE__ */ jsx("p", { className: "mb-7 block-subtitle text-center", children: "Have any questions?" }),
        /* @__PURE__ */ jsx("h2", { className: "mb-16 block-big-title text-center", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("div", { className: "mb-11 flex flex-wrap -m-1", children: FAQData.map((item, index) => /* @__PURE__ */ jsx("div", { className: "w-full p-1", children: /* @__PURE__ */ jsx(
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
            className: `transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"}`,
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

const AmazonLogo = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "107",
    height: "32",
    viewBox: "0 0 107 32",
    className: "fill-[rgb(174,178,183)] ",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M65.9419 25.0257C59.7881 29.5759 50.837 32.0001 43.1168 32.0001C32.3009 32.0001 22.6039 28.0094 15.2193 21.3707C14.6599 20.8485 15.1447 20.1399 15.8534 20.5501C23.7974 25.1749 33.6063 27.9348 43.7508 27.9348C50.576 27.9348 58.1098 26.5176 65.0468 23.5711C66.0911 23.1609 66.9489 24.2798 65.9419 25.0257Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M68.5153 22.0793C67.732 21.0723 63.2938 21.5944 61.3171 21.8555C60.7204 21.9301 60.6085 21.4079 61.1679 21.035C64.7111 18.5361 70.4919 19.2821 71.1633 20.1026C71.8346 20.9231 70.9768 26.7413 67.6574 29.5012C67.1353 29.9114 66.6504 29.6877 66.8742 29.1282C67.6201 27.2634 69.2985 23.1235 68.5153 22.0793Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M61.429 3.50582V1.08158C61.429 0.708622 61.6901 0.484844 62.0257 0.484844H72.8416C73.1773 0.484844 73.4756 0.745918 73.4756 1.08158V3.13286C73.4756 3.46853 73.1773 3.91608 72.6551 4.662L67.0607 12.6434C69.1493 12.6061 71.3498 12.9044 73.2146 13.9487C73.6248 14.1725 73.7367 14.5455 73.774 14.8811V17.4545C73.774 17.8275 73.401 18.2378 72.9908 18.014C69.6714 16.2611 65.2332 16.0746 61.5782 18.0513C61.2052 18.2378 60.795 17.8648 60.795 17.4918V15.0303C60.795 14.6573 60.795 13.986 61.2052 13.3893L67.6948 4.10256H62.063C61.7274 4.10256 61.429 3.84149 61.429 3.50582ZM22.0071 18.5361H18.7251C18.4267 18.4988 18.1656 18.275 18.1283 17.9767V1.11888C18.1283 0.783217 18.4267 0.522142 18.7624 0.522142H21.8206C22.1563 0.522142 22.3801 0.783214 22.4174 1.08158V3.28205H22.492C23.2752 1.15617 24.8043 0.149182 26.8183 0.149182C28.8696 0.149182 30.1749 1.15617 31.07 3.28205C31.8533 1.15617 33.6808 0.149182 35.6202 0.149182C37.0001 0.149182 38.492 0.708622 39.4244 2.01398C40.4686 3.43123 40.2449 5.48252 40.2449 7.31002V17.9767C40.2449 18.3123 39.9465 18.5734 39.6108 18.5734H36.3661C36.0304 18.5361 35.7693 18.275 35.7693 17.9767V9.02563C35.7693 8.31701 35.8439 6.5268 35.6948 5.85547C35.4337 4.73659 34.7251 4.40093 33.7554 4.40093C32.9721 4.40093 32.1143 4.92308 31.7787 5.78089C31.443 6.63869 31.4803 8.05594 31.4803 9.02563V17.9767C31.4803 18.3123 31.1819 18.5734 30.8463 18.5734H27.5642C27.2285 18.5361 26.9675 18.275 26.9675 17.9767V9.02563C26.9675 7.16083 27.2658 4.36363 24.9535 4.36363C22.6038 4.36363 22.6784 7.04894 22.6784 9.02563V17.9767C22.6411 18.275 22.3801 18.5361 22.0071 18.5361ZM82.7996 0.149182C87.6854 0.149182 90.3335 4.32634 90.3335 9.65967C90.3335 14.8065 87.4244 18.9091 82.7996 18.9091C78.0258 18.9091 75.415 14.7319 75.415 9.51049C75.3777 4.25175 78.0258 0.149182 82.7996 0.149182ZM82.7996 3.61771C80.3754 3.61771 80.2262 6.93706 80.2262 8.98835C80.2262 11.0396 80.1889 15.4406 82.7624 15.4406C85.2985 15.4406 85.4477 11.8974 85.4477 9.73427C85.4477 8.31702 85.3731 6.6014 84.9628 5.25874C84.5899 4.06527 83.8439 3.61771 82.7996 3.61771ZM96.6365 18.5361H93.3544C93.0188 18.4988 92.7577 18.2378 92.7577 17.9394V1.04428C92.795 0.745916 93.0561 0.484844 93.3917 0.484844H96.45C96.7484 0.484844 96.9721 0.708627 97.0467 0.969699V3.54312H97.1213C98.0537 1.23077 99.3218 0.149182 101.597 0.149182C103.051 0.149182 104.506 0.671322 105.438 2.12587C106.296 3.46852 106.296 5.74358 106.296 7.38461V18.014C106.259 18.3123 105.998 18.5361 105.662 18.5361H102.38C102.082 18.4988 101.821 18.2751 101.783 18.014V8.83915C101.783 6.97435 102.007 4.28904 99.732 4.28904C98.9488 4.28904 98.2029 4.81119 97.8299 5.6317C97.3824 6.67599 97.3078 7.68298 97.3078 8.83915V17.9394C97.2705 18.2751 96.9721 18.5361 96.6365 18.5361ZM52.8136 10.4802C52.8136 11.7483 52.8509 12.8298 52.2169 13.986C51.6948 14.9184 50.8742 15.4779 49.9418 15.4779C48.6738 15.4779 47.9279 14.5082 47.9279 13.0909C47.9279 10.2937 50.4267 9.77155 52.8136 9.77155V10.4802ZM56.133 18.4988C55.9092 18.6853 55.6108 18.7226 55.3498 18.5734C54.2682 17.6783 54.0444 17.2308 53.4477 16.373C51.6575 18.2005 50.3521 18.7599 48.0397 18.7599C45.2798 18.7599 43.1167 17.0443 43.1167 13.6504C43.1167 10.965 44.5712 9.17482 46.6225 8.27971C48.4127 7.4965 50.9115 7.34732 52.8136 7.12354V6.71329C52.8136 5.93007 52.8882 4.99767 52.4034 4.32634C51.9931 3.72961 51.2472 3.46853 50.5759 3.46853C49.3078 3.46853 48.1889 4.10257 47.9279 5.44522C47.8533 5.74359 47.6668 6.04195 47.3684 6.04195L44.1982 5.70629C43.9372 5.6317 43.6388 5.44522 43.7134 5.03496C44.4593 1.15618 47.9278 0 51.0607 0C52.6644 0 54.753 0.410254 56.0211 1.64102C57.6248 3.13286 57.4756 5.14685 57.4756 7.31002V12.4196C57.4756 13.9487 58.1097 14.62 58.7064 15.4779C58.9302 15.7762 58.9675 16.1492 58.7064 16.3357C57.9978 16.8951 56.8043 17.9394 56.133 18.4988ZM9.73671 10.4802C9.73671 11.7483 9.774 12.8298 9.13997 13.986C8.61783 14.9184 7.79731 15.4779 6.86491 15.4779C5.59685 15.4779 4.85093 14.5082 4.85093 13.0909C4.85093 10.2937 7.34976 9.77155 9.73671 9.77155V10.4802ZM13.0188 18.4988C12.795 18.6853 12.4966 18.7226 12.2355 18.5734C11.154 17.6783 10.9302 17.2308 10.3334 16.373C8.54323 18.2005 7.23787 18.7599 4.92552 18.7599C2.16561 18.7599 0.00244141 17.0443 0.00244141 13.6504C0.00244141 10.965 1.45698 9.17482 3.50827 8.27971C5.29848 7.4965 7.79731 7.34732 9.69941 7.12354V6.71329C9.69941 5.93007 9.774 4.99767 9.28915 4.32634C8.8789 3.72961 8.13298 3.46853 7.46165 3.46853C6.19358 3.46853 5.0747 4.10257 4.81363 5.44522C4.73904 5.74359 4.55256 6.04195 4.25419 6.04195L1.08402 5.70629C0.822952 5.6317 0.524588 5.44522 0.59918 5.03496C1.3451 1.15618 4.81363 0 7.9465 0C9.55023 0 11.6388 0.410254 12.9069 1.64102C14.5106 3.13286 14.3614 5.14685 14.3614 7.31002V12.4196C14.3614 13.9487 14.9955 14.62 15.5922 15.4779C15.816 15.7762 15.8533 16.1492 15.5922 16.3357C14.8836 16.8951 13.6901 17.9394 13.0188 18.4988Z"
        }
      )
    ]
  }
);

const DropboxLogo = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "160",
    height: "32",
    viewBox: "0 0 160 32",
    xmlns: "http://www.w3.org/2000/svg",
    className: "fill-[rgb(174,178,183)]",
    children: [
      /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0)", children: [
        /* @__PURE__ */ jsx("path", { d: "M18.4939 5.91688L9.24696 11.8192L18.4939 17.7215L9.24696 23.6238L0 17.6723L9.24696 11.77L0 5.91688L9.24696 0.0145664L18.4939 5.91688ZM9.19778 25.4929L18.4447 19.5906L27.6917 25.4929L18.4447 31.3952L9.19778 25.4929ZM18.4939 17.6723L27.7409 11.77L18.4939 5.91688L27.6917 0.0145664L36.9387 5.91688L27.6917 11.8192L36.9387 17.7215L27.6917 23.6238L18.4939 17.6723Z" }),
        /* @__PURE__ */ jsx("path", { d: "M44.1689 5.91688H51.6452C56.4163 5.91688 60.3511 8.67129 60.3511 14.9671V16.2951C60.3511 22.6401 56.6622 25.4929 51.7928 25.4929H44.1689V5.91688ZM48.3498 9.45827V21.9023H51.5468C54.2521 21.9023 56.0719 20.1316 56.0719 16.1967V15.1638C56.0719 11.229 54.1537 9.45827 51.3993 9.45827H48.3498ZM62.5645 9.65501H65.9091L66.4502 13.344C67.0896 10.8355 68.7127 9.50745 71.6639 9.50745H72.6968V13.7374H70.9753C67.5815 13.7374 66.7453 14.9179 66.7453 18.2626V25.5421H62.6137V9.65501H62.5645ZM73.533 17.9183V17.4756C73.533 12.1635 76.9268 9.26152 81.5503 9.26152C86.2721 9.26152 89.5676 12.1635 89.5676 17.4756V17.9183C89.5676 23.132 86.3705 25.9356 81.5503 25.9356C76.4349 25.8864 73.533 23.132 73.533 17.9183ZM85.3376 17.8691V17.4756C85.3376 14.5244 83.862 12.7537 81.5011 12.7537C79.1894 12.7537 77.6646 14.3769 77.6646 17.4756V17.8691C77.6646 20.7219 79.1402 22.345 81.5011 22.345C83.862 22.2958 85.3376 20.7219 85.3376 17.8691ZM91.7318 9.65501H95.1748L95.5683 12.6554C96.4044 10.6387 98.1751 9.26152 100.782 9.26152C104.815 9.26152 107.471 12.1635 107.471 17.5248V17.9674C107.471 23.1812 104.52 25.9356 100.782 25.9356C98.2735 25.9356 96.552 24.8043 95.7158 22.9844V31.0017H91.6826L91.7318 9.65501ZM103.29 17.8691V17.5248C103.29 14.3769 101.667 12.8029 99.5032 12.8029C97.1914 12.8029 95.6667 14.5736 95.6667 17.5248V17.8199C95.6667 20.6235 97.1422 22.3942 99.454 22.3942C101.815 22.345 103.29 20.8202 103.29 17.8691ZM113.57 22.5909L113.226 25.4929H109.685V4.34293H113.718V12.4586C114.603 10.3928 116.374 9.26152 118.882 9.26152C122.67 9.31071 125.473 11.9176 125.473 17.1805V17.6723C125.473 22.9352 122.817 25.9356 118.784 25.9356C116.128 25.8864 114.407 24.6567 113.57 22.5909ZM121.243 17.6723V17.2788C121.243 14.3769 119.669 12.7537 117.456 12.7537C115.193 12.7537 113.62 14.5736 113.62 17.328V17.6723C113.62 20.6235 115.144 22.345 117.407 22.345C119.817 22.345 121.243 20.8202 121.243 17.6723ZM127.244 17.9183V17.4756C127.244 12.1635 130.638 9.26152 135.261 9.26152C139.983 9.26152 143.279 12.1635 143.279 17.4756V17.9183C143.279 23.132 140.032 25.9356 135.261 25.9356C130.146 25.8864 127.244 23.132 127.244 17.9183ZM139.098 17.8691V17.4756C139.098 14.5244 137.622 12.7537 135.261 12.7537C132.95 12.7537 131.425 14.3769 131.425 17.4756V17.8691C131.425 20.7219 132.9 22.345 135.261 22.345C137.622 22.2958 139.098 20.7219 139.098 17.8691ZM148.689 17.2788L143.131 9.65501H147.902L151.099 14.426L154.346 9.65501H159.067L153.411 17.2297L159.362 25.4929H154.69L151.05 20.23L147.509 25.4929H142.639L148.689 17.2788Z" })
      ] }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0", children: /* @__PURE__ */ jsx("rect", { width: "159.363", height: "32", fill: "white" }) }) })
    ]
  }
);

const NetflixLogo = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "119",
    height: "32",
    viewBox: "0 0 119 32",
    className: "fill-[rgb(174,178,183)] ",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0)", children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16.2725 29.9299C14.4923 30.2426 12.6808 30.3363 10.8068 30.5859L5.09095 13.845V31.3044C3.31072 31.4917 1.68662 31.7416 0 31.9915V0.00852871H4.7476L11.244 18.1554V0.00852871H16.2725V29.9299ZM26.1111 11.721C28.0477 11.721 31.0148 11.6273 32.7951 11.6273V16.6245C30.5774 16.6245 27.9852 16.6245 26.1111 16.7183V24.1519C29.0471 23.9646 31.9831 23.7145 34.9501 23.6208V28.4304L21.1136 29.5238V0.00852871H34.9501V5.00587H26.1111V11.721ZM53.5339 5.00599H48.3492V27.9937C46.6626 27.9937 44.976 27.9937 43.3521 28.056V5.00599H38.1674V0.00852871H53.5341L53.5339 5.00599ZM61.6545 11.3776H68.4947V16.3748H61.6545V27.7126H56.7505V0.00852871H70.7123V5.00587H61.6545V11.3776ZM78.8329 23.3398C81.6752 23.4021 84.5485 23.6211 87.3284 23.777V28.712C82.8621 28.4307 78.3957 28.1499 73.8356 28.056V0.00852871H78.8329V23.3398ZM91.5448 29.0555C93.1377 29.1494 94.8243 29.2431 96.4484 29.4302V0.00852871H91.5448V29.0555ZM118.343 0.00852871L112.003 15.2192L118.343 31.9915C116.469 31.7416 114.595 31.398 112.721 31.0856L109.129 21.8408L105.475 30.3363C103.663 30.0237 101.914 29.9299 100.103 29.6801L106.537 15.0316L100.728 0.00852871H106.1L109.379 8.41032L112.877 0.00852871H118.343Z"
        }
      ) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0", children: /* @__PURE__ */ jsx("rect", { width: "118.343", height: "32", fill: "white" }) }) })
    ]
  }
);

const SlackLogo = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "127",
    height: "32",
    viewBox: "0 0 127 32",
    className: "fill-[rgb(174,178,183)] ",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsxs("g", { clipPath: "url(#clip0)", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M40.458 25.1963L42.0363 21.5289C43.741 22.8037 46.0122 23.4663 48.2531 23.4663C49.9073 23.4663 50.9544 22.829 50.9544 21.8628C50.9291 19.1616 41.0448 21.276 40.9689 14.5027C40.9436 11.0629 43.999 8.41227 48.329 8.41227C50.9038 8.41227 53.4735 9.04964 55.3097 10.5014L53.8327 14.2447C52.1532 13.1723 50.0641 12.4085 48.0761 12.4085C46.7255 12.4085 45.8352 13.0458 45.8352 13.8603C45.8605 16.5109 55.8206 15.0591 55.9218 21.5289C55.9218 25.0446 52.9424 27.5182 48.6629 27.5182C45.5266 27.5131 42.6483 26.7746 40.458 25.1963ZM101.064 20.2036C100.275 21.5795 98.7976 22.5204 97.0878 22.5204C94.5636 22.5204 92.5301 20.4818 92.5301 17.9627C92.5301 15.4436 94.5687 13.405 97.0878 13.405C98.7925 13.405 100.275 14.3459 101.064 15.7218L105.419 13.3038C103.79 10.4003 100.654 8.41227 97.0878 8.41227C91.8118 8.41227 87.5323 12.6918 87.5323 17.9678C87.5323 23.2438 91.8118 27.5232 97.0878 27.5232C100.679 27.5232 103.79 25.5605 105.419 22.6317L101.064 20.2036ZM58.1121 0.485617H63.5652V27.159H58.1121V0.485617ZM107.559 0.485617V27.159H113.012V19.1565L119.482 27.159H126.462L118.232 17.6541L125.85 8.7866H119.173L113.007 16.1467V0.485617H107.559Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M79.7675 20.2542C78.9784 21.5542 77.3495 22.5204 75.5133 22.5204C72.9891 22.5204 70.9556 20.4818 70.9556 17.9627C70.9556 15.4436 72.9942 13.405 75.5133 13.405C77.3495 13.405 78.9784 14.4218 79.7675 15.7471V20.2542ZM79.7675 8.79165V10.9567C78.8772 9.45432 76.6616 8.40721 74.3397 8.40721C69.5493 8.40721 65.7808 12.6361 65.7808 17.9374C65.7808 23.2387 69.5493 27.5182 74.3397 27.5182C76.6565 27.5182 78.8721 26.4761 79.7675 24.9687V27.1337H85.2205V8.79165H79.7675Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.75318 20.2289C6.75318 22.0904 5.25081 23.5928 3.38929 23.5928C1.52776 23.5928 0.0253906 22.0854 0.0253906 20.2289C0.0253906 18.3724 1.52776 16.865 3.38929 16.865H6.75318V20.2289ZM8.4326 20.2289C8.4326 18.3674 9.93497 16.865 11.7965 16.865C13.658 16.865 15.1604 18.3674 15.1604 20.2289V28.6361C15.1604 30.4976 13.658 32 11.7965 32C9.93497 32 8.4326 30.4976 8.4326 28.6361V20.2289Z",
            fill: "#516178"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.7964 6.72779C9.93487 6.72779 8.4325 5.22542 8.4325 3.3639C8.4325 1.50237 9.93487 0 11.7964 0C13.6579 0 15.1603 1.50237 15.1603 3.3639V6.72779H11.7964ZM11.7964 8.4325C13.6579 8.4325 15.1603 9.93487 15.1603 11.7964C15.1603 13.6579 13.6579 15.1603 11.7964 15.1603H3.3639C1.50237 15.1603 0 13.6529 0 11.7964C0 9.93993 1.50237 8.4325 3.3639 8.4325H11.7964Z",
            fill: "#91A1B8"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M25.2724 11.7964C25.2724 9.93487 26.7748 8.4325 28.6363 8.4325C30.4979 8.4325 32.0002 9.93487 32.0002 11.7964C32.0002 13.6579 30.4979 15.1603 28.6363 15.1603H25.2724V11.7964ZM23.593 11.7964C23.593 13.6579 22.0907 15.1603 20.2291 15.1603C18.3676 15.1603 16.8652 13.6579 16.8652 11.7964V3.36389C16.8652 1.50237 18.3676 -9.53674e-07 20.2291 -9.53674e-07C22.0907 -9.53674e-07 23.593 1.50237 23.593 3.36389V11.7964Z",
            fill: "#7989A0"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.2291 25.2722C22.0907 25.2722 23.593 26.7746 23.593 28.6361C23.593 30.4976 22.0907 32 20.2291 32C18.3676 32 16.8652 30.4976 16.8652 28.6361V25.2722H20.2291ZM20.2291 23.5928C18.3676 23.5928 16.8652 22.0904 16.8652 20.2289C16.8652 18.3674 18.3676 16.865 20.2291 16.865H28.6616C30.5232 16.865 32.0255 18.3674 32.0255 20.2289C32.0255 22.0904 30.5232 23.5928 28.6616 23.5928H20.2291Z",
            fill: "#A7B7CE"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0", children: /* @__PURE__ */ jsx("rect", { width: "126.462", height: "32", fill: "white" }) }) })
    ]
  }
);

const SpotifyLogo = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "107",
    height: "32",
    viewBox: "0 0 107 32",
    className: "fill-[rgb(174,178,183)]  lg:ml-2",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0)", children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15.9999 1.90735e-05C7.16359 1.90735e-05 0 7.16341 0 15.9997C0 24.837 7.16359 32 15.9999 32C24.8366 32 31.9998 24.837 31.9998 15.9997C31.9998 7.16398 24.837 0.000782727 15.9997 0.000782727L15.9999 1.90735e-05ZM23.3374 23.0762C23.05 23.5475 22.4359 23.6952 21.9661 23.4081C18.2089 21.1117 13.4798 20.593 7.91043 21.8653C7.37374 21.9883 6.83878 21.6518 6.71651 21.1153C6.59365 20.5787 6.92857 20.0437 7.4666 19.9214C13.5614 18.528 18.7894 19.1278 23.0066 21.7048C23.4766 21.9933 23.6256 22.6066 23.3372 23.0766L23.3374 23.0762ZM25.2957 18.7202C24.9338 19.3074 24.1662 19.4915 23.5798 19.131C19.28 16.4879 12.7234 15.7223 7.63646 17.2665C6.97672 17.4657 6.27993 17.0939 6.0797 16.4354C5.881 15.7756 6.253 15.0802 6.91158 14.8795C12.7223 13.1165 19.9458 13.9705 24.8847 17.0055C25.4713 17.3666 25.6566 18.1346 25.2955 18.7204L25.2957 18.7202ZM25.4638 14.1837C20.3064 11.1208 11.7992 10.8392 6.87583 12.3335C6.08524 12.5733 5.24916 12.1269 5.00957 11.3363C4.76998 10.5454 5.21591 9.70985 6.00709 9.46949C11.6588 7.75379 21.0542 8.08527 26.9912 11.6097C27.7023 12.0318 27.9356 12.9502 27.5141 13.6604C27.0938 14.3715 26.1728 14.6059 25.464 14.1837H25.4638ZM43.5304 14.7706C40.7679 14.1119 40.2761 13.6495 40.2761 12.678C40.2761 11.7601 41.1403 11.1424 42.4253 11.1424C43.6711 11.1424 44.9062 11.6115 46.2013 12.5771C46.2404 12.6063 46.2895 12.618 46.3379 12.6103C46.3862 12.6031 46.429 12.5765 46.4573 12.5366L47.8062 10.6352C47.8616 10.5568 47.8465 10.4489 47.7718 10.3891C46.2305 9.15234 44.4949 8.55107 42.4663 8.55107C39.4834 8.55107 37.3999 10.3411 37.3999 12.9023C37.3999 15.6488 39.1972 16.6212 42.3031 17.3719C44.9466 17.9808 45.3927 18.491 45.3927 19.4029C45.3927 20.4134 44.4905 21.0416 43.0387 21.0416C41.4261 21.0416 40.1109 20.4984 38.6395 19.2242C38.603 19.1927 38.553 19.1784 38.5067 19.1811C38.458 19.1851 38.4135 19.2076 38.3825 19.2449L36.8701 21.0449C36.8067 21.1195 36.8147 21.2311 36.8881 21.2957C38.6 22.824 40.7054 23.6312 42.9775 23.6312C46.1917 23.6312 48.2687 21.875 48.2687 19.1568C48.2745 16.8622 46.9008 15.5916 43.5362 14.7731L43.5304 14.7706ZM55.5404 12.0461C54.1472 12.0461 53.0045 12.5949 52.0622 13.7192V12.4537C52.0622 12.3537 51.9812 12.2723 51.8815 12.2723H49.4078C49.3079 12.2723 49.2271 12.3537 49.2271 12.4537V26.516C49.2271 26.6159 49.3079 26.6973 49.4078 26.6973H51.8815C51.9812 26.6973 52.0622 26.616 52.0622 26.516V22.0771C53.0047 23.1348 54.1476 23.6517 55.5404 23.6517C58.1291 23.6517 60.7497 21.6589 60.7497 17.8496C60.7535 14.0393 58.1322 12.0459 55.5433 12.0459L55.5404 12.0461ZM57.8733 17.8496C57.8733 19.7894 56.6784 21.1431 54.9674 21.1431C53.276 21.1431 52.0001 19.7279 52.0001 17.8496C52.0001 15.9715 53.276 14.5561 54.9674 14.5561C56.6507 14.5559 57.8735 15.9407 57.8735 17.8494L57.8733 17.8496ZM67.4664 12.0461C64.1326 12.0461 61.5208 14.6132 61.5208 17.891C61.5208 21.1331 64.1146 23.6732 67.4255 23.6732C70.7711 23.6732 73.391 21.1148 73.391 17.8496C73.391 14.5956 70.7887 12.0465 67.4662 12.0465L67.4664 12.0461ZM67.4664 21.1623C65.6932 21.1623 64.3563 19.7376 64.3563 17.8486C64.3563 15.9516 65.6469 14.575 67.4255 14.575C69.2102 14.575 70.556 15.9997 70.556 17.8901C70.556 19.7867 69.2568 21.1623 67.4666 21.1623H67.4664ZM80.51 12.2724H77.788V9.48937C77.788 9.38964 77.7074 9.30825 77.6074 9.30825H75.1342C75.0341 9.30825 74.9529 9.38964 74.9529 9.48937V12.2724H73.7635C73.664 12.2724 73.5833 12.3537 73.5833 12.4537V14.5796C73.5833 14.6793 73.664 14.7609 73.7635 14.7609H74.9529V20.2617C74.9529 22.4847 76.0593 23.6117 78.2414 23.6117C79.1287 23.6117 79.8648 23.4285 80.5586 23.0351C80.6149 23.0036 80.6499 22.9428 80.6499 22.8783V20.8538C80.6499 20.7913 80.6174 20.7323 80.5639 20.6996C80.51 20.6658 80.443 20.6641 80.3877 20.6914C79.9112 20.9312 79.4506 21.0418 78.9357 21.0418C78.142 21.0418 77.788 20.6815 77.788 19.8739V14.7619H80.51C80.6099 14.7619 80.6904 14.6805 80.6904 14.5806V12.4548C80.6942 12.3549 80.614 12.2735 80.5127 12.2735L80.51 12.2724ZM89.9942 12.2832V11.9414C89.9942 10.9359 90.3798 10.4875 91.2445 10.4875C91.7602 10.4875 92.1744 10.5899 92.6383 10.7446C92.6954 10.7626 92.755 10.7536 92.8015 10.7194C92.8492 10.6852 92.8762 10.6304 92.8762 10.5723V8.48783C92.8762 8.40815 92.825 8.33766 92.7482 8.31415C92.2581 8.16837 91.631 8.01877 90.6922 8.01877C88.4075 8.01877 87.1998 9.30537 87.1998 11.7381V12.2616H86.0114C85.9117 12.2616 85.8299 12.343 85.8299 12.4428V14.5796C85.8299 14.6793 85.9117 14.7609 86.0114 14.7609H87.1998V23.2456C87.1998 23.3456 87.2804 23.427 87.3802 23.427H89.8538C89.9537 23.427 90.0351 23.3456 90.0351 23.2456V14.7615H92.3447L95.8825 23.2441C95.4809 24.1354 95.086 24.3127 94.5468 24.3127C94.111 24.3127 93.6521 24.1826 93.1828 23.9258C93.1387 23.9016 93.0863 23.8976 93.0388 23.9123C92.9916 23.9289 92.9518 23.964 92.9318 24.0099L92.0934 25.8492C92.0535 25.9362 92.0877 26.0382 92.1714 26.0833C93.0466 26.5573 93.8367 26.7596 94.8132 26.7596C96.6397 26.7596 97.6492 25.9088 98.5392 23.6199L102.831 12.5308C102.852 12.4751 102.846 12.412 102.811 12.3625C102.777 12.3134 102.723 12.2838 102.663 12.2838H100.088C100.01 12.2838 99.9413 12.3329 99.9161 12.4053L97.2782 19.9403L94.3888 12.4004C94.3625 12.3302 94.2948 12.2838 94.2199 12.2838H89.9937L89.9942 12.2832ZM84.4955 12.2724H82.0219C81.922 12.2724 81.8406 12.3537 81.8406 12.4537V23.2457C81.8406 23.3456 81.922 23.427 82.0219 23.427H84.4955C84.5953 23.427 84.6768 23.3456 84.6768 23.2457V12.4544C84.6769 12.4306 84.6722 12.407 84.6631 12.3849C84.654 12.3629 84.6406 12.3429 84.6238 12.326C84.6069 12.3092 84.5869 12.2958 84.5648 12.2867C84.5428 12.2777 84.5192 12.273 84.4953 12.2731L84.4955 12.2724ZM83.2727 7.35849C82.2928 7.35849 81.4976 8.15176 81.4976 9.13171C81.4976 10.1122 82.293 10.9065 83.2728 10.9065C84.2523 10.9065 85.0467 10.1122 85.0467 9.13171C85.0467 8.15195 84.2519 7.35849 83.2737 7.35849H83.2727ZM104.943 15.7422C103.964 15.7422 103.202 14.956 103.202 14.0012C103.202 13.0465 103.974 12.2513 104.952 12.2513C105.931 12.2513 106.693 13.0373 106.693 13.9913C106.693 14.946 105.921 15.7422 104.943 15.7422H104.943ZM104.952 12.4244C104.061 12.4244 103.386 13.1333 103.386 14.0012C103.386 14.8688 104.056 15.5681 104.943 15.5681C105.835 15.5681 106.51 14.8599 106.51 13.9913C106.51 13.1237 105.84 12.4244 104.953 12.4244H104.952ZM105.338 14.1703L105.831 14.8597H105.415L104.972 14.2273H104.591V14.8597H104.243V13.0324H105.058C105.483 13.0324 105.762 13.2496 105.762 13.6153C105.764 13.9149 105.59 14.0979 105.34 14.1703H105.338V14.1703ZM105.044 13.3459H104.591V13.9239H105.044C105.27 13.9239 105.405 13.8132 105.405 13.6346C105.405 13.4466 105.27 13.3459 105.044 13.3459H105.044V13.3459Z"
        }
      ) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0", children: /* @__PURE__ */ jsx("rect", { width: "106.693", height: "32", fill: "white" }) }) })
    ]
  }
);

const StripeLogo = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "77",
    height: "32",
    viewBox: "0 0 77 32",
    className: "fill-[rgb(174,178,183)] ",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0)", children: /* @__PURE__ */ jsx("path", { d: "M5.38008 12.484C5.38008 11.6547 6.06056 11.3356 7.1878 11.3356C8.80383 11.3356 10.8452 11.8249 12.4614 12.6967V7.69928C10.6965 6.99757 8.95275 6.72111 7.1878 6.72111C2.87081 6.72111 0 8.97529 0 12.7393C0 18.6084 8.08074 17.6728 8.08074 20.2035C8.08074 21.1815 7.23026 21.5006 6.03932 21.5006C4.27437 21.5006 2.02019 20.7775 0.233852 19.7993V24.8605C2.21157 25.7111 4.21053 26.0725 6.03932 26.0725C10.4625 26.0725 13.5034 23.8823 13.5034 20.0758C13.4822 13.7387 5.38008 14.8657 5.38008 12.484ZM19.7554 2.46812L14.5667 3.57383L14.5455 20.6073C14.5455 23.7547 16.906 26.0725 20.0532 26.0725C21.7969 26.0725 23.0728 25.7536 23.7745 25.3708V21.0539C23.0942 21.3304 19.7341 22.3086 19.7341 19.1613V11.6121H23.7745V7.08265H19.7341L19.7554 2.46812ZM30.3882 8.65621L30.0478 7.08265H25.4545V25.6897H30.7709V13.0795C32.0254 11.4421 34.1521 11.7398 34.8113 11.9736V7.08265C34.1308 6.82742 31.6428 6.35956 30.3882 8.65621ZM36.1084 7.08265H41.446V25.6897H36.1084V7.08265ZM36.1084 5.46647L41.446 4.31815V0.00130939L36.1084 1.1284V5.46632V5.46647ZM52.5465 6.72111C50.4625 6.72111 49.1228 7.69928 48.3786 8.3799L48.102 7.06142H43.4237V31.8566L48.74 30.7296L48.7614 24.7115C49.5269 25.2645 50.6539 26.0512 52.5253 26.0512C56.3318 26.0512 59.798 22.989 59.798 16.248C59.7768 10.081 56.2679 6.72111 52.5465 6.72111ZM51.2706 21.3729C50.016 21.3729 49.2715 20.9264 48.7614 20.3735L48.74 12.484C49.2929 11.8673 50.0585 11.4421 51.2706 11.4421C53.2057 11.4421 54.5455 13.6111 54.5455 16.3968C54.5455 19.2464 53.227 21.3729 51.2706 21.3729ZM76.555 16.4606C76.555 11.0167 73.9181 6.72111 68.8783 6.72111C63.817 6.72111 60.7548 11.0169 60.7548 16.4182C60.7548 22.8189 64.3701 26.0512 69.5586 26.0512C72.0893 26.0512 74.0031 25.4771 75.4492 24.6691V20.4159C74.0033 21.139 72.3445 21.5856 70.2392 21.5856C68.1764 21.5856 66.3476 20.8626 66.1138 18.3533H76.5126C76.5126 18.0767 76.555 16.971 76.555 16.4606ZM66.0499 14.4405C66.0499 12.0375 67.5173 11.0379 68.8571 11.0379C70.1542 11.0379 71.5365 12.0375 71.5365 14.4405H66.0499Z" }) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0", children: /* @__PURE__ */ jsx("rect", { width: "76.555", height: "32", fill: "white" }) }) })
    ]
  }
);

const Brands = () => /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-24 bg-bgDark1 w-full  lg:mt-16 mb-8 lg:mb-16", children: /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.2 },
    children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5", children: /* @__PURE__ */ jsxs("div", { className: "flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/2 px-4 mb-12 lg:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText", children: "Trusted by brands" }),
        /* @__PURE__ */ jsx("h2", { className: " text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor", children: "all over the world" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap -m-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-1/2 sm:w-1/3 py-6 flex justify-center", children: /* @__PURE__ */ jsx(AmazonLogo, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-1/2 sm:w-1/3 py-6 flex  justify-center", children: /* @__PURE__ */ jsx(DropboxLogo, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-1/2 sm:w-1/3 py-6 flex  justify-center", children: /* @__PURE__ */ jsx(NetflixLogo, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-1/2 sm:w-1/3 py-6 flex justify-center", children: /* @__PURE__ */ jsx(StripeLogo, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-1/2 sm:w-1/3 py-6 flex justify-center", children: /* @__PURE__ */ jsx(SpotifyLogo, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-1/2 sm:w-1/3  py-6 flex  justify-center", children: /* @__PURE__ */ jsx(SlackLogo, {}) })
      ] }) })
    ] }) })
  }
) });

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await fetchBlogPosts();
  const visiblePosts = posts.slice(0, 3);
  const showMore = posts.length > 3;
  return renderTemplate`${maybeRenderHead()}<section class="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative" id="blog"> <div class="container"> <div class="justify-center flex flex-col lg:text-left mb-16 mx-auto"> <span class="text-lg text-secondaryText text-center">Nuestro Blog</span> <h2 class="mt-4 mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText text-center">
Últimos Posteos
</h2> <p class="text-secondaryText max-w-lg mx-auto text-center">
Mantente actualizado con los últimos posteos de nuestro blog
</p> </div> <!-- Responsive grid layout for blog posts --> <div${addAttribute(`grid gap-8 ${posts.length === 1 ? "grid-cols-1 place-items-center" : "sm:grid-cols-2 lg:grid-cols-3"} mx-auto`, "class")}> ${visiblePosts.map((post, index) => renderTemplate`<a${addAttribute(`/posts/${post.id}`, "href")}${addAttribute(`${post.title}-${index}`, "key")} class="bg-bgDark3 rounded-3xl overflow-hidden hover:bg-bgDark3Hover transition cursor-pointer shadow-lg text-white w-full max-w-md"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-64 object-cover rounded-t-3xl"> <div class="p-6"> <h3 class="text-2xl font-semibold text-primaryText mb-4"> ${post.title} </h3> <p class="text-secondaryText leading-relaxed">${unescapeHTML(post.subtitle)}</p> </div> </a>`)} </div> <!-- "Ver Más" button --> ${showMore && renderTemplate`<div class="flex justify-center mt-8"> <a href="/blog" class="bg-primaryText text-white py-2 px-6 rounded-full font-semibold transition hover:bg-primaryTextHover">
Ver más
</a> </div>`} </div> </section>`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/Blog.astro", void 0);

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.includes(type)) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  try {
    const result = lookup(data);
    if (!result.height || !result.width || !result.type) {
      throw new AstroError({
        ...NoImageMetadata,
        message: NoImageMetadata.message(src)
      });
    }
    const { width, height, type, orientation } = result;
    const isPortrait = (orientation || 0) >= 5;
    return {
      width: isPortrait ? height : width,
      height: isPortrait ? width : height,
      format: type,
      orientation
    };
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../chunks/astro/assets-service_Bi2lnJBY.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$1 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/node_modules/astro/components/Image.astro", void 0);

const $$Astro = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const astronautImage = new Proxy({"src":"/_astro/astronaut.C0chFFwg.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/astronaut.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/astronaut.png");
							return target[name];
						}
					});

const moonImage = new Proxy({"src":"/_astro/moon.CJT1Acwy.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/moon.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/moon.jpg");
							return target[name];
						}
					});

const $$HeroImage = createComponent(($$result, $$props, $$slots) => {
  const widths = [450, 800, 1200];
  const sizes = "100vw";
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": moonImage, "widths": widths, "sizes": sizes, "alt": "The ridged surface of the moon" })}`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/hero-image.astro", void 0);

const $$Starfield = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="starfield" class="absolute inset-0"> <canvas id="starfield-canvas"></canvas> </div> `;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/starfield.astro", void 0);

const $$Splash = createComponent(($$result, $$props, $$slots) => {
  const widths = [450, 800];
  const sizes = "(min-width: 640px) 42vw, 67vw";
  return renderTemplate`${maybeRenderHead()}<section class="relative h-full bg-black py-10" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Starfield", $$Starfield, { "data-astro-cid-3egmgwtg": true })} <div id="splash-bg-fallback" class="absolute inset-0 hidden opacity-10" data-astro-cid-3egmgwtg> ${renderComponent($$result, "HeroImage", $$HeroImage, { "data-astro-cid-3egmgwtg": true })} </div> <div class="relative grid h-full place-items-center sm:grid-cols-2" data-astro-cid-3egmgwtg> <h2 class="flex flex-col items-center gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end" data-astro-cid-3egmgwtg> <div class="gradient-text text-center font-extrabold tracking-tighter text-6xl md:text-8xl" data-astro-cid-3egmgwtg>
Web Design &
<br data-astro-cid-3egmgwtg> Social Media
</div> </h2> <div id="astronaut" class="w-2/3 max-w-3xl self-start sm:w-10/12 sm:self-auto sm:justify-self-start" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": astronautImage, "widths": widths, "sizes": sizes, "loading": "eager", "alt": "A floating astronaut in a space suit", "data-astro-cid-3egmgwtg": true })} </div> </div> <div class="relative w-screen justify-center mb-[-42px]" data-astro-cid-3egmgwtg> <div class="" data-astro-cid-3egmgwtg> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full " data-astro-cid-3egmgwtg> <path d="M0,0 L600,100 L1200,0 L1200,120 L0,120 Z" class="bg-bgDark2 fill-bgDark2 border-2 border-white" data-astro-cid-3egmgwtg></path> </svg> </div> </div> </section> <noscript> <style>
        #splash-bg-fallback {
            display: block;
        }
    </style> </noscript> `;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/splash.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Technodevs" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Splash", $$Splash, {})} ${renderComponent($$result2, "Features1", $$Features1, {})}  ${renderComponent($$result2, "FeaturesDiagonal", ProjectGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/FeaturesDiagonal.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "Brands", Brands, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/Brands.jsx", "client:component-export": "Brands" })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/Testimonials.jsx", "client:component-export": "Testimonials" })} ${renderComponent($$result2, "Blog", $$Blog, {})} ${renderComponent($$result2, "FAQ", FAQ, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/FAQ.jsx", "client:component-export": "FAQ" })} ` })}`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/pages/index.astro", void 0);

const $$file = "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
