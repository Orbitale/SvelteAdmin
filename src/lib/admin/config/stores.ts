import { type Writable, writable } from 'svelte/store';
import type { AdminConfig } from './types';

export const configStore: Writable<AdminConfig> = writable({
	head: {
		brandName: '',
		appName: ''
	}
});
