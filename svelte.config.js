import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			images: {
				// sizes: [640, 828, 1200, 1920, 3840],
				sizes: [16, 32, 48, 64, 96, 80, 128, 256, 384, 512, 640, 768, 828, 960, 1024, 1200, 1366, 1440, 1600, 1920],
				// formats: ['image/avif', 'image/webp'],
				// minimumCacheTTL: 300,
				// domains: ['example-app.vercel.app'],
				"localPatterns": [{
					"pathname": "^/static/.*$",
					"search": ""
				}]
			}
		})
	}
};