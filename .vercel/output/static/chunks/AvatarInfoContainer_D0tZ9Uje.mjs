import './page-ssr_BzXtKxRH.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from './astro/server_MIQXHXPB.mjs';
import 'kleur/colors';
import { FaLinkedin } from 'react-icons/fa';

const $$Astro = createAstro();
const $$AvatarInfoContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AvatarInfoContainer;
  const author = Astro2.props.author;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4 items-center"> <img class="w-14 h-14 rounded-full"${addAttribute(author.avatar, "src")} alt=""> <div class="flex flex-col justify-between h-14"> <span class="text-black text-lg font-semibold"> ${author.name} </span> <a${addAttribute(author.linkedin, "href")} target="_blank"> ${renderComponent($$result, "FaLinkedin", FaLinkedin, { "className": "text-black text-2xl hover:cursor-pointer transition" })} </a> </div> </div>`;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/pages/posts/AvatarInfoContainer.astro", void 0);

const $$file = "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/pages/posts/AvatarInfoContainer.astro";
const $$url = "/posts/AvatarInfoContainer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AvatarInfoContainer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AvatarInfoContainer as $, _page as _ };
