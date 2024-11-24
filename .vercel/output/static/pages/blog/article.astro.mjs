import { $ as $$Navbar, F as Footer, a as $$Layout } from '../../chunks/Layout_DtOe6bX0.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_MIQXHXPB.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const Article = ({ articleData }) => {
  const { title, subtitle, date, image, content, footer } = articleData;
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center bg-bgDark2 relative pt-2", children: /* @__PURE__ */ jsx("div", { className: "px-2 sm:px-4", children: /* @__PURE__ */ jsxs("article", { className: " p-8 text-center rounded-3xl w-full lg:w-[1200px] 2xl:w-[1400px] mb-24 mt-16 sm:mt-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm text-secondaryText my-4", children: date }),
      /* @__PURE__ */ jsx("h1", { className: "text-[2rem] xs:text-[2.8rem] lg:text-[3.5rem] font-bold text-primaryText mb-4", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-secondaryText mb-4", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: title,
        className: "rounded-3xl mb-8 w-10/12 md:w-3/4 mx-auto mt-8",
        "aria-label": title
      }
    ),
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "text-secondaryText !leading-8 sm:!leading-10 sm:text-xl text-left sm:text-justify mx-auto w-full md:w-10/12 lg:w-2/3 mt-16",
        "aria-labelledby": "content-title",
        dangerouslySetInnerHTML: { __html: content }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "w-4/5 lg:w-2/3 text-right mx-auto mt-8 text-primaryText text-xl", children: footer })
  ] }) }) });
};

const blog1 = new Proxy({"src":"/_astro/blog1.UgsBnp9Y.jpg","width":1792,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/blog1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/assets/images/blog1.jpg");
							return target[name];
						}
					});

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: isVisible && /* @__PURE__ */ jsx(
    "button",
    {
      className: "w-12 h-12 fixed bottom-6 right-6 main-border-gray rounded-xl  bg-bgDark2 hover:bg-bgDark3 cursor-pointer flex justify-center items-center transition z-50",
      onClick: scrollToTop,
      "aria-label": "Scroll to top",
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          width: "35px",
          height: "35px",
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M4.16732 12.5L10.0007 6.66667L15.834 12.5",
              stroke: "rgb(99, 102, 241)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      )
    }
  ) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const articleData = {
    title: "AI and Machine Learning",
    subtitle: "Discover insights and trends in the world of data analytics",
    date: "June 5, 2024",
    image: blog1.src,
    content: `
    <p>AI and Machine Learning are now vital components of contemporary technology. These innovations are revolutionizing industries by offering new insights and automating tasks that were once considered unachievable. In the realms of finance and startups, AI and ML are transforming how businesses analyze data and make strategic decisions.</p>
    <p>In financing, AI is being leveraged to assess credit risk and enhance investment strategies. For startups, machine learning algorithms are instrumental in understanding customer behavior and optimizing operations. The scope of these technologies is extensive and continues to expand as we create more sophisticated algorithms and advanced computational power.</p>
    <p>Stay engaged as we delve deeper into the impact of AI and ML on business analytics and financing in our forthcoming articles.</p><br/>
    <div class="text-white text-2xl mb-4">Machine Learning in Startups</div>
    <p>Startups are increasingly adopting AI and Machine Learning to gain a competitive edge. These technologies help in automating routine tasks, thereby saving time and resources. For instance, AI-powered chatbots enhance customer service by providing instant responses to queries, while ML algorithms analyze large datasets to extract actionable insights.</p>
    <p>By integrating AI and ML, startups can better understand market trends, customer preferences, and operational inefficiencies. This integration not only fosters innovation but also drives growth by enabling data-driven decision-making.</p>
    <p>Join us in our next articles as we uncover more ways AI and ML are revolutionizing the startup ecosystem.</p><br/>
    <div class="text-white text-2xl mb-4">Future Trends in AI</div>
    <p>The future of business analytics is poised to be heavily influenced by advancements in AI and Machine Learning. Predictive analytics, powered by these technologies, will enable businesses to foresee market changes and adapt proactively. This predictive capability is crucial for startups and financial institutions aiming to stay ahead of the curve.</p>
    <p>Moreover, the rise of AI-driven automation will lead to more efficient and accurate data processing, reducing the margin of error and improving overall productivity. As algorithms become more advanced, the potential for AI and ML to uncover hidden patterns and trends will only grow.</p>
    <p>Stay tuned as we continue to explore the evolving landscape of AI and its transformative impact on business analytics and financing.</p>
  `,
    footer: "~ Duncan Idaho"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": articleData.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/Navbar.astro", "client:component-export": "default" })} ${renderComponent($$result2, "Article", Article, { "articleData": articleData })} ${renderComponent($$result2, "Footer", Footer, {})} ${renderComponent($$result2, "ScrollUpButton", ScrollUpButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/components/ScrollUpButton", "client:component-export": "ScrollUpButton" })} ` })}`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/pages/blog/article/index.astro", void 0);

const $$file = "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/pages/blog/article/index.astro";
const $$url = "/blog/article";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
