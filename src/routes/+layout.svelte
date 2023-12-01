<script lang="js">
	import { onMount } from 'svelte';
	import '../app.css';
	onMount(() => {
		const header = document.querySelector('header');
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				header.classList.add(
					'backdrop-blur-md',
					'box-shadow',
					'text-black',
					'transition-ease-in-out',
					'duration-300'
				);
			} else {
				header.classList.remove(
					'backdrop-blur-md',
					'box-shadow',
					'transition-ease-in-out',
					'duration-300'
				);
			}
		});
	});
</script>

<slot />

<style>
	:body {
		@apply bg-gradient-to-r from-green-400 to-blue-500;
		line-height: inherit;
	}
</style>
