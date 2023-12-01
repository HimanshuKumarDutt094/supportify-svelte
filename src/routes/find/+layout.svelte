<script>
	import { goto } from '$app/navigation';
	import Home from '$lib/Home.svelte';
	import { onMount } from 'svelte';
</script>

<main class="flex flex-row flex-nowrap h-screen">
	<div class="w-1/4 h-full overflow-hidden">
		<Home />
	</div>
	<div class="w-full h-full overflow-auto">
		<slot />
	</div>
</main>

<style>
	:root {
		overflow: hidden;
	}
</style>
