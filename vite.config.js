import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
// import nodePolyfills from 'vite-plugin-node-polyfills'; // import nodePolyfills

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		// nodePolyfills()
	]
});
