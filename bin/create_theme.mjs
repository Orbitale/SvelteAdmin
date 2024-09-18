import chalk from 'chalk';

import prompts from 'prompts';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectDir = path.resolve(__dirname + '/../');
const themesDir = path.resolve(projectDir + '/src/lib/themes');
const carbonDir = path.resolve(themesDir + '/svelte/carbon');

//
// main
//
(async () => {
	let themeType = (
		(process.argv[2] || '').trim() || (await ask('Theme type? (svelte, react, vue)'))
	).toLowerCase();
	let themeName = (
		(process.argv[3] || '').trim() ||
		(await ask('What is the name of your new theme? (only lowercase letters and underscores)'))
	).toLowerCase();

	if (!themeName) {
		throw new Error('No theme name provided.');
	}

	if (!themeType) {
		throw new Error('No theme type provided. Allowed: svelte, react, vue');
	}
	if (!themeType.match(/^svelte|react|vue$/gi)) {
		throw new Error('Wrong template type provided. Allowed: svelte, react, vue');
	}

	const newThemePath = carbonDir
		.replace(/\\/g, '/')
		.replace(/\/svelte\/carbon$/g, `/${themeType}/${themeName}`)
		.replace(/\//g, path.sep);

	const files = await getAllFiles(carbonDir);

	for (const file of files) {
		if (!file.match(/\.svelte$/gi)) {
			continue;
		}
		const newPath = path.resolve(file.replace(carbonDir, newThemePath));
		const basename = newPath
			.replace(projectDir + path.sep, '')
			.replace(new RegExp('\\\\', 'g'), '/');
		const dir = path.dirname(newPath);
		await fs.mkdir(dir, { recursive: true });
		await fs.writeFile(
			newPath,
			`TODO: Implement template "${basename}" for "${themeType}/${themeName}" theme.\n`
		);
	}

	await fs.copyFile(carbonDir + '/index.ts', newThemePath + '/index.ts');

	const themesIndex = themesDir + '/' + themeType + '/index.ts';
	let indexContent = (await fs.readFile(themesIndex)).toString();
	if (!indexContent.match(new RegExp(`export *\\{ *default as ${themeName}`), 'gi')) {
		indexContent += `\nexport { default as ${themeName} } from './${themeName}';`;
	}
	indexContent = indexContent.replace(/\n\n+/, '\n').trim() + '\n';
	await fs.writeFile(themesIndex, indexContent);
})();

async function ask(question) {
	let value = '';

	const max = 3;
	let i = 0;
	while (!value || !value.trim()) {
		if (i >= max) {
			process.stderr.write(' [ERROR] No answer. Stopping.\n');
			process.exit(1);
		}

		const answer = await prompts({
			type: 'text',
			name: 'answer',
			message: question
		});

		value = (answer.answer || '').trim();

		i++;
	}

	return value;
}

async function getAllFiles(dirPath, arrayOfFiles = []) {
	const files = await fs.readdir(dirPath);

	arrayOfFiles = arrayOfFiles || [];

	for (const file of files) {
		const stat = await fs.stat(dirPath + path.sep + file);
		if (stat.isDirectory()) {
			arrayOfFiles = await getAllFiles(dirPath + path.sep + file, arrayOfFiles);
		} else {
			arrayOfFiles.push(path.join(dirPath, path.sep, file));
		}
	}

	return arrayOfFiles;
}
