<script lang="ts">
	export let value: string | undefined;

	$: valid = typeof value === 'string' && /^#?[0-9a-fA-F]{3,8}$/.test(value);
	$: swatch = valid && value ? (value.startsWith('#') ? value : `#${value}`) : '';
</script>

{#if valid}
	<span style="display:inline-flex;align-items:center;gap:0.5rem;">
		<span
			aria-hidden="true"
			style={`display:inline-block;width:1rem;height:1rem;border:1px solid #e0e0e0;background:${swatch};`}
		></span>
		<code>{swatch}</code>
	</span>
{:else}
	-
{/if}
