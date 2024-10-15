import { load_config } from './node_modules/@sveltejs/kit/src/core/config/index.js';
import { all } from './node_modules/@sveltejs/kit/src/core/sync/sync.js';

(async () => {
	console.info('Testing.');

	const conf = await load_config();

	const manifest_data = all(conf, 'development');

	const routes = manifest_data.manifest_data.routes;

	console.info(routes);
})();
