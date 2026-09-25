<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Form from 'carbon-components-svelte/src/Form/Form.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';

	import { _ } from 'svelte-i18n';
	import { Tabs } from '$lib/Fields/Tabs.js';

	import { Columns } from '$lib/Fields/Columns.js';
	import type { CrudOperation } from '$lib/Crud/Operations.js';
	import type { CommonFieldOptions, FieldInterface } from '$lib/Fields/index.js';
	import type { SubmitButtonType, ThemeConfig } from '$lib/types.js';
	import { getSubmittedFormData, sanitizeFormData, type SubmittedData } from '$lib/Crud/Form.js';
	import carbon from '$lib/themes/svelte/carbon/index.js';

	let {
		formHeader,
		formFooter,
		operation,
		submitButtonType = 'primary',
		method = 'post',
		defaultData = {},
		onFieldChange = () => {},
		onSubmitData = () => {},
		theme = carbon
	}: {
		formHeader?: Snippet;
		formFooter?: Snippet;
		operation: CrudOperation;
		submitButtonType?: SubmitButtonType;
		method?: 'get' | 'post';
		defaultData?: undefined | null | Record<string, unknown>;
		theme?: ThemeConfig;
		onFieldChange?: (data: { key: string; value: any }) => void;
		onSubmitData?: (data: SubmittedData) => void;
	} = $props();

	const CrudFormField = $derived(theme.formField);

	const data: Record<string, unknown> = $derived(defaultData ?? {});

	let htmlFormElement: HTMLFormElement | null | undefined = $state();

	let fields: Array<FieldInterface<CommonFieldOptions>> = $derived(operation.fields);

	function onSubmit(e: SubmitEvent) {
		if (operation.options?.preventHttpFormSubmit ?? true) {
			e.preventDefault();
			e.stopPropagation();
		}

		onSubmitData(sanitizeFormData(getSubmittedFormData(e), defaultData ?? {}, operation));
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
>
	{@render formHeader?.()}

	{#each fields as field (field)}
		{#if field instanceof Tabs || field instanceof Columns}
			<CrudFormField {operation} {field} {data} value={data[field.name]} {theme} {onFieldChange} />
		{:else}
			<FormGroup>
				<CrudFormField
					{operation}
					{field}
					{data}
					value={data[field.name]}
					{theme}
					{onFieldChange}
				/>
			</FormGroup>
		{/if}
	{/each}

	<Button kind={submitButtonType} type="submit">{$_('crud.form.submit')}</Button>

	{@render formFooter?.()}
</Form>
