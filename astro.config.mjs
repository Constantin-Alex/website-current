import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://constantin-alex.github.io",
  base: "website-current",
});
