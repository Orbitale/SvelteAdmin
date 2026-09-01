<script lang="ts">
	let { value = $bindable() }: { value: string | undefined; } = $props();

	if (value === undefined) {
		value = '';
	}
</script>

{value}
