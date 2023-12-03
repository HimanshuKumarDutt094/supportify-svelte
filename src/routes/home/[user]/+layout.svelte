<script lang="ts">
	import { usersData } from '$lib/store';
	import Home from '$lib/Home.svelte';
	let data = $usersData;
</script>

{#if data}
	<Home {data} />
	<slot />
{/if}
