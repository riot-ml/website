// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://riot.ml',
  integrations: [
    starlight({
      title: "Riot",
      logo : {
        src: './src/assets/riot.png'
      },
      social: {
        github: "https://github.com/riot-ml/riot",
        discord: "https://discord.gg/59Khzk2UBW",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});