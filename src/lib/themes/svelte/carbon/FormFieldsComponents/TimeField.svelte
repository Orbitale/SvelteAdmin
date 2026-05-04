<script lang="ts">
	import TimePicker from 'carbon-components-svelte/src/TimePicker/TimePicker.svelte';
	import type { TimeField } from '$lib/Fields/Time';

	export let field: TimeField;
	export let value: string | undefined;
</script>

<TimePicker
	name={field.name}
	labelText={field.label}
	placeholder={field.options?.placeholder || 'hh:mm'}
	disabled={field.options.disabled}
	{value}
/>
