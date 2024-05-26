import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import { svelteTesting } from '@testing-library/svelte/vite'

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	test: {
		include: ['src/**/*.{test,spec}.ts'],
		exclude: [...configDefaults.exclude, '**/build/**', '**/.svelte-kit/**', '**/dist/**'],
		globals: true,
    	environment: 'jsdom',
		coverage: {
			exclude: [
				...(configDefaults?.coverage?.exclude ?? []),
				'**/build/**',
				'**/.svelte-kit/**',
				'**/dist/**'
			]
		}
	}
});
