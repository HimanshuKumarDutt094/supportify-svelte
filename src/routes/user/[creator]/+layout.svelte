<script>
	import Creator from '$lib/Creator.svelte';
	import { page } from '$app/stores';

	export let creator = $page.params.creator;
</script>

<main class="flex flex-row flex-nowrap h-screen">
	<div class="w-1/4 h-full overflow-hidden">
		<Creator {creator} />
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
