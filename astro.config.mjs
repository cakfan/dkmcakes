// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Situs pakai custom domain (lihat public/CNAME), jadi tidak perlu `base`.
// Kalau nanti TIDAK pakai custom domain dan deploy ke
// https://<username>.github.io/<repo>/, tambahkan:
//   base: "/<repo-name>"
export default defineConfig({
  site: "https://cakfan.github.io",
  base: "/dkmcakes",
  trailingSlash: "never",
  image: {
    domains: ["dkmcakes.com"],
  },
  integrations: [sitemap()],
});
