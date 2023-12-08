<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { creatorData, valueStore } from '$lib/store';

	const numUsers = Object.keys($page.data.creators).length;
	const currentPage = $page.data.creators;
	let search = '';
	let searched = false;

	let isHoveredCreators = false;
	let isHoveredFeatures = false;
	let isHoveredPricing = false;
	let isHoveredResources = false;
	let isHoveredAny = false;
	let isHoveredFeatureNav = false;
	let isHoveredCreatorsNav = false;
	let isHoveredPricingNav = false;
	let isHoveredResourcesNav = false;
</script>

<div class="text-sm m-0 p-0 block z-[500]">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<header
		on:mouseover={(e) => {
			e.preventDefault();
			if (e && e.target && e.target.tagName === 'BUTTON') {
				let val = e.target.textContent.trim();
				if (val === 'Creators') {
					isHoveredCreators = true;
					isHoveredAny = true;

					isHoveredFeatures = false;

					isHoveredPricing = false;

					isHoveredResources = false;
				} else if (val === 'Features') {
					isHoveredFeatures = true;
					isHoveredAny = true;

					isHoveredCreators = false;

					isHoveredPricing = false;

					isHoveredResources = false;
				} else if (val === 'Pricing') {
					isHoveredPricing = true;
					isHoveredAny = true;

					isHoveredFeatures = false;

					isHoveredCreators = false;

					isHoveredResources = false;
				} else if (val === 'Resources') {
					isHoveredResources = true;
					isHoveredAny = true;

					isHoveredFeatures = false;

					isHoveredPricing = false;

					isHoveredCreators = false;
				}
			}
		}}
		on:scroll={(e) => {
			let scrolled = true;
		}}
		on:mouseleave={(e) => {
			e.preventDefault();

			isHoveredCreators = false;
			isHoveredAny = false;

			isHoveredFeatures = false;

			isHoveredPricing = false;

			isHoveredResources = false;
		}}
		class="top-0 left-0 pb-4 pt-4 z-10 w-full fixed grid grid-cols-[1fr_auto_1fr] items-center p-[0.3em] {isHoveredCreators ||
		isHoveredFeatures ||
		isHoveredPricing ||
		isHoveredResources
			? 'bg-white '
			: 'bg-transparent'}
		
			"
	>
		<div class="flex relative">
			<nav>
				<ul class="flex-row flex">
					<li class="relative list-item">
						<button
							class="  {isHoveredFeatures || isHoveredPricing || isHoveredResources
								? 'text-black'
								: 'text-white'}
								 border-solid rounded-3xl p-[0.7rem] {isHoveredCreatorsNav
								? 'text-white bg-black'
								: ''} hover:bg-black"
						>
							<div><span>Creators</span></div></button
						>
					</li>
					<li class="relative list-item">
						<button
							class=" {isHoveredCreators || isHoveredPricing || isHoveredResources
								? 'text-black'
								: 'text-white'}
								 border-solid rounded-3xl p-[0.7rem] {isHoveredFeatureNav
								? 'text-white bg-black'
								: ''} hover:bg-black"
						>
							<div><span>Features</span></div></button
						>
					</li>
					<li class="relative list-item">
						<button
							class=" {isHoveredCreators || isHoveredFeatures || isHoveredResources
								? 'text-black'
								: 'text-white'}
								 border-solid rounded-3xl p-[0.7rem] {isHoveredPricingNav
								? 'text-white bg-black'
								: ''} hover:bg-black"><div><span>Pricing</span></div></button
						>
					</li>
					<li class="relative list-item">
						<button
							class=" 
								 border-solid rounded-3xl p-[0.7rem] {isHoveredCreators || isHoveredFeatures || isHoveredPricing
								? 'text-black'
								: 'text-white'} {isHoveredResourcesNav
								? 'text-white bg-black'
								: ''}  hover:bg-black"><div><span>Resources</span></div></button
						>
					</li>
				</ul>
			</nav>
		</div>
		<div class=" flex items-center justify-center">
			<a href="/" class="p-3 rounded-3xl bg-white">
				<img src="/logo-supportify.png" alt="Supportify" /></a
			>
		</div>
		<div class="flex gap-[1.4rem] items-center justify-end min-w-fit flex-1">
			<div
				class="relative leading-4 rounded-3xl
					"
			>
				<form
					class="flex items-center justify-center rounded-[6rem] border relative"
					on:submit={(e) => {
						e.preventDefault();
						searched = true;
					}}
				>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label
						id="search"
						class="absolute w-[1px] h-[1px] overflow-hidden p-0 m-[-1px] clip whitespace-nowrap border-[0]"
					>
						Find a Creator
					</label>
					<input
						on:input={() => (searched = true)}
						bind:value={search}
						aria-labelledby="search"
						type="text"
						class=" w-full max-w-full outline-none text-ellipsis block indent-[5.4] rounded-[6rem]
					
					p-[0.5rem]
					bg-transparent text-white
					border-solid
					border-[1px]
					hover:bg-black hover:border-[2px] hover:border-solid hover:border-black {isHoveredAny
							? 'border-black text-black'
							: ''}
					 hover:text-white
					"
						name=""
						id=""
						placeholder="Find a Creator"
					/>
				</form>
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
			<button
				on:click={() => goto('/login')}
				type="button"
				class="   p-[0.5rem]
				
				
				rounded-3xl

				bg-transparent {isHoveredAny ? 'text-black' : 'text-white'}
				border-solid
				border
				 {isHoveredAny
					? 'border-black text-black hover:bg-black hover:text-white '
					: 'hover:bg-white hover:border-white hover:text-black'}
				"><div><span>Log In</span></div></button
			>
			<button
				on:click={() => goto('/login')}
				type="submit"
				class=" {isHoveredAny ? 'bg-black text-white' : 'bg-white text-black'}
				  p-[0.5rem]
				
				rounded-3xl
			
				border-solid
				border
				
				"><div><span>Get Started</span></div></button
			>
		</div>
		<nav class="w-full pt-5 absolute top-[4.49em] left-0 right-0 z-[100]">
			<div
				on:mouseover={() => (isHoveredCreators = isHoveredCreatorsNav = true)}
				on:mouseleave={() => (isHoveredCreators = isHoveredCreatorsNav = false)}
				on:focus={() => (isHoveredCreators = isHoveredCreatorsNav = true)}
				on:blur={() => (isHoveredCreators = isHoveredCreatorsNav = false)}
				class="{isHoveredCreators
					? 'bg-white'
					: 'hidden'} absolute top-0 left-0 right-0 z-[100] pb-4"
			>
				<div>
					<ul class=" p-0 m-0 grid grid-flow-col grid-cols-5 gap-2 text-xs">
						<li>
							<ul class="hoverable">
								<li class="m-2">Podcasters</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Video creators</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Musicians</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Artists</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Game devs</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div
				on:mouseover={() => (isHoveredFeatures = isHoveredFeatureNav = true)}
				on:mouseleave={() => (isHoveredFeatures = isHoveredFeatureNav = false)}
				on:focus={() => (isHoveredFeatures = isHoveredFeatureNav = true)}
				on:blur={() => (isHoveredFeatures = isHoveredFeatureNav = false)}
			>
				<div
					class="{isHoveredFeatures
						? 'bg-white'
						: 'hidden'} absolute top-0 left-0 right-0 z-[100] pb-4"
				>
					<ul class=" m-0 p-0 grid grid-flow-col grid-cols-5 gap-2 text-xs">
						<li>
							<ul class="hoverable">
								<li class="m-2">Create on your terms</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Build real community</li>
								<li class="m-2">Every post, every time</li>
								<li class="m-2">More ways to stay close</li>
								<li class="m-2">Get to know your fans</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Expand your reach</li>
								<li class="m-2">Bring in new fans</li>
								<li class="m-2">Unlock growth</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Get business support</li>
								<li class="m-2">Help when you need it</li>
								<li class="m-2">Policies to protect you</li>
								<li class="m-2">Payments powered by Stripe</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Earning made easy</li>
								<li class="m-2">Run a membership</li>
								<li class="m-2">Sell digital products</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div
				on:mouseover={() => (isHoveredPricing = isHoveredPricingNav = true)}
				on:mouseleave={() => (isHoveredPricing = isHoveredPricingNav = false)}
				on:focus={() => (isHoveredPricing = isHoveredPricingNav = true)}
				on:blur={() => (isHoveredPricing = isHoveredPricingNav = false)}
			>
				<div
					class="{isHoveredPricing
						? 'bg-white'
						: 'hidden'} absolute top-0 left-0 right-0 z-[100] pb-4"
				>
					<ul class=" m-0 p-0 grid grid-flow-col grid-cols-5 gap-2 text-xs">
						<li>
							<ul class="hoverable">
								<li class="m-2">Starting a Supportify is free</li>
								<li class="m-2">Powerful core features</li>
								<li class="m-2">Earning made easy</li>
								<li class="m-2">Paid membership</li>
								<li class="m-2">Commerce</li>
								<li class="m-2">Payments powered by Supportify</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div
				on:mouseover={() => (isHoveredResources = isHoveredResourcesNav = true)}
				on:mouseleave={() => (isHoveredResources = isHoveredResourcesNav = false)}
				on:focus={() => (isHoveredResources = isHoveredResourcesNav = true)}
				on:blur={() => (isHoveredResources = isHoveredResourcesNav = false)}
			>
				<div
					class="{isHoveredResources
						? 'bg-white'
						: 'hidden'} absolute top-0 left-0 right-0 z-[100] pb-4"
				>
					<ul class=" m-0 p-0 grid grid-flow-col grid-cols-5 gap-2 text-xs">
						<li>
							<ul class="hoverable">
								<li class="m-2">Grow your membership</li>
								<li class="m-2">Connect with creators</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Read latest policy updates</li>
								<li class="m-2">Explore product updates</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Help Center</li>
								<li class="m-2">Getting started</li>
								<li class="m-2">Supportify payments</li>
								<li class="m-2">Member management</li>
								<li class="m-2">Content & engagement</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Partners & integrations</li>
								<li class="m-2">Featured integrations</li>
								<li class="m-2">Full app directory</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Mobile</li>
								<li class="m-2">Download the app</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<div class="p-20 relative m-3">
		<div class="m-3 mx-auto my-auto w-full h-full p-3">
			<section class="bg-white rounded-xl">
				<div class=" flex flex-cols">
					<div class="m-4 text-8xl font-bold">
						<h1 class=" p-4">
							<span class="text-white mix-blend-exclusion relative">
								Powered

								<br />

								by

								<br />

								Creativity
							</span>
						</h1>
					</div>
					<div class="p-3 ml-[12em] m-3">
						<img
							class="rounded-xl w-fit h-fit"
							src="https://media.gettyimages.com/id/1212006375/photo/confident-asian-businesswoman-in-office.jpg?s=612x612&w=0&k=20&c=SEgvQZiWHK1uqefySpyFTJ8oMHpdnWyjkoZymrFUpHA="
							alt=""
						/>
					</div>
				</div>
			</section>
		</div>
		<div
			class=" flex w-full h-full mt-10 bg-gradient-to-l rounded-xl drop-shadow-2xl shadow-transparent shadow-inner"
		>
			<h2 class="mt-8 mx-auto my-auto font-bold text-7xl mb-8">Meet Our Creators</h2>
		</div>
		<div class="scroller" data-animated="true">
			<div class="scroller__inner">
				{#each Object.entries(currentPage) as [key, value], i}
					{#if value.images}
						<div class="">
							<img src={value.images} alt="bruh" class="rounded-xl" />
							<span class="">{value.user}</span>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="mt-3 mx-auto my-auto flex text-5xl font-bold">
			<div data-tag="marketing-section-title" class="sc-dJjYzT hfzGXf">
				<h2 color="dark" class="sc-gKclnd cXaBZi">What is Supportify?</h2>
			</div>

			<div class="ml-3 flex-wrap flex flex-row text-3xl text-white font-semibold">
				Supportify gives creators the tools they need to reliably reach their fans, strengthen their
				communities, and build sustainable businesses.
			</div>
		</div>
	</div>
	
</div>

<style>
	.scroller {
		max-width: fit-content;
	}

	.scroller__inner {
		padding-block: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.scroller[data-animated='true'] {
		overflow: hidden;
		-webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
	}

	.scroller[data-animated='true'] .scroller__inner {
		width: max-content;
		flex-wrap: nowrap;
		animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear
			infinite;
	}

	.scroller[data-direction='right'] {
		--_animation-direction: reverse;
	}

	.scroller[data-direction='left'] {
		--_animation-direction: forwards;
	}

	.scroller[data-speed='fast'] {
		--_animation-duration: 20s;
	}

	.scroller[data-speed='slow'] {
		--_animation-duration: 60s;
	}

	@keyframes scroll {
		to {
			transform: translate(calc(-50% - 0.5rem));
		}
	}

	/* general styles */

	:root {
		--clr-neutral-100: hsl(0, 0%, 100%);
		--clr-primary-100: hsl(205, 15%, 58%);
		--clr-primary-400: hsl(215, 25%, 27%);
		--clr-primary-800: hsl(217, 33%, 17%);
		--clr-primary-900: hsl(218, 33%, 9%);
	}

	html {
		color-scheme: dark;
	}

	body {
		display: grid;
		min-block-size: 100dvh;
		place-content: center;
		font-family: system-ui;
		font-size: 1.125rem;
		background-color: var(--clr-primary-800);
	}

	.tag-list {
		margin: 0;
		padding-inline: 0;
		list-style: none;
	}

	.tag-list li {
		padding: 1rem;
		background: var(--clr-primary-400);
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
	}

	/* for testing purposed to ensure the animation lined up correctly */
	.test {
		background: red !important;
	}

	:root {
		overflow-x: hidden;
	}
	.hoverable {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;

		margin-right: 0.5em;
	}
	.hoverable:hover {
		background-color: #f3f3f3; /* Change as needed */
	}
	.hoverable li:hover {
		color: #ff0000; /* Change as needed */
	}
	button:hover,
	li:hover {
		transform: translateX(0px);
	}
	@keyframes transyhover {
		0% {
			transform: translateY(0);
			opacity: 1;
		}

		25% {
			transform: translateY(-7px);
			opacity: 0;
		}

		50% {
			transform: translateY(7px);
			opacity: 0;
		}
		75% {
			transform: translateY(4px);
			opacity: 1;
		}
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}
	@keyframes transynothover {
		0% {
			transform: translateY(-7px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	button > div:hover {
		animation: transyhover 0.5s ease-out forwards;
		transition: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	button > div:not(:hover) {
		animation: transynothover 0.3s linear forwards;
		transition: cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.clip {
		clip: rect(0, 0, 0, 0);
	}

	@keyframes animateleft {
		0% {
			transform: translateX(100%);
			opacity: 0;
		}
		10% {
			transform: translateX(-10%);
			opacity: 0.7;
		}
		30% {
			transform: translateX(-30%);
			opacity: 1;
		}
		40% {
			transform: translateX(-40%);
			opacity: 1;
		}
		55% {
			transform: translateX(-55%);
			opacity: 0.7;
		}
		70% {
			transform: translateX(-100%);
			opacity: 0;
		}
		100% {
			transform: translateX(100%);
			opacity: 0;
		}
	}

	:root {
		@apply bg-gradient-to-r from-green-400 to-blue-500;
		line-height: inherit;
	}
</style>
