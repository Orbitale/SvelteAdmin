<script lang="ts">
	import { DateTime } from 'luxon';

	let { value = $bindable() }: {
		value: Date | string | undefined;
	} = $props();

	if (value instanceof Date) {
		const luxonDate = DateTime.fromISO(value.toISOString());
		value = luxonDate.toString().substring(0, 10);
	}

	if (value === undefined) {
		value = '';
	}
</script>

{value.substring(0, 10)}
