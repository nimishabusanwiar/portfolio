// Writes one static HTML file per route into dist/, plus sitemap.xml and robots.txt.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, allRoutes, headFor, SITE_URL } = await import(path.join(root, "dist-ssr", "entry-server.js"));

const routes = allRoutes();
for (const route of routes) {
  const html = template
    .replace("%LANG%", route.lang)
    .replace("<!--head-->", headFor(route))
    .replace("<!--app-->", render(route.path));
  if (html.includes("<!--app-->") || html.includes("%LANG%")) throw new Error(`Template placeholders left in ${route.path}`);
  const out = path.join(dist, route.path, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log("prerendered", route.path);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
