<script lang="ts">
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Form from 'carbon-components-svelte/src/Form/Form.svelte';
	import FormGroup from 'carbon-components-svelte/src/FormGroup/FormGroup.svelte';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';

	import CrudFormField from '$lib/admin/Crud/CrudFormField.svelte';
	import Tabs from '$lib/admin/Crud/Tabs.svelte';
	import { TabsField } from '$lib/admin/FieldDefinitions/TabsField';

	import type { CrudOperation } from '$lib/admin/Crud/Operations.ts';
	import type { SubmitButtonType } from '$lib/admin/config/types';
	import type { FieldInterface } from '$lib/admin/FieldDefinitions/Field';
	import type { Options } from '$lib/admin/FieldDefinitions/Options.ts';

	export let submitButtonType: SubmitButtonType = 'primary';
	export let method: 'get' | 'post' = 'post';
	export let operation: CrudOperation<object>;
	export let defaultData: object = {};

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

	const dispatchEvent = createEventDispatcher<{
		submitData: Map<string, string | File | Array<string>>;
	}>();

	function onSubmit(event: SubmitEvent) {
		const data = new FormData(event.target, event.submitter);
		const dataMap = new Map<string, string | File | Array<string>>();
		data.forEach((value, key) => {
			dataMap.set(key, value);
		});
		dispatchEvent('submitData', dataMap);
	}
</script>

<Form
	{method}
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
				<CrudFormField
					{operation}
					{field}
					{defaultData}
					value={defaultData[field.name]}
					on:fieldChange
				/>
			</FormGroup>
		{/each}
	{:else}
		<Tabs fields={tabbed_fields} {operation} {defaultData} on:fieldChange />
	{/if}

	<Button kind={submitButtonType} type="submit">{$_('crud.form.submit')}</Button>

	<slot name="form-footer" />
</Form>
