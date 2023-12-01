<script>
	import { goto } from '$app/navigation';
	import Home from '$lib/Home.svelte';
	import { onMount } from 'svelte';
	let slotDiv;
	onMount(() => {
		window.addEventListener(
			'wheel',
			function (e) {
				slotDiv.scrollTop += e.deltaY;
				e.preventDefault();
			},
			{ passive: false }
		);
	});
</script>

<main class="flex flex-row flex-nowrap h-screen">
	<div class="w-1/4 h-full overflow-hidden">
		<Home />
	</div>
	<div bind:this={slotDiv} class="w-full h-full overflow-auto no-scrollbar">
		<slot />
	</div>
</main>

<style>
	:root {
		overflow: hidden;
	}

	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
