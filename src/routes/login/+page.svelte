<script>
	export let form;
</script>

<!-- <div class="flex h-fit rounded-xl flex-cols items-center p-8 mt-[40vh] mx-auto my-auto bg-white">
	<div class="mb-5 p-5">
		<img src="/logo-supportify.png" alt="Logo" />
	</div>
	<div class="mt-3 p-4 bg-blue-400">
		<search class="auth-form" method="post" action="?/OAuth2">
			<div>
				<button class="btn-auth" type="submit">
					<img
						class="btn-auth-img"
						src="/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png"
						alt="google sign in"
					/>
				</button>
			</div>
		</search>
	</div>
</div> -->
<div
	class="bg-white mt-[20vh] p-6 rounded-2xl flex flex-col w-fit mx-auto my-auto justify-center items-center px-5"
>
	<script src="https://accounts.google.com/gsi/client" async></script>
	<div class="flex max-w-full flex-col items-center mt-2em mb-2em p-5e max-md:my-10">
		<div class="text-black text-center text-2xl leading-9 tracking-wide whitespace-nowrap">
			Log in or sign up
		</div>
		<div
			class="rounded border self-stretch flex w-full flex-col items-center mt-10 border-solid border-gray-300 max-md:mt-10"
		>
			<div
				class="text-black text-center w-full text-sm leading-4 self-center grow whitespace-nowrap my-auto"
			>
				<form class="auth-form w-full" method="post" action="?/OAuth2">
					<div>
						<button class="btn-auth w-full" type="submit">
							<div
								class="g_id_signin w-full"
								data-type="standard"
								data-shape="rectangular"
								data-theme="outline"
								data-text="continue_with"
								data-size="large"
								data-logo_alignment="left"
								data-width="400px"
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
		<input
			type="text"
			placeholder="  enter your email"
			class="border bg-white self-stretch flex shrink-0 h-10 flex-col mt-4 rounded-lg border-solid border-black border-opacity-20"
		/>

		<div
			class="text-white text-center text-sm leading-4 whitespace-nowrap bg-zinc-950 self-stretch items-center mt-3 px-5 py-3 rounded-lg"
		>
			Continue
		</div>
		<div class="text-sky-600 text-center text-sm leading-5 tracking-normal whitespace-nowrap mt-7">
			Need help signing in?
		</div>
		<div
			class="text-cyan-400 text-opacity-60 text-center text-xs leading-4 tracking-normal max-w-[358px] mt-10"
		>
			<span class="text-neutral-950 text-opacity-60">
				By signing up, you are creating a Supportify account and agree
				<br />
				to Supportify’s
			</span>
			<span class="text-cyan-400 text-opacity-60"> Terms and Privacy Policy. </span>
		</div>
	</div>
</div>
