import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.ts'],
		exclude: [...configDefaults.exclude, '**/build/**', '**/.svelte-kit/**', '**/dist/**'],
		coverage: {
			exclude: [
				...(configDefaults?.coverage?.exclude ?? {}),
				'**/build/**',
				'**/.svelte-kit/**',
				'**/dist/**'
			]
		}
	}
});
