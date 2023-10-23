import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'web-components',
		lib: {
			entry: './src/lib/index',
			formats: ['es']
		}
	},
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true,
				dev: false,
				css: 'injected'
			}
		})
	]
});
