<script>
	import { usersData } from '$lib/store';
	let data = $usersData;
</script>

<div class="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-green-500 text-white">
	<header class="ml-3 mr-3 p-8 flex justify-between items-center">
		<div class="flex items-center space-x-4">
			<span
				class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
				src="/placeholder.svg?height=40&amp;width=40"
				alt="Logo"
			/>
			<h1 class="text-2xl font-bold">{data.name}</h1>
		</div>
		<nav class="flex space-x-4">
			<a class="underline" href="#">About</a><a class="underline" href="#">Contact</a>
		</nav>
	</header>
	<main class="flex-1 p-8 flex flex-row gap-32 justify-center">
		<div
			class="rounded-lg ml-3 mr-3 p-8 border shadow-sm bg-white text-gray-900 flex flex-col justify-between"
			data-v0-t="card"
		>
			<div>
				<h2 class="text-xl font-bold">Basic Tier</h2>
				<p>$5 per month</p>
				<div class="flex flex-col space-y-2">
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Access to regular updates
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Support the creator
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Access to exclusive forum
					</div>
				</div>
			</div>
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-purple-300 h-10 px-4 py-2 mt-4 self-end"
				>Subscribe</button
			>
		</div>
		<div
			class="rounded-lg border shadow-sm bg-white text-gray-900 ml-3 mr-3 p-8 flex flex-col justify-between"
			data-v0-t="card"
		>
			<div>
				<h2 class="text-xl font-bold">Premium Tier</h2>
				<p>$10 per month</p>
				<div class="flex flex-col space-y-2">
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Access to regular updates
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Support the creator
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Exclusive content
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Access to exclusive forum
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Free monthly e-book
					</div>
				</div>
			</div>
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-purple-300 h-10 px-4 py-2 mt-4 self-end"
				>Subscribe</button
			>
		</div>
		<div
			class="rounded-lg border shadow-sm bg-white text-gray-900 ml-3 mr-3 p-8 flex flex-col justify-between"
			data-v0-t="card"
		>
			<div>
				<h2 class="text-xl font-bold">Elite Tier</h2>
				<p>$20 per month</p>
				<div class="flex flex-col space-y-2">
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Access to regular updates
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Support the creator
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Exclusive content
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Monthly Q&amp;A
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Access to exclusive forum
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						Free monthly e-book
					</div>
					<div
						class="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-gray-400 p-1"
					>
						1-1 consultation
					</div>
				</div>
			</div>
			<button
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-purple-300 h-10 px-4 py-2 mt-4 self-end"
				>Subscribe</button
			>
		</div>
	</main>
	<footer class="ml-3 mr-3 p-8 text-center"><p>© 2023 Creator Name. All rights r</p></footer>
</div>
