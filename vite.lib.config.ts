import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte()],
	build: {
		copyPublicDir: true,
		emptyOutDir: true,
		lib: {
			entry: [
				resolve(__dirname, 'src/lib/index.ts'),
				resolve(__dirname, 'src/lib/themes/index.ts')
			],
			fileName: 'svelte-admin',
			name: 'dist-lib',
			formats: ['es']
		},
		manifest: true
	},
	resolve: {
		alias: {
			$lib: resolve('src/lib/')
		}
	}
});
