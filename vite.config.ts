import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	resolve: {
		alias: {
			$lib: resolve(__dirname, 'src/lib')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.ts'],
		exclude: [...configDefaults.exclude, '**/build/**', '**/.svelte-kit/**', '**/dist/**'],
		globals: true,
		environment: 'jsdom',
		coverage: {
			include: ['src/lib/']
		}
	}
});
