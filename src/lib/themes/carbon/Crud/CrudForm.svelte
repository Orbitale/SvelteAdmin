<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Form from 'carbon-components-svelte/src/Form/Form.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';

	import { Tabs } from '$lib/Fields/Tabs';
	import { Columns } from '$lib/Fields/Columns';

	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { CommonFieldOptions, FieldInterface } from '$lib/Fields';
	import type { SubmitButtonType, ThemeConfig } from '$lib/types';
	import { getSubmittedFormData, type SubmittedData } from '$lib/Crud/Form';
	import { carbon } from '$lib/themes';

	export let submitButtonType: SubmitButtonType = 'primary';
	export let method: 'get' | 'post' = 'post';
	export let operation: CrudOperation;
	export let defaultData: undefined | null | Record<string, unknown> = {};
	export let theme: ThemeConfig = carbon;

	const CrudFormField = theme.formField;

	const data: Record<string, unknown> = defaultData ?? {};

	export let htmlFormElement: HTMLFormElement | null | undefined;

	let fields: FieldInterface<CommonFieldOptions>[] = operation.fields;

	const dispatchEvent = createEventDispatcher<{ submitData: SubmittedData }>();

	function onSubmit(event: SubmitEvent) {
		if (operation.options?.preventHttpFormSubmit ?? true) {
			event.preventDefault();
		}

		const normalizedData = getSubmittedFormData(event);
		dispatchEvent('submitData', normalizedData);
	}
</script>

<Form
	{method}
	bind:ref={htmlFormElement}
	on:click
	on:keydown
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:submit={onSubmit}
	on:submit
>
	<slot name="form-header" />

	{#each fields as field}
		{#if field instanceof Tabs || field instanceof Columns}
			<CrudFormField {operation} {field} {data} value={data[field.name]} {theme} on:fieldChange />
		{:else}
			<FormGroup>
				<CrudFormField {operation} {field} {data} value={data[field.name]} {theme} on:fieldChange />
			</FormGroup>
		{/if}
	{/each}

	<Button kind={submitButtonType} type="submit">{$_('crud.form.submit')}</Button>

	<slot name="form-footer" />
</Form>
