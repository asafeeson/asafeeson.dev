import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: { adapter: adapter(), alias: { $assets: './src/lib/assets', $img: 'src/lib/assets/img', $utils: 'src/lib/utils', $ui: 'src/lib/components/ui', $icons: 'src/lib/assets/icons' } },
};

export default config;
