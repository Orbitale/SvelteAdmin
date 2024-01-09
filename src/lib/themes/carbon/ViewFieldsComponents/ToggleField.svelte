<script lang="ts">
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';

	export let value: boolean | undefined;
	if (value === undefined) {
		value = false;
	}
	const baseValue = value;

	let boundValue = value;
</script>

<Toggle
	bind:toggled={boundValue}
	on:toggle={() => setTimeout(() => (boundValue = baseValue))}
	hideLabel
	labelA=""
	labelB=""
/>
