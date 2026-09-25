<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { CheckboxField } from '$lib/index.js';

	let { field }: { field: CheckboxField } = $props();
</script>

<strong>
	{$_(field.label)}
</strong>
