<script lang="ts">
	import TextInput from 'carbon-components-svelte/src/TextInput/TextInput.svelte';
	import Button from 'carbon-components-svelte/src/Button/Button.svelte';
	import Column from 'carbon-components-svelte/src/Grid/Column.svelte';
	import Grid from 'carbon-components-svelte/src/Grid/Grid.svelte';
	import Row from 'carbon-components-svelte/src/Grid/Row.svelte';

	import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
	import AddFilled from 'carbon-icons-svelte/lib/AddFilled.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';

	import type { KeyValueObjectField } from '$lib/FieldDefinitions/KeyValueObject';
	import { _ } from 'svelte-i18n';

	export let field: KeyValueObjectField;
	export let value: unknown;
	let gridWrapper: HTMLElement;

	if (value && value?.constructor !== Object) {
		throw new Error('Value was expected to be an object, but "' + typeof value + '" given.');
	}

	let valueEntries = Object.entries(value);

	function removeKey(key: number) {
		valueEntries = [...valueEntries.filter((k, v) => v !== key)];
	}
	function addKey() {
		valueEntries = [...valueEntries, ['', '']];
	}
	function getDuplicateKeys(entries: Array<[string, string]>): Array<string> {
		const keys = [];
		const duplicates = [];
		entries.forEach(([key]) => {
			if (keys.indexOf(key) >= 0 && duplicates.indexOf(key) < 0) {
				duplicates.push(key);
			} else {
				keys.push(key);
			}
		});
		return duplicates;
	}

	$: existingKeys = getDuplicateKeys(valueEntries);
</script>

<div bind:this={gridWrapper}>
	<Grid style="margin: 0;">
		{#each valueEntries as entry, i}
			{@const key = entry[0]}
			{@const entryValue = entry[1]}
			{@const inputId = field.name + '_' + key.replace(/[^a-z0-9_-]/gi, '_')}
			{@const inputName = field.name + "[" + key + "]"}
			<Row>
				<Column sm={0} md={1} lg={1} xlg={1} max={1}>
					<Button kind="ghost" size="small" disabled style="cursor: default;">
						<label for={inputId}>{i}</label>
					</Button>
					{#if key.length}
						<input type="hidden" id={inputId} name="{inputName}" value={entryValue} />
					{/if}
				</Column>
				<Column sm={1} md={2} lg={6} xlg={6} max={6}>
					<TextInput
						invalid={key && existingKeys.indexOf(key) >= 0}
						warn={key.length === 0}
						invalidText={$_('error.crud.form.object.duplicate_key')}
						size="sm"
						data-key={i}
						bind:value={valueEntries[i][0]}
					/>
				</Column>
				<Column sm={1} md={1} lg={1} xlg={1} max={1} style="text-align: center;">
					<ArrowRight size="24" style="margin-top: 5px;" />
				</Column>
				<Column sm={1} md={2} lg={6} xlg={6} max={6}>
					<TextInput size="sm" data-value={i} bind:value={valueEntries[i][1]} />
				</Column>
				<Column sm={1} md={1} lg={1} xlg={1} max={1} style="text-align: left;">
					<Button kind="ghost" size="small" on:click={() => removeKey(i)}>
						<TrashCan size={20} />
					</Button>
				</Column>
			</Row>
		{/each}
		<Column style="text-align: left;">
			<Button kind="ghost" size="small" on:click={() => addKey()}>
				<AddFilled size={20} />
			</Button>
		</Column>
	</Grid>
</div>
