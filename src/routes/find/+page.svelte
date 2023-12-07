<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { creatorData } from '$lib/store';

	let uid = $page.data.props.uid;
	let user = $page.data.props.user;
	let images = $page.data.props.images;
	creatorData.set({ uid: { user, images } });

	let myc = { uid: { user, images } };
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
		{#if searched}
			<div class="flex flex-col absolute z-10 gap-2">
				{#if Object.keys(myc).length > 0}
					{#each myc.uid.user as user, i}
						{#if user?.toLowerCase().includes(search.toLowerCase())}
							<div class="result-card flex flex-col">
								<div>
									<img class="h-10 w-10 rounded-full" src={myc.uid.images[i]} alt={user} />
								</div>
								<div>{user}</div>
								<button on:click={() => goto(`/subscribe/${uid[i]}`)}> View Creator </button>
							</div>
						{/if}
					{/each}
				{:else}
					<p>No results found.</p>
				{/if}
			</div>
		{/if}
	</div>
</main>
