<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	let images = [];
	let users = [];
	onMount(async () => {
		const res = await fetch('https://www.randomuser.me/api/?results=30');
		const data = await res.json();
		const imageSet = new Set();
		images = [];
		users = [];

		for (const user of data.results) {
			const userImage = user.picture.large;
			if (!imageSet.has(userImage)) {
				imageSet.add(userImage);
				images.push(userImage);
				users.push(user.name.first + ' ' + user.name.last);
			}
		}
		await Promise.all(
			images.map((src) => {
				return new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = resolve;
				});
			})
		);
		const scrollers = document.querySelectorAll('.scroller');
		console.log(scrollers);
		// If a user hasn't opted in for recuded motion, then we add the animation
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			addAnimation();
		}

		function addAnimation() {
			scrollers.forEach((scroller) => {
				console.log(scroller.children);
				// add data-animated="true" to every `.scroller` on the page
				scroller.setAttribute('data-animated', true);

				// Make an array from the elements within `.scroller-inner`
				const scrollerInner = scroller.querySelector('.scroller__inner');
				const scrollerContent = Array.from(scrollerInner.children);

				// For each item in the array, clone it
				// add aria-hidden to it
				// add it into the `.scroller-inner`
				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					duplicatedItem.setAttribute('aria-hidden', true);
					scrollerInner.appendChild(duplicatedItem);
				});
			});
		}
	});

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
				console.log(val);
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
			<a href="/" class=" "> <img src="/logo-supportify.png" alt="Supportify" /></a>
		</div>
		<div class="flex gap-[1.4rem] items-center justify-end min-w-fit flex-1">
			<div
				class="relative leading-4 rounded-3xl
					"
			>
				<form class="flex items-center justify-center rounded-[6rem] border relative">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label
						id="search"
						class="absolute w-[1px] h-[1px] overflow-hidden p-0 m-[-1px] clip whitespace-nowrap border-[0]"
					>
						Find a Creator
					</label>
					<input
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
			</div>
			<button
				type="button"
				class="   p-[0.5rem]
				
				
				rounded-3xl

				bg-transparent {isHoveredAny ? 'text-black' : 'text-white'}
				border-solid
				border
				 {isHoveredAny
					? 'border-black text-black hover:bg-black hover:text-white '
					: 'hover:bg-white hover:border-white hover:text-black'}
				"><div><a href="/login"><span>Log In</span></a></div></button
			>
			<button
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
								<li class="m-2">Get to know your listeners</li>
								<li class="m-2">Cut through the noise</li>
								<li class="m-2">More ways to get paid</li>
								<li class="m-2">Other podcasters on Supportify</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Video creators</li>
								<li class="m-2">Turn your viewers into your people</li>
								<li class="m-2">Reach every fan, every time</li>
								<li class="m-2">More ways to get paid</li>
								<li class="m-2">Other video creators on Supportify</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Musicians</li>
								<li class="m-2">From your mind to their ears</li>
								<li class="m-2">Share more than music</li>
								<li class="m-2">More ways to get paid</li>
								<li class="m-2">Other musicians on Supportify</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Artists</li>
								<li class="m-2">Earning made easy</li>
								<li class="m-2">Create what inspires you</li>
								<li class="m-2">Build community around your art</li>
								<li class="m-2">Other artists on Supportify</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Game devs</li>
								<li class="m-2">A safe way to get paid</li>
								<li class="m-2">Selling made simple</li>
								<li class="m-2">Where real community thrives</li>
								<li class="m-2">Other game devs on Supportify</li>
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
								<li class="m-2">Getting started on Supportify</li>
								<li class="m-2">Make it your own</li>
								<li class="m-2">Reach every fan, every time</li>
								<li class="m-2">Showcase your work</li>
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
								<li class="m-2">App integrations</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Get business support</li>
								<li class="m-2">Help when you need it</li>
								<li class="m-2">Policies to protect you</li>
								<li class="m-2">Payments powered by Supportify</li>
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
								<li class="m-2">Creator Hub</li>
								<li class="m-2">Resources to get started</li>
								<li class="m-2">Grow your membership</li>
								<li class="m-2">Connect with creators</li>
							</ul>
						</li>
						<li>
							<ul class="hoverable">
								<li class="m-2">Newsroom</li>
								<li class="m-2">Supportify HQ</li>
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

								Creaivity
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
				{#each images as image, i (image)}
					{#if image}
						<div class="">
							<img src={image} alt="bruh" class="rounded-xl" />
							<span class="">{users[i]}</span>
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
	<div class="sc-e47a6cfe-10 irMECK">
		<div class="sc-e47a6cfe-12 sc-e47a6cfe-33 hpccAO dcOMug">
			<div style="color:#9E94F7" class="sc-e47a6cfe-15 ewhea-d">3 SIMPLE STEPS.</div>
			<h1 style="color:#9E94F7" class="sc-e47a6cfe-16 bVRsTo">HOW DOES <br />IT WORK?</h1>
			<div color="#9E94F7" class="sc-e47a6cfe-20 fhjERi" />
			<div class="sc-e47a6cfe-18 blyzrt">
				It could not be easier! Create a membership with custom requirements though our dashboard.
				Then offer your membership to your supporters. Members will be awarded with a NFT, which
				will be added in their wallet.
			</div>
		</div>
		<div class="sc-e47a6cfe-12 sc-e47a6cfe-34 hpccAO gnBAlN">
			<div class="sc-e47a6cfe-31 eJtmTk">
				<div class="sc-e47a6cfe-32 eMfErV">
					<div class="sc-e47a6cfe-28 lfaBAf">
						<div class="sc-e47a6cfe-29 hmvGEK">1</div>
						<div class="sc-e47a6cfe-30 kuGDmR">Define membership requirements</div>
					</div>
					<div class="sc-e47a6cfe-28 lfaBAf">
						<div class="sc-e47a6cfe-29 hmvGEK">2</div>
						<div class="sc-e47a6cfe-30 kuGDmR">Create &amp; offer membership</div>
					</div>
					<div class="sc-e47a6cfe-28 lfaBAf">
						<div class="sc-e47a6cfe-29 hmvGEK">3</div>
						<div class="sc-e47a6cfe-30 kuGDmR">Gate access to features or content</div>
					</div>
				</div>
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
		min-block-size: 100vh;
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
