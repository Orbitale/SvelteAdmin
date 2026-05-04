<script lang="ts">
	export let value: string | Date | undefined;

	function format(v: string | Date | undefined): string {
		if (v === undefined || v === null || v === '') {
			return '';
		}
		const d = v instanceof Date ? v : new Date(v);
		if (Number.isNaN(d.getTime())) {
			return typeof v === 'string' ? v : '';
		}
		return d.toLocaleString();
	}

	$: formatted = format(value);
</script>

{#if formatted}
	{formatted}
{:else}
	-
{/if}
