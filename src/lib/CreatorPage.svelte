<script>
	//@ts-nocheck
	import { goto } from '$app/navigation';

	export let creator;
</script>

{#if creator}
	<div class="p-8 bg-gray-100 min-h-screen">
		<header class="flex justify-between items-center">
			<h1 class="text-3xl font-bold">{creator.user} Page</h1>
			<div class="flex items-center gap-3">
				<span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
					><span class="flex h-full w-full items-center justify-center rounded-full bg-muted"
						>{creator.images}</span
					></span
				>
				<div class="grid gap-0.5 text-xs">
					<div class="font-medium">{creator.user}</div>
					<div class="text-gray-500 dark:text-gray-400">{creator.user}@example.com</div>
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
									src="placeholder.svg"
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
							<h3 class="text-lg font-semibold">Become a Patron</h3>
						</div>
						<div class="p-6">
							<p class="mb-4">
								Support this creator by becoming a patron. Choose a membership level:
							</p>
							<ul class="space-y-2">
								<li>
									<div
										class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
									>
										Level 1 - $5/month
									</div>
								</li>
								<li>
									<div
										class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
									>
										Level 2 - $10/month
									</div>
								</li>
								<li>
									<div
										class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
									>
										Level 3 - $20/month
									</div>
								</li>
							</ul>
							<div class="mt-4">
								<button
									type="button"
									on:click={goto('/signup')}
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
{/if}
