<script lang="ts">
    import Tag from "carbon-components-svelte/src/Tag/Tag.svelte";
	export let value: string | undefined;

	if (value === undefined) {
		value = '';
	}
</script>

<Tag>
    {value}
</Tag>
