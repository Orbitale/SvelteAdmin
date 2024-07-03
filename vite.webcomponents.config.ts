import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
	build: {
		outDir: 'build/webcomponents/',
		lib: {
			entry: resolve(__dirname, 'src/lib/index.ts'),
			name: '@orbitale/svelte-admin/webcomponents',
			formats: ['es'],
			fileName: format => `index.${format}.js`
		},
		manifest: true
	},
	resolve: {
		alias: {
			'$lib': resolve(__dirname, 'src/lib'),
			'$themes': resolve(__dirname, 'src/themes'),
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
