<!--
// v0 by Vercel.
// https://v0.dev/t/1Bn0TYvdkpO
-->
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
					required=""
				/>
			</div>
			<div class="space-y-1">
				<label
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					for="email">Email</label
				><input
					class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					id="email"
					required=""
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
					required=""
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
				class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-green-500 hover:bg-green-600 text-white"
				type="submit"
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
