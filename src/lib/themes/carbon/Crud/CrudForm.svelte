<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Form from 'carbon-components-svelte/src/Form/Form.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	import CrudFormField from '$lib/themes/carbon/Crud/CrudFormField.svelte';
	import TabsForms from '$lib/themes/carbon/FormFieldsComponents/TabsForms.svelte';
	import { TabsField } from '$lib/FieldDefinitions/TabsField';

	import type { CrudOperation } from '$lib/Crud/Operations';
	import type { SubmitButtonType } from '$lib/config/types';
	import type { FieldInterface } from '$lib/FieldDefinitions/Field';
	import type { Options } from '$lib/FieldDefinitions/Options';
	import { getSubmittedFormData } from '$lib/Crud/form';
	import type { SubmittedData } from '$lib/Crud/form';

	export let submitButtonType: SubmitButtonType = 'primary';
	export let method: 'get' | 'post' = 'post';
	export let operation: CrudOperation<unknown>;
	export let defaultData: undefined | null | Record<string, unknown> = {};

	const data: Record<string, unknown> = defaultData ?? {};

	export let htmlFormElement: HTMLFormElement | null | undefined;

	let fields: FieldInterface<Options>[] = operation.fields;

	let tabbed_fields: Array<TabsField> = [];

	let current_tab: TabsField | null = null;
	for (let i = 0; i < fields.length; i++) {
		const field = fields[i];
		if (field instanceof TabsField) {
			current_tab = null;
			tabbed_fields.push(field);
		} else {
			if (!current_tab) {
				current_tab = new TabsField(`tab_${i}`, `Tab #${i + 1}`);
				tabbed_fields.push(current_tab);
			}
			current_tab.fields.push(field);
		}
	}

	const dispatchEvent = createEventDispatcher<{ submitData: SubmittedData }>();

	function onSubmit(event: SubmitEvent) {
		if (operation.options?.preventHttpFormSubmit ?? true) {
			event.preventDefault();
		}

		const normalizedData = getSubmittedFormData(event);
		dispatchEvent('submitData', normalizedData);

		const normalizedEvent: CustomEvent<{ submitData: SubmittedData }> = new CustomEvent(
			'submitData',
			normalizedData
		);

		operation.eventHandlers.forEach(([eventName, callback]) => {
			if (eventName === 'submitData') {
				callback(normalizedEvent);
			}
		});
	}

	const enableEvents = () =>
		operation.eventHandlers.forEach(([event, callback]) =>
			htmlFormElement?.addEventListener(event, callback)
		);
	const disableEvents = () =>
		operation.eventHandlers.forEach(([event, callback]) =>
			htmlFormElement?.removeEventListener(event, callback)
		);

	onMount(() => {
		enableEvents();
	});

	onDestroy(() => {
		disableEvents();
	});
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

	{#if tabbed_fields.length === 1 && tabbed_fields[0].name === 'tab_0'}
		{#each fields as field (field.name)}
			<FormGroup>
				<CrudFormField {operation} {field} {data} value={data[field.name]} on:fieldChange />
			</FormGroup>
		{/each}
	{:else}
		<TabsForms fields={tabbed_fields} {operation} {data} on:fieldChange />
	{/if}

	<Button kind={submitButtonType} type="submit">{$_('crud.form.submit')}</Button>

	<slot name="form-footer" />
</Form>