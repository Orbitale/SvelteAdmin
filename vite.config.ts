import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'web-components',
		lib: {
			entry: './src/lib/admin/index.js',
			formats: ['es']
		}
	},
	plugins: [
		sveltekit()
	]
});
