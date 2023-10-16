<script lang="ts">
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import { _ } from 'svelte-i18n';

	import Dashboard from '$lib/admin/Dashboard/Dashboard.svelte';
	import { dashboard } from '../testApp/Dashboard.ts';
</script>

<Dashboard {dashboard}>
	<h1>Svelte Admin demo app</h1>

	<p>
		Svelte Admin is a (currently prototype) admin generator delivered as a Typescript library and a
		set of Svelte components as rendering system.
	</p>

	<p>
		If you detect any bug in this demo, feel free to clone the project or submit an issue in the
		<a href="https://github.com/Orbitale/SvelteAdmin"><LogoGithub /> Github Repository</a>!
	</p>

	<p>Here are the available CRUDs for the demo app:</p>

	<UnorderedList expressive={true}>
		{#each dashboard.cruds as crud}
			<li>
				<a href="/admin/{crud.name}/{crud.defaultAction}">
					{$_(crud.options.label.plural)}
				</a>
			</li>
		{/each}
	</UnorderedList>
</Dashboard>

<style>
	li {
		list-style-type: disc;
		list-style-position: inside;
	}
</style>
