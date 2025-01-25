import './page-ssr_BzXtKxRH.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from './astro/server_MIQXHXPB.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$SubHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SubHeader;
  const post = Astro2.props.post;
  return renderTemplate`${maybeRenderHead()}<div class="text-md bg-gray-800 text-white w-full text-center py-2 flex justify-between"> <div class="container mx-auto px-4 lg:px-32 flex gap-4"> <span>📖Blog</span> <span>/</span> <span>${post.categorie}</span> </div> </div>`;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/pages/posts/SubHeader.astro", void 0);

const $$file = "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/pages/posts/SubHeader.astro";
const $$url = "/posts/SubHeader";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SubHeader,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SubHeader as $, _page as _ };
