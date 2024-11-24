import { a as $$Layout } from '../../chunks/Layout_DtOe6bX0.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_MIQXHXPB.mjs';
import 'kleur/colors';
import { f as fetchPostById, a as fetchBlogPosts } from '../../chunks/BlogService_BYZmnvuv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await fetchBlogPosts();
  return posts.map((post) => ({
    params: { id: post.id.toString() }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const post = await fetchPostById(id);
  if (!post) {
    throw new Error("Post no encontrado");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="bg-bgDark2"> <div class="container mx-auto px-24 py-28 flex flex-col"> <h1 class="text-4xl font-bold mb-4 text-white py-2"> ${post.title} </h1> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="rounded mb-4 w-full h-auto object-cover"> <div class="text-lg text-secondaryText py-2 flex flex-col gap-4">${unescapeHTML(post.content)}</div> </div> </article> ` })}`;
}, "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/pages/posts/[id].astro", void 0);

const $$file = "C:/Users/mati/Desktop/proyectos/LandingTechnodevs/src/pages/posts/[id].astro";
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
