<script lang="ts">
    import {DateTime} from 'luxon';

	export let value: Date | string | undefined;

	if (value instanceof Date) {
        const luxonDate = DateTime.fromISO(value.toISOString());
        value = luxonDate.toString().substring(0, 10);
	}

	if (value === undefined) {
		value = '';
	}
</script>

{value.substring(0, 10)}
