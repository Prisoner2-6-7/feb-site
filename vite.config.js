import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import nodePolyfills from 'vite-plugin-node-polyfills'; // import nodePolyfills

export default defineConfig({
	plugins: [sveltekit(),
	// nodePolyfills()
	]
});
