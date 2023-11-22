<script lang="ts">
	import { _ } from 'svelte-i18n';
	import IconButton from '@smui/icon-button/dist/IconButton.svelte';
	import { Title } from '@smui/top-app-bar';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import Section from '@smui/top-app-bar/dist/Section.svelte';

	import { Divider, type MenuLink, Submenu } from '$lib/Menu/MenuLinks';
	import { CallbackAction, UrlAction } from '$lib/actions';
	import InternalSubmenu from './InternalSubmenu.svelte';
	import { Icon } from '$lib';

	export let links: Array<MenuLink> = [];
</script>

{#each links as link}
	{#if link instanceof Submenu}
		<Section>
			<InternalSubmenu {link} />
		</Section>
	{:else if link instanceof Divider}
		<Section>|</Section>
	{:else if link instanceof UrlAction}
		<Section>
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
		</Section>
	{:else if link instanceof CallbackAction}
		<Section>
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
		</Section>
	{:else}
		<Section>
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
		</Section>
	{/if}
{/each}
