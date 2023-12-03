<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { usersData } from './store';
	import { get } from 'svelte/store';
	export let data;
	let hovered = false;
	const username = data.name;
	let sub = data.sub;
</script>

<div class="flex h-screen">
	<nav class=" bg-gray-100 p-6">
		<div class="flex flex-col space-y-4">
			<button
				on:click={() => goto(`/home/${sub}`)}
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover-visible:outline-none hover-visible:ring-2 hover-visible:ring-ring hover-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-gray-600"
					><polygon
						points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
					/></svg
				>
				Recent
			</button><button
				on:click={() => goto('/find')}
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover-visible:outline-none hover-visible:ring-2 hover-visible:ring-ring hover-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-gray-600"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg
				>
				Find creators
			</button><button
				on:click={() => goto('/community')}
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover-visible:outline-none hover-visible:ring-2 hover-visible:ring-ring hover-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-gray-600"
					><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path
						d="M22 21v-2a4 4 0 0 0-3-3.87"
					/><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg
				>
				Community
			</button><button
				on:click={() => goto('/notifications')}
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover-visible:outline-none hover-visible:ring-2 hover-visible:ring-ring hover-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-gray-600"
					><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path
						d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
					/></svg
				>
				Notifications
			</button><button
				on:click={() => goto('/setting')}
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover-visible:outline-none hover-visible:ring-2 hover-visible:ring-ring hover-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-white"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-gray-600"
					><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path
						d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
					/><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path
						d="M11 10.27 7 3.34"
					/><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M14 12h8" /><path
						d="M2 12h2"
					/><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path
						d="m17 3.34-1 1.73"
					/><path d="m11 13.73-4 6.93" /></svg
				>
				Settings
			</button>
		</div>
		<div class="mt-10" />
		<div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<div
				on:mouseover={() => {
					hovered = true;
					console.log('hovered', hovered);
				}}
				on:mouseleave={() => (hovered = false)}
				class="rounded-lg border w-full bg-card text-card-foreground shadow-sm mt-[40vh] pr-8
				mb-[10vh]"
				data-v0-t="card"
				id="9mrqblmvhwt"
			>
				<div class="{hovered ? 'popup' : 'hidden absolute'} p-6 items-center space-x-4">
					<img
						class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-red-500"
						alt="User Profile"
						src={data.pfp}
					/>
					<div class="flex justify-between items-center w-full">
						<div>
							<h3 class="font-semibold tracking-tight text-sm whitespace-nowrap">{username}</h3>
							<p class="text-sm text-muted-foreground">Creator</p>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-gray-600 absolute right-0 bottom-0"
							><circle cx="12" cy="12" r="10" /><path d="M17 12h.01" /><path d="M12 12h.01" /><path
								d="M7 12h.01"
							/></svg
						>
					</div>
				</div>

				<div class="p-6 flex items-center space-x-4">
					<img
						class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-red-500"
						alt="User Profile"
						src={data.pfp}
					/>
					<div class="flex justify-between items-center w-full">
						<div>
							<h3 class="font-semibold tracking-tight text-sm whitespace-nowrap">{username}</h3>
							<p class="text-sm text-muted-foreground">Member</p>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="text-gray-600 absolute right-0 bottom-0"
							><circle cx="12" cy="12" r="10" /><path d="M17 12h.01" /><path d="M12 12h.01" /><path
								d="M7 12h.01"
							/></svg
						>
					</div>
				</div>
			</div>
		</div>
	</nav>
</div>

<style>
	.popup:hover {
		display: flex;
		z-index: 10;
		position: absolute;
		transform: translateY(-100%);
		border: 2px solid #e5e7eb;
		border-radius: 1em;
		transition: all 0.3s ease-in-out;
	}
</style>
