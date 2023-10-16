<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { FieldInterface } from '$lib/admin/FieldDefinitions/Field';
	import type { Options } from '$lib/admin/FieldDefinitions/Options';
	import type { CrudAction } from '$lib/admin/Crud/actions';

	export let action: CrudAction;
	export let field: FieldInterface<Options>;
	export let data: object | undefined;
	export let value: unknown;

	if (value === undefined && data) {
		value = data[field.name];
	}

	const dispatchEvent = createEventDispatcher<{
		fieldChange: {
			key: string;
			value: any;
		};
	}>();

	function onFieldChange(e: InputEvent) {
		dispatchEvent('fieldChange', {
			key: field.name,
			value: e.detail
		});
	}
</script>

<svelte:component
	this={field.formComponent}
	{field}
	{action}
	{value}
	{data}
	on:change={onFieldChange}
	on:blur
	on:check
	on:click
	on:focus
	on:input
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:paste
	on:toggle
/>
