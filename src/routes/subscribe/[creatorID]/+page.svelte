<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { valueStore } from '$lib/store';
	const value = $valueStore.value;
	console.log('value is :', value);
	import { get } from 'svelte/store';
	import Creator from '$lib/Creator.svelte';
	import { goto } from '$app/navigation';
	async function checkout(PRICE_ID) {
		await fetch(`/checkout`, {
			// http://localhost:5173/api/stripeCheckout
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ PRICE_ID })
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				window.location.replace(data.url);
			});
	}
</script>

<div class="p-8 bg-gray-100 min-h-screen">
	<header class="flex justify-between items-center">
		<h1 class="text-3xl font-bold">{value.user} Page</h1>
		<div class="flex items-center gap-3">
			<span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
				><span class="flex h-full w-full items-center justify-center rounded-full bg-muted"
					><img
						class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
						src={value.images}
						alt="pfp"
					/></span
				></span
			>
			<div class="grid gap-0.5 text-xs">
				<div class="font-medium">{value.user}</div>
				<div class="text-gray-500 dark:text-gray-400">{value.user}@example.com</div>
			</div>
		</div>
	</header>
	<div class="mt-6">
		<section class="grid md:grid-cols-3 gap-6">
			<div class="md:col-span-2">
				<h2 class="text-2xl font-bold mb-4">Latest Posts</h2>
				<div class="space-y-4">
					<article class="prose prose-gray mx-auto dark:prose-invert">
						<div class="space-y-2 not-prose">
							<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
								Post Title
							</h1>
							<p class="text-gray-500 dark:text-gray-400">Posted on December 8, 2023</p>
						</div>
						<p>Post content goes here. This is placeholder text for the post content.</p>
						<figure>
							<img
								src="https://i.pinimg.com/736x/2a/72/94/2a72946b2e7f420fbdf61edc8af77460.jpg"
								alt="Post cover image"
								width="1250"
								height="340"
								class="aspect-video object-cover"
							/>
							<figcaption>Post image caption goes here</figcaption>
						</figure>
					</article>
					<button
						class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
						>Read More</button
					>
				</div>
			</div>
			<aside>
				<h2 class="text-2xl font-bold mb-4">Support this creator</h2>
				<div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
					<div class="flex flex-col space-y-1.5 p-6">
						<h3 class="text-lg font-semibold">Become a Supporter</h3>
					</div>
					<div class="p-6">
						<p class="mb-4">
							Support this creator by becoming a Supporter. Choose a membership level:
						</p>
						<ul class="space-y-2">
							<li>
								<div
									class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
								>
									Level 1 - ₹100/month
								</div>
							</li>
							<li>
								<div
									class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
								>
									Level 2 - ₹350/month
								</div>
							</li>
							<li>
								<div
									class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
								>
									Level 3 - ₹650/month
								</div>
							</li>
						</ul>
						<div class="mt-4">
							<button
								type="button"
								class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
								>Sign Up Now</button
							>
						</div>
					</div>
				</div>
			</aside>
		</section>
	</div>
</div>

<!-- <CreatorPage creator={value} /> -->
<div class="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-green-500 text-white">
	<header class="ml-3 mr-3 p-8 flex justify-between items-center">
		<div class="flex items-center space-x-4">
			<img
				class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
				src={value.images}
				alt="Logo"
			/>
			<h1 class="text-2xl font-bold">{value.user}</h1>
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
				<p>₹100 per month</p>
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
				on:click={() => checkout(import.meta.env.VITE_BASIC_ID)}
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
				<p>₹350 per month</p>
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
				on:click={() => checkout(import.meta.env.VITE_PREMIUM_ID)}
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
				<p>₹650 per month</p>
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
				on:click={() => checkout(import.meta.env.VITE_ULTRA_PREMIUM_ID)}
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-purple-300 h-10 px-4 py-2 mt-4 self-end"
				>Subscribe</button
			>
		</div>
	</main>
	<footer class="ml-3 mr-3 p-8 text-center"><p>© 2023 Creator Name. All rights r</p></footer>
</div>
