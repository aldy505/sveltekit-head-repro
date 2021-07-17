# SvelteKit Head Repro

**A solution was found, you can browse other repo now**

Case: I need to have the meta tags from the `<svelte:head>` tags on my pages and layout to be rendered on build time (not on client-side load).

Clone the repo:
```bash
$ npx degit aldy505/sveltekit-head-repro
```

NPM commands:
```bash
$ npm install

$ npm run build
```

Then, navigate into `dist/index.html`, where you'd find the rendered file.

On mine, it didn't render:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    

		

		<link rel="modulepreload" href="/./_app/start-375055d1.js">
		<link rel="modulepreload" href="/./_app/chunks/vendor-146fd518.js">
		<link rel="stylesheet" href="/./_app/assets/start-a8cd1609.css">

		<script type="module">
			import { start } from "/./_app/start-375055d1.js";
			start({
				target: document.querySelector("#svelte"),
				paths: {"base":"","assets":"/."},
				session: {},
				host: location.host,
				route: true,
				spa: true,
				trailing_slash: "never",
				hydrate: null
			});
		</script>
  </head>
  <body>
    <div id="svelte">

	
</div>
  </body>
</html>
```
