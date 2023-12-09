<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { creatorData, valueStore } from '$lib/store';

	let users = $page;
	const numUsers = Object.keys($page.data.creators).length;
	const currentPage = $page.data.creators;
	let search = '';
	let searched = false;
	// Lifecycle function that runs after the component is mounted
</script>

<main class="flex flex-col justify-center items-center w-full h-full p-6 bg-white">
	<h1 class="text-4xl font-bold mb-6">Find creators you love</h1>
	<div class="relative mb-6">
		<form
			on:submit={(e) => {
				e.preventDefault();
				searched = true;
			}}
		>
			<input
				on:input={() => (searched = true)}
				bind:value={search}
				class="flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground hover-visible:outline-none hover-visible:ring-2 hover-visible:ring-ring hover-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 w-full"
				placeholder="Search creators or topics"
			/><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600"
				><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
			>
		</form>
	</div>
	<div class="flex space-x-2">
		{#if !searched}
			<button
				type="button"
				class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
			>
				Art
			</button>
			<button
				class="inline-flex items-center rounded-full border-solid border-black px-2.5 py-0.5 text-xs font-semibold transition-colors hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
			>
				Podcast
			</button>
			<button
				class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
			>
				Music
			</button>
			<button
				class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
			>
				Games
			</button>
			<button
				class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
			>
				Writing
			</button>
			<button
				class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
			>
				Photography
			</button>
		{/if}
		{#if searched && search.length > 0}
			<div
				class="scrollbar-hide flex p-2 rounded-3xl flex-col absolute bg-white z-10 h-[30dvh] overflow-y-scroll overflow-x-hidden"
			>
				{#if numUsers > 0}
					{#each Object.entries(currentPage) as [key, value], i}
						{#if value.user.toLowerCase().includes(search.toLowerCase())}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								on:click={() => {
									valueStore.set({ value });
									goto(`/subscribe/${key}`);
								}}
								class="flex items-center gap-4 rounded-md border border-input bg-background hover:bg-gray-100 cursor-pointer"
							>
								<img
									class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
									src={value.images}
									alt="Logo"
								/>
								<h1 class="text-2xl font-bold">{value.user}</h1>
							</div>
						{/if}
					{:else}
						<p>No creator Found.</p>
						<!-- Your code here -->
					{/each}
				{:else}
					<p>Creator List empty Please check store.</p>
				{/if}
			</div>
		{/if}
	</div>
</main>
