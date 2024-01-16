<script lang="ts">
	export let value: Date | string | undefined;

	if (value instanceof Date) {
		value.setHours(0, 0, 0);
		value.setUTCSeconds(0, 0);
		value = value.toISOString().substring(0, 10);
	}

	if (value === undefined) {
		value = '';
	}
</script>

{value.substring(0, 10)}
