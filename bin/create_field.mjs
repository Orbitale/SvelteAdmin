import chalk from 'chalk';

import prompts from 'prompts';
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectDir = path.resolve(__dirname + '/../');
const templatesPath = path.resolve(__dirname + '/templates');
const libDir = path.resolve(projectDir + '/src/lib/');
const fieldsDir = path.resolve(libDir + '/Fields/');
const libIndexFile = path.resolve(libDir + '/index.ts');
const typesFile = path.resolve(libDir + '/types.ts');
const carbonDir = path.resolve(libDir + '/themes/carbon/');
const carbonIndexFile = path.resolve(carbonDir + '/index.ts');

const filesToFormat = [carbonIndexFile, typesFile];

const fieldName = {
	baseSnakeCase: '',
	basePascalCase: '',
	fullSnakeCase: '',
	fullPascalCase: ''
};

//
// main
//
(async () => {
	await configureNewFieldName();

	process.stdout.write(
		'\n' +
			'Base (snake_case): ' +
			chalk.green(fieldName.baseSnakeCase) +
			'\n' +
			'Base (PascalCase): ' +
			chalk.green(fieldName.basePascalCase) +
			'\n' +
			'Full (snake_case): ' +
			chalk.green(fieldName.fullPascalCase) +
			'\n' +
			'Full (PascalCase): ' +
			chalk.green(fieldName.fullSnakeCase) +
			'\n'
	);

	process.stdout.write(
		'\n' +
			'This command will:\n' +
			`> Create:\t\t\t\t${chalk.green(
				getFieldDefinitionFile().replace(projectDir + path.sep, '')
			)}\n` +
			`> Create:\t\t\t\t${chalk.green(
				getViewComponentFile().replace(projectDir + path.sep, '')
			)}\n` +
			`> Create:\t\t\t\t${chalk.green(
				getFormComponentFile().replace(projectDir + path.sep, '')
			)}\n` +
			`> Add a new type to:\t\t\t${chalk.green(typesFile.replace(projectDir + path.sep, ''))}\n` +
			`> Add a new Field export to:\t\t${chalk.green(
				libIndexFile.replace(projectDir + path.sep, '')
			)}\n` +
			`> Add 2 component exports to:\t\t${chalk.green(
				carbonIndexFile.replace(projectDir + path.sep, '')
			)}\n` +
			`> Reformat these files:\t\t\t${chalk.green(
				filesToFormat.map((f) => f.replace(projectDir + path.sep, '')).join('\n\t\t\t\t\t')
			)}\n`
	);

	const answer = await prompts({
		type: 'confirm',
		name: 'answer',
		message: 'Proceed?',
		initial: true
	});
	if (!answer.answer) {
		process.exit(0);
		return;
	}

	await Promise.all([
		createFieldFile(),
		createViewFiles(),
		updateThemeConfigType(),
		updateLibIndexFile(),
		updateCarbonThemeFile()
	]);

	await reformatFiles();
})();

async function configureNewFieldName() {
	fieldName.fullPascalCase = (process.argv[2] || '').trim();

	const max = 3;
	let i = 0;
	while (!fieldName.fullPascalCase || !fieldName.fullPascalCase.trim()) {
		if (i >= max) {
			process.stderr.write(' [ERROR] No answer. Stopping.\n');
			process.exit(1);
		}

		const answer = await prompts({
			type: 'text',
			name: 'answer',
			message: 'What is the name of your new field?'
		});

		fieldName.fullPascalCase = (answer.answer || '').trim();

		i++;
	}

	if (fieldName.fullPascalCase.match(/field$/g)) {
		fieldName.fullPascalCase = fieldName.fullPascalCase.replace(/field$/g, 'Field');
	}
	if (!fieldName.fullPascalCase.match(/Field$/g)) {
		fieldName.fullPascalCase += 'Field';
	}

	fieldName.fullSnakeCase = (
		fieldName.fullPascalCase.charAt(0).toLowerCase() + fieldName.fullPascalCase.slice(1)
	).replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
	fieldName.fullPascalCase =
		fieldName.fullPascalCase.charAt(0).toUpperCase() + fieldName.fullPascalCase.slice(1);
	fieldName.baseSnakeCase = fieldName.fullSnakeCase.replace(/_field$/g, '');
	fieldName.basePascalCase = fieldName.fullPascalCase.replace(/Field$/g, '');
}

