<script lang="ts">
	import type { HiddenField } from '$lib/Fields/Hidden';

	export let field: HiddenField;
	export let value: string | number | boolean | undefined;
</script>

<input type="hidden" name={field.name} value={value ?? ''} />
