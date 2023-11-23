<script lang="ts">
	import Menu from '@smui/menu';
	import IconButton from '@smui/icon-button/dist/IconButton.svelte';
	import List, {Item, Separator, Text} from '@smui/list';
	import Button, { Label } from '@smui/button';
	import { _ } from 'svelte-i18n';

	import {Divider, type MenuLink, Submenu} from '$lib/Menu/MenuLinks';
	import { CallbackAction, UrlAction } from '$lib/actions';
	import Icon from '$lib/Layout/Icon.svelte';
	import {onMount} from "svelte";

	export let links: Array<MenuLink> = [];
	let submenu: Menu;

	let isOpen: boolean;
	let icon: string = '';

	$: {
		icon = isOpen ? 'apps' : 'apps';
	}
	onMount(() => {
		submenu.setOpen(true);
	})
</script>

<div class="top-right-menu">
	<IconButton class="material-icons" on:click={submenu.setOpen(true)}>{icon}</IconButton>
	<Menu
		bind:this={submenu}
		bind:open={isOpen}
		anchorCorner="BOTTOM_LEFT"
	>
		<List dense>
			<div class="menu-list">
				{#each links as submenuLink}
					{#if submenuLink instanceof Divider}
						<Separator />
					{:else if submenuLink instanceof UrlAction}
						<Item>
							<Text tag="a" href="{submenuLink.url()}">
								{#if submenuLink.icon}
									<Icon icon={submenuLink.icon} />
								{/if}
								{submenuLink.label ? $_(submenuLink.label) : ''}
							</Text>
						</Item>
					{:else if submenuLink instanceof CallbackAction}
						<Item>
							<Text tag="span" on:click={() => submenuLink.call()}>
								{#if submenuLink.icon}
									<Icon icon={submenuLink.icon} />
								{/if}
								{submenuLink.label ? $_(submenuLink.label) : ''}
							</Text>
						</Item>
					{:else}
						<Item>
							<Text>
								{#if submenuLink.icon}
									<Icon icon={submenuLink.icon} />
								{/if}
								<Label>{submenuLink.label ? $_(submenuLink.label) : ''}</Label>
							</Text>
						</Item>
					{/if}
				{/each}
			</div>
		</List>
	</Menu>
</div>

<style lang="scss">
	:global(.top-right-menu .menu-list *) {
		color: black;
		text-decoration: none;
	}
</style>
