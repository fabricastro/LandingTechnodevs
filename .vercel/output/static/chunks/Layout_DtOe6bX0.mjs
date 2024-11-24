import { storyblokInit, apiPlugin } from '@storyblok/js';
/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_MIQXHXPB.mjs';
import 'kleur/colors';
import { BiLogoInstagram } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareBehance } from 'react-icons/fa6';
import { jsx, jsxs } from 'react/jsx-runtime';

const { storyblokApi } = storyblokInit({
            accessToken: "undefined",
            use: [apiPlugin],
            apiOptions: {"region":"us"},
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navbarLinks = [
    { label: "Servicios", href: "/#features", ariaLabel: "Features" },
    { label: "Nosotros", href: "/#about", ariaLabel: "Home" },
    { label: "Planes", href: "/#pricing", ariaLabel: "Pricing" },
    { label: "Blog", href: "/#blog", ariaLabel: "blog" },
    { label: "Contacto", href: "/#FAQ", ariaLabel: "FAQ" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl" aria-label="Main navigation"> <div class="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative"> <a href="/#home" aria-label="Home"> <div class="flex justify-start items-center grow basis-0"> <div> <img src="./logotech@2x-300x61.png" alt="logo" class="w-[60%]"> </div> </div> </a> <div class="hidden lg:flex h-full pl-12 pb-2"> ${navbarLinks.map(({ href, label, ariaLabel }) => renderTemplate`<a class="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${label} </a>`)} </div> <div class="grow basis-0 justify-end hidden lg:flex gap-4"> <a href="https://www.instagram.com/agencia.technodevs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> ${renderComponent($$result, "BiLogoInstagram", BiLogoInstagram, { "className": "text-white text-2xl hover:text-gray-400 transition" })} </a> <a href="https://www.linkedin.com/company/technodevsweb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> ${renderComponent($$result, "FaLinkedin", FaLinkedin, { "className": "text-white text-2xl hover:text-gray-400 transition" })} </a> <a href="https://www.behance.net/technodevs" target="_blank" rel="noopener noreferrer" aria-label="Behance"> ${renderComponent($$result, "FaSquareBehance", FaSquareBehance, { "className": "text-white text-2xl hover:text-gray-400 transition" })} </a> </div> <div id="hamburgerMenu" class="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"> <div class="w-5 h-0.5 bg-gray-500 mb-1"></div> <div class="w-5 h-0.5 bg-gray-500 mb-1"></div> <div class="w-5 h-0.5 bg-gray-500"></div> </div> </div> <!-- Mobile navbar --> <div id="mobileMenu" class="hidden flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-bgDark1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10"> ${navbarLinks.map(({ label, href, ariaLabel }) => renderTemplate`<a class="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${label} </a>`)} <div class="flex gap-4"> <a href="https://www.instagram.com/agencia.technodevs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> ${renderComponent($$result, "BiLogoInstagram", BiLogoInstagram, { "className": "text-white text-2xl hover:text-gray-400 transition" })} </a> <a href="https://www.linkedin.com/company/technodevsweb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> ${renderComponent($$result, "FaLinkedin", FaLinkedin, { "className": "text-white text-2xl hover:text-gray-400 transition" })} </a> <a href="https://www.behance.net/technodevs" target="_blank" rel="noopener noreferrer" aria-label="Behance"> ${renderComponent($$result, "FaSquareBehance", FaSquareBehance, { "className": "text-white text-2xl hover:text-gray-400 transition" })} </a> </div> </div> </nav> `;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/Navbar.astro", void 0);

const FacebookIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512",
    fill: "white",
    className: "h-5 w-5",
    children: /* @__PURE__ */ jsx("path", { d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" })
  }
);

const InstagramIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    fill: "white",
    className: "h-5 w-5",
    children: /* @__PURE__ */ jsx("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" })
  }
);

const TailcastLogo = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "40",
    height: "40",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    className: "fill-primaryColor",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M11.3709 9.59273L8.77816 7L1 14.7782L3.59272 17.3709L11.3709 9.59273Z" }),
      /* @__PURE__ */ jsx("path", { d: "M15.2218 7L23 14.7782L20.424 17.3542L15.2218 12.152L10.0197 17.3542L7.44367 14.7782L15.2218 7Z" })
    ]
  }
);

const TwitterIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    fill: "white",
    className: "h-5 w-5",
    children: /* @__PURE__ */ jsx("path", { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" })
  }
);

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"]
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy"
    ]
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"]
  }
];
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { "aria-label": "Site footer", children: /* @__PURE__ */ jsx("div", { className: "pt-10  lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed ", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/3 mb-16 lg:mb-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center lg:justify-start items-center grow basis-0", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white mr-2 text-6xl", children: /* @__PURE__ */ jsx(TailcastLogo, {}) }),
        /* @__PURE__ */ jsx("div", { className: "text-white font-['Inter'] font-bold text-xl", children: "technodevs" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0", children: [
        "Dashboard images were made using free Dark Admin dashboard that you can find",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://bootstrapious.com/p/bootstrap-4-dark-admin",
            target: "_blank",
            className: "text-gray-100 ml-1.5 ",
            "aria-label": "Dark Admin Dashboard",
            children: "here."
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-36 mx-auto lg:mx-0", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] outlined-button",
            href: "#",
            "aria-label": "Facebook",
            children: /* @__PURE__ */ jsx(FacebookIcon, {})
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button",
            href: "#",
            "aria-label": "Twitter",
            children: /* @__PURE__ */ jsx(TwitterIcon, {})
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button",
            href: "#",
            "aria-label": "Instagram",
            children: /* @__PURE__ */ jsx(InstagramIcon, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 lg:w-auto mb-16 md:mb-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-bold text-primaryText", children: "Products" }),
        /* @__PURE__ */ jsx("ul", { children: footerData[0].items.map((item, index) => /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-gray-400 hover:text-gray-300",
            href: "#",
            "aria-label": item,
            children: item
          }
        ) }, `${item}-${index}`)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 lg:w-auto mb-16 md:mb-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-bold text-primaryText", children: "Important Links" }),
        /* @__PURE__ */ jsx("ul", { children: footerData[1].items.map((item, index) => /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-gray-400 hover:text-gray-300",
            href: "#",
            "aria-label": item,
            children: item
          }
        ) }, `${item}-${index}`)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 lg:w-auto", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-bold text-primaryText", children: "Company" }),
        /* @__PURE__ */ jsx("ul", { children: footerData[2].items.map((item, index) => /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-gray-400 hover:text-gray-300",
            href: "#",
            "aria-label": item,
            children: item
          }
        ) }, `${item}-${index}`)) })
      ] })
    ] })
  ] }) }) }) });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-bgDark2"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicontech.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="Technodevs" content="Creamos sitios web modernos, rápidos y seguros. Diseñados a medida para potenciar tu negocio y ofrecer la mejor experiencia a tus usuarios."><title>${title}</title>${renderHead()}</head> <body class="bg-bgDark2"> <main aria-label="Main content"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, {})} </main>  </body> </html>`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/layouts/Layout.astro", void 0);

export { $$Navbar as $, Footer as F, $$Layout as a };
