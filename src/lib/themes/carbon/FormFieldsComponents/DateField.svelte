<script lang="ts">
	import DatePickerInput from 'carbon-components-svelte/src/DatePicker/DatePickerInput.svelte';
	import DatePicker from 'carbon-components-svelte/src/DatePicker/DatePicker.svelte';
	import { _ } from 'svelte-i18n';
	import type { DateField } from '$lib/Fields/Date';

	export let field: DateField;
	export let value: Date | string | undefined;

	if (value instanceof Date) {
		value.setHours(0, 0, 0);
		value.setUTCSeconds(0, 0);
		value = value.toISOString().substring(0, 10);
	}

	function dateFormatToRegex(dateFormat) {
		return (
			dateFormat
				// Escape special characters in the date format string
				.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
				// Convert date format to regular expression pattern
				.replace('Y', '\\d{4}')
				.replace('yyyy', '\\d{4}')
				.replace('yy', '\\d{2}')
				.replace('mm', '\\d{2}')
				.replace('dd', '\\d{2}')
				.replace('d', '\\d{2}')
				.replace('M', '\\d')
				.replace('yyyy', '\\d{4}')
				.replace('hh', '\\d{2}')
				.replace('mm', '\\d{2}')
				.replace('m', '\\d{2}')
				.replace('ss', '\\d{2}')
				.replace('HH', '\\d{2}')
				.replace('MM', '\\d{2}')
				.replace('SS', '\\d{2}')
		);
	}
</script>

<DatePicker datePickerType="single" dateFormat={field.options.formFormat || 'Y-m-d'} {value}>
	<DatePickerInput
		name={field.name}
		labelText={$_(field.label || field.name)}
		helperText={field.options.help ? $_(field.options.help) : ''}
		placeholder={field.options?.placeholder || 'yyyy-mm-dd'}
		pattern={dateFormatToRegex(field.options.formFormat || 'Y-m-d')}
	/>
</DatePicker>
