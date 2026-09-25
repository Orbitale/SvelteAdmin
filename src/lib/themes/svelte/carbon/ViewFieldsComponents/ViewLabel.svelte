<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { CheckboxField } from '$lib/Fields/Checkbox.js';

	let { field }: { field: CheckboxField } = $props();
</script>

<strong>
	{$_(field.label)}
</strong>
