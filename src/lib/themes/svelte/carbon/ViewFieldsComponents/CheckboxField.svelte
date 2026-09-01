<script lang="ts">
	import CheckboxChecked from 'carbon-icons-svelte/lib/CheckboxChecked.svelte';
	import Checkbox from 'carbon-icons-svelte/lib/Checkbox.svelte';

	let { value = $bindable() }: { value: boolean | undefined; } = $props();

	if (value === undefined) {
		value = false;
	}
</script>

{#if value}
	<CheckboxChecked size={24} style="color: #0a0;" />
{:else}
	<Checkbox size={24} style="color: #a00;" />
{/if}
