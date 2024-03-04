import type { TestOptions } from 'vitest';

export const testOptions: TestOptions = {
	repeats: process.env.REPEAT ? parseInt(process.env.REPEAT) : undefined
};
