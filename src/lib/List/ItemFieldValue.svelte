<script lang="ts">
	import type Field from "../Field/Field.js";

	export let field: Field;
	export let item: object;

	let raw_value = item[field.name] || undefined;

	// Throws if field is snot valid.
	let field_value = undefined;

	let error: string|null = null;

	try {
		field.validate(raw_value);
		field_value = field.display(raw_value)
	} catch (e) {
		error = e.message;
	}
</script>

{#if error}
	<span class="field-validation-error bg-danger">{error}</span>
{/if}

{#if field_value === null}
	<span class="badge bg-dark">Empty</span>
{:else if field_value === ''}
	<span class="badge bg-dark">Empty string</span>
{:else if field_value === undefined}
	<span class="badge bg-dark">Undefined</span>
{:else if field_value === null}
	<span class="badge bg-dark">Null</span>
{:else if typeof field_value === 'boolean'}
	{#if field_value === true}
		<span class="badge bg-success">&check;</span>
	{:else}
		<span class="badge bg-danger">&times;</span>
	{/if}
{:else if Array.isArray(field_value)}
	{#each field_value as array_value}
		<span class="badge bg-secondary">{array_value}</span>
	{/each}
{:else if typeof field_value === 'object'}
	<pre>{JSON.stringify(field_value)}</pre>
{:else}
	{field_value}
{/if}

<style lang="scss">
	// TODO: use a proper UI kit for that.
	.field-validation-error {
		&:before {
			content: "⚠";
			display: inline-block;
		}
	}
	.badge {
		background: #eee;
		border: solid 1px #ddd;
		border-radius: 1rem;
	}
	.bg-secondary {
		background-color: #aaa;
		color: black;
	}
	.bg-dark {
		background-color: #333;
		color: #eee;
	}
	.bg-success {
		background-color: lightgreen;
		color: darkgreen;
	}
	.bg-danger {
		background-color: lightcoral;
		color: darkred;
	}
</style>
