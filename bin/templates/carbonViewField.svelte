<script lang="ts">
	export let value: string | undefined;

	if (value === undefined) {
		value = '';
	}
</script>

{value}
