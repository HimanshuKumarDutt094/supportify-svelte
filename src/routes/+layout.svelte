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
