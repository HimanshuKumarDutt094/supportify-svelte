<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import Home from '$lib/Home.svelte';
	import { onMount } from 'svelte';
	import { usersData } from '$lib/store';
	export let apiData;
	let data = $usersData ? $usersData : apiData;
</script>

<main class="flex flex-row flex-nowrap h-screen">
	<div class="w-1/4 h-full overflow-hidden">
		<Home {data} />
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
