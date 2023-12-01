<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function signUp() {
		const name = document.getElementById('name').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const terms = document.getElementById('terms').checked;

		if (!terms) {
			alert('Please agree to the terms and conditions');
			return;
		}

		// Check if the user is already signed up
		const storedEmail = sessionStorage.getItem('email');
		if (storedEmail === email) {
			alert('This email is already signed up');
			return;
		}

		// Store the user data in the session storage
		sessionStorage.setItem('name', name);
		sessionStorage.setItem('email', email);
		sessionStorage.setItem('password', password);

		alert('Account created successfully');
		goto('/home');
	}
</script>

<div
	class="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500"
>
	<div class="bg-white w-80 rounded-lg shadow-lg p-5">
		<h2 class="text-2xl font-bold mb-5 text-center">Sign Up</h2>
		<div class="space-y-5">
			<div class="space-y-1">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="name">Name</label
				><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="name"
				/>
			</div>
			<div class="space-y-1">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="email">Email</label
				><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="email"
					type="email"
				/>
			</div>
			<div class="space-y-1">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="password">Password</label
				><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="password"
					type="password"
				/>
			</div>
			<div class="flex items-center">
				<input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="terms"
					type="checkbox"
				/><label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
					for="terms"
				>
					I agree to the terms and conditions
				</label>
			</div>
			<button
				on:click={signUp}
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-green-500 hover:bg-green-600 text-white"
				type="button"
			>
				Sign Up
			</button>
		</div>
		<div class="text-center mt-4">
			<p class="text-gray-500 dark:text-gray-400">
				Already have an account?<a class="underline text-blue-500" href="/login"> Login </a>
			</p>
		</div>
	</div>
</div>
