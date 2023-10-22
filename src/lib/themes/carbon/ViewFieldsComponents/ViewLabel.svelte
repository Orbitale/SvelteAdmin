<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { CheckboxField } from '$lib';

	export let field: CheckboxField;
</script>

<strong>
	{$_(field.label)}
</strong>
