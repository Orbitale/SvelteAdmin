<script lang="ts">
	import type { DateTimeField } from '$lib/Fields/DateTime';

	export let field: DateTimeField;
	export let value: Date | string | undefined;

	if (value instanceof Date) {
		value = value.toISOString().substring(0, 16);
	} else if (typeof value === 'string' && value.length > 16) {
		value = value.substring(0, 16);
	}
</script>

<div class="bx--form-item">
	<label class="bx--label" class:bx--label--disabled={field.options.disabled} for={field.name}>
		{field.label}
	</label>
	<input
		id={field.name}
		class="bx--text-input"
		name={field.name}
		type="datetime-local"
		placeholder={field.options?.placeholder || 'yyyy-mm-ddThh:mm'}
		disabled={field.options.disabled}
		required={field.options.required}
		bind:value
	/>
	{#if field.options.help}
		<div
			class:bx--form__helper-text={true}
			class:bx--form__helper-text--disabled={field.options.disabled ?? false}
		>
			{field.options.help}
		</div>
	{/if}
</div>
