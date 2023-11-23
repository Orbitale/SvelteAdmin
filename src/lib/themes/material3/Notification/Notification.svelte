<script lang="ts">
	import Paper, { Title, Content } from '@smui/paper';

	export let kind: 'error' | 'info' | 'success' | 'warning';
</script>

<Paper>
	<Content>
		<slot />
	</Content>
</Paper>