function getFieldDefinitionFile() {
	return path.resolve(fieldsDir + '/' + fieldName.basePascalCase + '.ts');
}

async function createFieldFile() {
	process.stdout.write(' > Creating Field definition file...\n');

	const templateFile = templatesPath + '/TemplateField.ts';
	const fieldFile = getFieldDefinitionFile();

	const cnt = (await fs.readFile(templateFile, 'utf8'))
		.replace(/__baseSnakeCase__/g, fieldName.baseSnakeCase)
		.replace(/__basePascalCase__/g, fieldName.basePascalCase)
		.replace(/__fullSnakeCase__/g, fieldName.fullSnakeCase)
		.replace(/__fullPascalCase__/g, fieldName.fullPascalCase);
	await fs.writeFile(fieldFile, cnt);
}

function getViewComponentFile() {
	return path.resolve(carbonDir + '/ViewFieldsComponents/' + fieldName.fullPascalCase + '.svelte');
}
function getFormComponentFile() {
	return path.resolve(carbonDir + '/FormFieldsComponents/' + fieldName.fullPascalCase + '.svelte');
}

async function createViewFiles() {
	process.stdout.write(' > Creating Svelte views for field...\n');

	await fs.copyFile(
		templatesPath + '/carbonViewField.svelte',
		path.resolve(getViewComponentFile())
	);

	await fs.copyFile(
		templatesPath + '/carbonFormField.svelte',
		path.resolve(getFormComponentFile())
	);
}

async function updateThemeConfigType() {
	process.stdout.write(' > Adding field to ThemeConfig type...\n');

	const typesConfig = (await fs.readFile(typesFile, 'utf8'))
		.replace(
			/(viewFields:[^}]+)(\[key: string]: ComponentType;)$/gm,
			`$1${fieldName.baseSnakeCase}: ComponentType;\n\t\t$2`
		)
		.replace(
			/(formFields:[^}]+)(\[key: string]: ComponentType;)$/gm,
			`$1${fieldName.baseSnakeCase}: ComponentType;\n\t\t$2`
		);

	await fs.writeFile(typesFile, typesConfig);
}

async function updateLibIndexFile() {
	process.stdout.write(' > Adding field to global lib file...\n');

	const indexFile = (await fs.readFile(libIndexFile, 'utf8')).replace(
		/(\s+export \* from '.\/i18n';)$/gm,
		`\nexport * from './Fields/${fieldName.basePascalCase}';$1`
	);

	await fs.writeFile(libIndexFile, indexFile);
}

async function updateCarbonThemeFile() {
	process.stdout.write(' > Adding field to Carbon theme...\n');

	const viewFieldImportName = fieldName.basePascalCase + 'ViewField';
	const formFieldImportName = fieldName.basePascalCase + 'FormField';

	const carbonFile = (await fs.readFile(carbonIndexFile, 'utf8'))
		.replace(
			/(\s+import AdminLayout from)/g,
			`\nimport ${formFieldImportName} from './FormFieldsComponents/${fieldName.fullPascalCase}.svelte';$1`
		)
		.replace(
			/(\s+import ViewLabel from)/g,
			`\nimport ${viewFieldImportName} from './ViewFieldsComponents/${fieldName.fullPascalCase}.svelte';$1`
		)
		.replace(
			/(viewFields:[^}]+Field)(\n\s+},)$/gm,
			`$1,\n\t\t${fieldName.baseSnakeCase}: ${viewFieldImportName}$2`
		)
		.replace(
			/(formFields:[^}]+Field)(\n\s+},)$/gm,
			`$1,\n\t\t${fieldName.baseSnakeCase}: ${formFieldImportName}$2`
		);

	await fs.writeFile(carbonIndexFile, carbonFile);
}

async function reformatFiles() {
	process.stdout.write(' > Adding field to Carbon theme...\n');

	const nodePath = process.argv[0];
	const packageManager = process.env['npm_execpath'];

	const command = spawn(
		nodePath,
		[
			packageManager,
			'run',
			'prettier',
			'--plugin=prettier-plugin-svelte',
			'--write',
			...filesToFormat
		],
		{
			cwd: projectDir
		}
	);
	command.stdout.on('data', (data) => process.stdout.write(data.toString()));
	command.stderr.on('data', (data) => process.stderr.write(data.toString()));
	command.on('exit', (code) => process.stdout.write('\n' + chalk.yellow('[END]') + ' ' + code));
}
