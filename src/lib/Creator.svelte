<!--
// v0 by Vercel.
// https://v0.dev/t/r7o6TLiRGhR
-->
<script>
	import { goto } from '$app/navigation';

	export let creator = '';
</script>

<div class="max-h-screen bg-gray-100">
	<div class="flex mx-auto">
		<button type="button" class="w-[20em] bg-white p-5">
			<nav class="space-y-1 w-full flex flex-col gap-5">
				<button
					on:click={() => goto('/user/home')}
					type="button"
					class="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded"
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
						class="h-5 w-5"
						><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline
							points="9 22 9 12 15 12 15 22"
						/></svg
					><span>My page</span></button
				><button
					type="button"
					class="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded"
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
						class="h-5 w-5"
						><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle
							cx="9"
							cy="7"
							r="4"
						/><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg
					><span>Audience</span></button
				><button
					type="button"
					class="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded"
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
						class="h-5 w-5"
						><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line
							x1="6"
							x2="6"
							y1="20"
							y2="16"
						/></svg
					><span>Insights</span></button
				><button
					type="button"
					class="flex items-center space-x-2 p-2 text-gray-900 hover:bg-gray-200 rounded"
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
						class="h-5 w-5"
						><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path
							d="M18 12a2 2 0 0 0 0 4h4v-4Z"
						/></svg
					><span>Payouts</span></button
				><button
					type="button"
					class="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded"
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
						class="h-5 w-5"
						><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle
							cx="9"
							cy="7"
							r="4"
						/><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg
					><span>Community</span></button
				><button
					type="button"
					class="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded"
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
						class="h-5 w-5"
						><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path
							d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
						/></svg
					><span>Notifications</span></button
				><button
					type="button"
					class="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded"
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
						class="h-5 w-5"
						><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" /><path
							d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
						/><path d="M12 2v2" /><path d="M12 22v-2" /><path d="m17 20.66-1-1.73" /><path
							d="M11 10.27 7 3.34"
						/><path d="m20.66 17-1.73-1" /><path d="m3.34 7 1.73 1" /><path d="M14 12h8" /><path
							d="M2 12h2"
						/><path d="m20.66 7-1.73 1" /><path d="m3.34 17 1.73-1" /><path
							d="m17 3.34-1 1.73"
						/><path d="m11 13.73-4 6.93" /></svg
					><span>Settings</span></button
				><button
					class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-4 w-full"
					>Create</button
				><button
					class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 w-full"
					>Get app</button
				>
				<div class="flex items-center space-x-2 mt-4 p-2 bg-green-100 text-green-700 rounded">
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
						class="h-5 w-5"
						><path
							d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
						/><path d="m9 12 2 2 4-4" /></svg
					><span>{creator}</span>
				</div>
			</nav>
		</button>
	</div>
</div>
