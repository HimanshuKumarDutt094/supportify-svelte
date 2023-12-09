<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-50">
	<div
		class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md p-8 text-center"
		data-v0-t="card"
	>
		<div class="p-6 space-y-8">
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
				class="w-16 h-16 mx-auto text-green-500"
				><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline
					points="22 4 12 14.01 9 11.01"
				/></svg
			>
			<h2 class="text-2xl font-bold">Payment Successful!</h2>
			<p class="text-gray-500">
				Your subscription payment was successful. A confirmation email has been sent to your
				registered email address.
			</p>
			<div
				class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 m-auto"
			>
				Subscription Active
			</div>
			<div class="flex items-center justify-center space-x-4">
				<span
					class="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12"
					prompt="placeholder avatar"
				/><a class="text-blue-500 hover:underline" href="/home">View Profile</a>
			</div>
			<button
				on:click={() => goto('/')}
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full"
				>Continue to Homepage</button
			>
		</div>
	</div>
</div>
