<script lang="ts">
	import Toggle from 'carbon-components-svelte/src/Toggle/Toggle.svelte';

	let { value = $bindable() }: { value: boolean | undefined; } = $props();
	if (value === undefined) {
		value = false;
	}
	const baseValue = value;

	let boundValue = $state(value);
</script>

<Toggle
	bind:toggled={boundValue}
	on:toggle={() => setTimeout(() => (boundValue = baseValue))}
	hideLabel
	labelA=""
	labelB=""
/>
