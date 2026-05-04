<script lang="ts">
	import type { ColorField } from '$lib/Fields/Color';

	export let field: ColorField;
	export let value: string | undefined;

	if (!value) {
		value = '#000000';
	}
</script>

<div class="bx--form-item">
	<label class="bx--label" class:bx--label--disabled={field.options.disabled} for={field.name}>
		{field.label}
	</label>
	<input
		id={field.name}
		name={field.name}
		type="color"
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
