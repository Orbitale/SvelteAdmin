<script lang="ts">
	import Tabs from '../Tabs/Tabs.svelte';
	import theme from "$lib/stores/theme";
</script>

<Tabs FieldComponent={$theme.crud.formField} {...$$restProps} />
