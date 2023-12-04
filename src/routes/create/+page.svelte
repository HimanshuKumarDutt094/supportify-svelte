<script>
	import { goto } from '$app/navigation';
	let step = 0;
	let name = '';
</script>

{#if step === 0}
	<div class="mx-auto my-auto flex justify-center items-center">
		<div class="h-auto bg-white mt-[30vh] rounded-2xl p-5">
			<div class="w-[28em]">
				<div class="flex justify-center items-center mx-auto m-4 p-3">
					<span class="text-4xl">Welcome User</span>
				</div>
				<p class="p-0 m-3">
					There are more than 1000 creators on Supportify let u walk you towards the path of bcoming
					one.
				</p>
				<hr class="mt-5 mb-5" />
				<ul>
					<li class="mt-3 mb-4">Start your journey on Supportify</li>
					<li>Invite your fans and conect with them fo free.</li>
				</ul>
				<div>
					<button
						on:click={() => step++}
						type="button"
						class="mt-8 rounded-xl bg-black text-white hover:opacity-50 w-full p-3 m-3"
					>
						Continue
					</button>
				</div>
			</div>
		</div>
	</div>
{:else if step === 1}
	<div>
		<!-- Your second div content -->
		<input bind:value={name} placeholder="Enter your name" />
		<button
			type="button"
			class="mt-8 rounded-xl bg-black text-white hover:opacity-50 w-full p-3 m-3"
			on:click={() => step++}
		>
			Continue
		</button>
	</div>
{:else if step === 2}
	<div>
		<!-- Your third div content -->
		<button
			type="button"
			class="mt-8 rounded-xl bg-black text-white hover:opacity-50 w-full p-3 m-3"
			on:click={() => goto(`/user/${name}`)}
		>
			Continue
		</button>
	</div>
{/if}
