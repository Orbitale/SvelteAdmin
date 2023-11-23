<script lang="ts">
	import { _ } from 'svelte-i18n';
	import IconButton from '@smui/icon-button/dist/IconButton.svelte';
	import { Title } from '@smui/top-app-bar';
	import Tooltip, { Wrapper } from '@smui/tooltip';

	import { Divider, type MenuLink, Submenu } from '$lib/Menu/MenuLinks';
	import { CallbackAction, UrlAction } from '$lib/actions';
	import LeftSubmenuItem from './Internal/LeftSubmenuItem.svelte';
	import InternalDivider from './Internal/Divider.svelte';
	import { Icon } from '$lib';

	export let links: Array<MenuLink> = [];
</script>

{#each links as link}
	{#if link instanceof Submenu}
		<LeftSubmenuItem {link} />
	{:else if link instanceof Divider}
		<InternalDivider />
	{:else if link instanceof UrlAction}
		<IconButton tag="a" href={link.url()}>
			<Wrapper>
				{#if link.icon}
					<Icon icon={link.icon} />
				{:else}
					<i class="material-icons">link</i>
				{/if}
				{#if link.label}
					<Tooltip>
						{link.label ? $_(link.label) : ''}
					</Tooltip>
				{/if}
			</Wrapper>
		</IconButton>
	{:else if link instanceof CallbackAction}
		<IconButton on:click={() => link.call()}>
			<Wrapper>
				{#if link.icon}
					<Icon icon={link.icon} />
				{:else}
					<i class="material-icons">article</i>
				{/if}
				{#if link.label}
					<Tooltip>
						{link.label ? $_(link.label) : ''}
					</Tooltip>
				{/if}
			</Wrapper>
		</IconButton>
	{:else}
		<Title>
			<Wrapper>
				{#if link.icon}
					<Icon icon={link.icon} />
				{:else}
					<i class="material-icons">link</i>
				{/if}
				{#if link.label}
					<Tooltip>
						{link.label ? $_(link.label) : ''}
					</Tooltip>
				{/if}
			</Wrapper>
		</Title>
	{/if}
{/each}
