<script>
	import { onMount } from 'svelte';

	export let form;
	import { goto } from '$app/navigation';

	let email = '';

	async function handleSubmit(event) {
		event.preventDefault();
		if (typeof window !== 'undefined') {
			const storedEmail = sessionStorage.getItem('email');

			if (storedEmail === email) {
				goto('/home');
			} else {
				goto('/signup');
			}
		}
	}
</script>

<div
	class="bg-white mt-[20vh] p-6 rounded-2xl flex flex-col w-fit mx-auto my-auto justify-center items-center px-5"
>
	<script src="https://accounts.google.com/gsi/client" async></script>
	<div class="flex max-w-full flex-col items-center mt-2em mb-2em p-5e max-md:my-10">
		<div class="text-black text-center text-2xl leading-9 tracking-wide whitespace-nowrap">
			Log in or sign up
		</div>
		<div
			class="rounded self-stretch flex w-full flex-col items-center mt-10 border-solid border-gray-300 max-md:mt-10"
		>
			<div
				class="text-black m-0 p-0 text-center w-full text-sm leading-4 self-center grow whitespace-nowrap my-auto"
			>
				<form class="auth-form w-full m-0 p-0" method="post" action="?/OAuth2">
					<div class="m-0 p-0">
						<button class="btn-auth w-full flex m-0 p-0" type="submit">
							<img
								class="btn-auth-img min-w-full h-14 m-0 p-0"
								src="/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png"
								alt="google sign in"
							/>
						</button>
					</div>
				</form>
			</div>
		</div>

		<div
			class="text-neutral-950 text-opacity-60 text-sm leading-5 tracking-normal whitespace-nowrap mt-4"
		>
			or
		</div>
		<form on:submit={handleSubmit}>
			<input
				bind:value={email}
				id="emailInput"
				type="text"
				placeholder="  enter your email"
				class="border bg-white self-stretch flex shrink-0 h-10 flex-col mt-4 rounded-lg border-solid border-black border-opacity-20"
			/>

			<button
				type="submit"
				class="text-white text-center text-sm leading-4 whitespace-nowrap bg-zinc-950 self-stretch items-center mt-3 px-5 py-3 rounded-lg"
			>
				Continue
			</button>
		</form>
		<div class="text-sky-600 text-center text-sm leading-5 tracking-normal whitespace-nowrap mt-7">
			Need help signing in?
		</div>
		<div
			class="text-cyan-400 text-opacity-60 text-center text-xs leading-4 tracking-normal max-w-[358px] mt-10"
		>
			<span class="text-neutral-950 text-opacity-60">
				By signing up, you are creating a Supportify account and agree
				<br />
				to Supportify's
			</span>
			<span class="text-cyan-400 text-opacity-60"> Terms and Privacy Policy. </span>
		</div>
	</div>
</div>
