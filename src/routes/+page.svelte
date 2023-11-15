<script lang="ts">
	import UnorderedList from 'carbon-components-svelte/src/UnorderedList/UnorderedList.svelte';
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import { _ } from 'svelte-i18n';

	import { initLocale } from '$lib';
	import theme from '$lib/themes/carbon';
	import { dashboard } from '../testApp/Dashboard';
	import fr from '../testApp/translations/fr';

	initLocale('fr', { fr });
</script>

<svelte:component this={theme.dashboard} {dashboard}>
	<h1>Svelte Admin demo app</h1>

	<p>
		Svelte Admin is a (currently prototype) admin generator delivered as a Typescript library and a
		set of Svelte components as rendering system.
	</p>

	<p>
		If you detect any bug in this demo, feel free to clone the project or submit an issue in the
		<a href="https://github.com/Orbitale/SvelteAdmin"><LogoGithub />&nbsp;Github Repository</a>!
	</p>

	<p>Here are the available CRUDs for the demo app:</p>

	<UnorderedList expressive={true}>
		{#each dashboard.cruds as crud}
			<li>
				<a href="/admin/{crud.name}/{crud.options.defaultOperationName}">
					{$_(crud.options.label.plural)}
				</a>
			</li>
		{/each}
	</UnorderedList>
</svelte:component>

<style>
	li {
		list-style-type: disc;
		list-style-position: inside;
	}
</style>
