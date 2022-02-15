<script lang="ts">
	import type {Data} from 'src/model/category'
	export let data: string[] = [];
</script>

<h1>Category:</h1>

{#each data as datum}
	<tr>{datum}</tr>
{/each}