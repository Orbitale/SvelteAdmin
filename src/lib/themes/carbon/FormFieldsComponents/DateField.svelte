<script lang="ts">
	import DatePickerInput from 'carbon-components-svelte/src/DatePicker/DatePickerInput.svelte';
	import DatePicker from 'carbon-components-svelte/src/DatePicker/DatePicker.svelte';
	import { _ } from 'svelte-i18n';
	import type { DateField } from '$lib/FieldDefinitions/Date';

	export let field: DateField;
	export let value: Date | string | undefined;

	if (value instanceof Date) {
		value.setHours(0, 0, 0);
		value.setUTCSeconds(0, 0);
		value = value.toISOString().substring(0, 10);
	}
</script>

<DatePicker datePickerType="single" dateFormat={field.options.formFormat || 'Y-m-d'} {value}>
	<DatePickerInput
		name={field.name}
		labelText={$_(field.label || field.name)}
		helperText={field.options.help ? $_(field.options.help) : ''}
		placeholder={field.options?.placeholder || 'yyyy-mm-dd'}
	/>
</DatePicker>
