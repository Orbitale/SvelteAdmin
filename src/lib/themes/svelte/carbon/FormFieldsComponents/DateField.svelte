<script lang="ts">
	import DatePickerInput from 'carbon-components-svelte/src/DatePicker/DatePickerInput.svelte';
	import DatePicker from 'carbon-components-svelte/src/DatePicker/DatePicker.svelte';
	import { _ } from 'svelte-i18n';
	import type { DateField } from '$lib/Fields/Date.js';

	let { field, value = $bindable() }: {
		field: DateField;
		value: Date | string | undefined;
	} = $props();

	if (value instanceof Date) {
		value.setHours(0, 0, 0);
		value.setUTCSeconds(0, 0);
		value = value.toISOString().substring(0, 10);
	}

	function dateFormatToRegex(dateFormat: string) {
		return dateFormat
				// Escape special characters in the date format string
				.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)
				// Convert date format to regular expression pattern
				.replace(/dd?/i, `\\d{2}`)
				.replace(/yyyy/i, `\\d{4}`)
				.replace(/yy/i, `\\d{2}`)
			  .replace(/Y/i, `\\d{4}`)
				.replace(/mm?/i, `\\d{2}`)
				.replace(/hh?/i, `\\d{2}`)
				.replace(/ss/i, `\\d{2}`)
		;
	}
</script>

<DatePicker datePickerType="single" dateFormat={field.options.formFormat || 'Y-m-d'} {value}>
	<DatePickerInput
		name={field.name}
		labelText={$_(field.label || field.name)}
		helperText={field.options.help ? $_(field.options.help) : ''}
		placeholder={field.options?.placeholder || 'yyyy-mm-dd'}
		disabled={field.options.disabled}
		pattern={dateFormatToRegex(field.options.formFormat || 'Y-m-d')}
	/>
</DatePicker>
