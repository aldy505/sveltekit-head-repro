import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({ postcss: false })
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    ssr: false,
    trailingSlash: "never",
    files: {
      routes: "./src/routes",
      lib: "./src/lib"
    },
    adapter: adapter({
      // default options are shown
      pages: "dist",
      assets: "dist"
    })
  }
};

export default config;
