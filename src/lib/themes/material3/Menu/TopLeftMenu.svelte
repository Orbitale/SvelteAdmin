<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Section from '@smui/top-app-bar/dist/Section.svelte';
	import Button, { Label } from '@smui/button';

	import { Divider, type MenuLink, Submenu } from '$lib/Menu/MenuLinks';
	import { CallbackAction, UrlAction } from '$lib/actions';
	import InternalSubmenu from './InternalSubmenu.svelte';
	import {Icon} from "$lib";

	export let links: Array<MenuLink> = [];
</script>

{#each links as link}
	{#if link instanceof Submenu}
		<InternalSubmenu {link} />
	{:else if link instanceof Divider}
		<br />
	{:else if link instanceof UrlAction}
		<Section toolbar>
			<a href={link.url()}>
				{#if link.icon}
					<Icon icon={link.icon} />
				{/if}
				{link.label ? $_(link.label) : ''}
			</a>
		</Section>
	{:else if link instanceof CallbackAction}
		<Section toolbar>
			<Button tag="span" type="button" on:click={() => link.call()}>
				{#if link.icon}
					<Icon icon={link.icon} />
				{/if}
				{link.label ? $_(link.label) : ''}
			</Button>
		</Section>
	{:else}
		<Section toolbar>
			{#if link.icon}
				<Icon icon={link.icon} />
			{/if}
			<Label>{link.label ? $_(link.label) : ''}</Label>
		</Section>
	{/if}
{/each}
