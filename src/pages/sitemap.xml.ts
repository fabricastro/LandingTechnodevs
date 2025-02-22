import { getBlogPosts } from "../service/BlogService";

export async function GET() {
  const posts = await getBlogPosts();
  const baseUrl = "https://www.technodevs.com.ar";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <priority>1.0</priority>
  </url>
  ${posts
    .map((post) => {
      const lastmodDate = new Date(post.date).toISOString().split(".")[0] + "+00:00";
      
      return `
  <url>
    <loc>${baseUrl}/blog/${post.id}</loc>
    <lastmod>${lastmodDate}</lastmod>
    <priority>0.8</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
