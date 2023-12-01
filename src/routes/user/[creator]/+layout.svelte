<script>
	import Creator from '$lib/Creator.svelte';
	import { page } from '$app/stores';
	export let creator = $page.params.creator;
</script>

<Creator {creator} />
