<script lang="ts">
	import type { ActionIcon } from '$lib/Actions';

	let { icon, ...rest }: {
		icon: ActionIcon;
		[key: string]: unknown;
	} = $props();

	if (
		icon &&
		typeof icon !== 'function' &&
		typeof icon !== 'string'
	) {
		console.error(`Wrong icon type: ${typeof icon}`, icon);
	}

	const IconComponent = icon;
</script>

{#if typeof icon === 'function'}
	<IconComponent {...rest} />
{:else if typeof icon === 'string'}
	{icon}
{:else}
	{(icon || '').toString()}
{/if}
