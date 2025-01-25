import '../../chunks/page-ssr_BzXtKxRH.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_MIQXHXPB.mjs';
import 'kleur/colors';
import { g as getPostById, $ as $$Layout, a as getBlogPosts } from '../../chunks/BlogService_IC66CNDG.mjs';
import { $ as $$AvatarInfoContainer } from '../../chunks/AvatarInfoContainer_D0tZ9Uje.mjs';
import { $ as $$SubHeader } from '../../chunks/SubHeader_aPDYxWAy.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    params: { id: post.id.toString() }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const post = await getPostById(id);
  if (!post) {
    throw new Error("Post no encontrado");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-white"> ${renderComponent($$result2, "SubHeader", $$SubHeader, { "post": post })} <div class="container mx-auto px-4 lg:px-48 py-20 flex flex-col"> <h1 class="text-5xl font-bold text-black"> ${post.title} </h1> <h4 class="text-2xl text-gray-900 my-5">${post.subtitle}</h4> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="rounded-lg my-4 w-full h-auto object-cover"> <div class="flex flex-col gap-4"> <span class="text-gray-500 self-start"> ${post.date} </span> <div class="w-full h-[1px] bg-gray-300"></div> ${renderComponent($$result2, "AvatarInfoContainer", $$AvatarInfoContainer, { "author": post.author })} </div> <div class="text-lg text-black py-5 flex flex-col gap-4">${unescapeHTML(post.content)}</div> </div> </article> ` })}`;
}, "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/pages/posts/[id].astro", void 0);

const $$file = "C:/Users/Gabriel/Desktop/Proyects/LandingTechnodevs/src/pages/posts/[id].astro";
const $$url = "/posts/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
