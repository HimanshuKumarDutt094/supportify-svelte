<script>
	let showDiv = false;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="bg-white">
	<div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
		<div class="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
			<div class="flex grow items-stretch justify-between gap-0 pr-14 max-md:mt-10 max-md:pr-5">
				<div class="bg-white flex w-full flex-col pl-2 pr-2.5 pt-7 pb-3.5">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/21d1dc81-6891-4fc3-974b-b23701b888f6?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
						class="aspect-square object-contain object-center w-4 overflow-hidden max-w-full ml-5 self-start max-md:ml-2.5"
					/>
					<div
						class="hover:bg-neutral-100 self-stretch flex items-stretch justify-between gap-3 mt-9 pl-3 pr-20 py-2.5 rounded-lg max-md:pr-5"
					>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/80ff6d5a-caf0-4fb2-9720-cc39bc962f45?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
						/>
						<div
							class="text-black text-sm leading-5 tracking-normal self-center grow whitespace-nowrap my-auto"
						>
							Recent
						</div>
					</div>
					<button
						on:click={() => (showDiv = !showDiv)}
						class="hover:bg-neutral-100 self-stretch flex items-stretch justify-between gap-3 mt-9 pl-3 pr-20 py-2.5 rounded-lg max-md:pr-5"
					>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b487f1c-9271-403c-bd7a-d36bc420171d?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
						/>
						<span
							class="text-black text-left flex justify-start text-opacity-60 text-sm leading-5 tracking-normal grow whitespace-nowrap self-start"
						>
							Find creators
						</span>
					</button>

					<div
						class="hover:bg-neutral-100 self-stretch flex items-stretch justify-between gap-3 mt-9 pl-3 pr-20 py-2.5 rounded-lg max-md:pr-5"
					>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6e3ec83-fd64-4ef2-bf92-78ab2bec445f?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
						/>
						<div
							class="text-black text-opacity-60 text-sm leading-5 tracking-normal grow whitespace-nowrap self-start"
						>
							Notifications
						</div>
					</div>
					<div
						class="hover:bg-neutral-100 self-stretch flex items-stretch justify-between gap-3 mt-9 pl-3 pr-20 py-2.5 rounded-lg max-md:pr-5"
					>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a4e51f0-4ad3-49e6-9374-d7591f98bf46?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
						/>
						<div
							class="text-black text-opacity-60 text-sm leading-5 tracking-normal self-center grow whitespace-nowrap my-auto"
						>
							Settings
						</div>
					</div>
					<div class="h-[10em]" />
					<div
						class="self-center flex w-[210px] max-w-full items-stretch justify-between gap-5 mt-7"
					>
						<div class="flex items-stretch justify-between gap-3">
							<img
								loading="lazy"
								srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/30d00b36-7f1c-4bfd-8894-b79a1487b353?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d00b36-7f1c-4bfd-8894-b79a1487b353?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d00b36-7f1c-4bfd-8894-b79a1487b353?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d00b36-7f1c-4bfd-8894-b79a1487b353?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d00b36-7f1c-4bfd-8894-b79a1487b353?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d00b36-7f1c-4bfd-8894-b79a1487b353?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d00b36-7f1c-4bfd-8894-b79a1487b353?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30d00b36-7f1c-4bfd-8894-b79a1487b353?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
								class="aspect-square object-contain object-center w-8 shadow-sm overflow-hidden shrink-0 max-w-full"
							/>
							<button class="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
								<div class="text-black text-sm leading-5 tracking-wide whitespace-nowrap">
									Himanshu D
								</div>
								<div
									class="text-black text-opacity-60 text-xs leading-4 tracking-normal whitespace-nowrap"
								>
									Member
								</div>
							</button>
						</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa032280-85cf-4f45-a31f-48bd733e557a?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full mt-2 self-start"
						/>
					</div>
				</div>
				<div class="bg-black bg-opacity-10 flex w-px shrink-0 h-[654px] flex-col" />
			</div>
		</div>
		{#if showDiv}
			<div class="flex flex-col items-stretch w-[65%] ml-5 max-md:w-full max-md:ml-0">
				<div class="flex flex-col items-center my-auto px-5 max-md:max-w-full max-md:mt-10">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca706ca-145c-457c-ab19-15927fe99213?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
						class="aspect-[2.6] object-contain object-center w-[125px] overflow-hidden ml-0 max-w-full"
					/>
					<div class="text-black text-3xl leading-10 tracking-wider w-[309px] max-w-full">
						Find creators you love
					</div>
					<search
						class="border bg-white self-stretch flex flex-col px-3 py-2.5 rounded-full border-solid border-black border-opacity-20 items-start max-md:max-w-full"
					>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c4a9eeb-a936-475b-a11f-0c8b5c4bb6f4?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class=" z-10 absolute object-contain object-center mt-4 overflow-hidden max-w-full"
						/>
						<input
							type="text"
							placeholder="  Search for creators"
							class="border bg-white self-stretch flex flex-col px-3 py-2.5 rounded-full border-solid border-black border-opacity-20 items-start max-md:max-w-full"
						/>
					</search>
					<div
						class="self-stretch flex items-stretch justify-between gap-2 mt-9 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
					>
						<img
							loading="lazy"
							srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/b442294c-1992-4213-b4e1-bff3426581cc?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b442294c-1992-4213-b4e1-bff3426581cc?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b442294c-1992-4213-b4e1-bff3426581cc?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b442294c-1992-4213-b4e1-bff3426581cc?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b442294c-1992-4213-b4e1-bff3426581cc?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b442294c-1992-4213-b4e1-bff3426581cc?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b442294c-1992-4213-b4e1-bff3426581cc?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b442294c-1992-4213-b4e1-bff3426581cc?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class="aspect-[2.22] object-contain object-center w-[71px] border overflow-hidden shrink-0 max-w-full rounded-full border-solid border-black border-opacity-20"
						/>
						<div
							class="border flex items-stretch justify-between gap-2 pl-1.5 pr-7 py-2 rounded-full border-solid border-black border-opacity-20 max-md:pr-5"
						>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a1c919-48f6-420a-9fc6-3ae46c9d1b85?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
								class="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
							/>
							<div class="text-black text-xs leading-3 grow whitespace-nowrap self-start">
								Podcast
							</div>
						</div>
						<img
							loading="lazy"
							srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/f288ae10-9ab6-4c47-ac7c-d7c0301344c9?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f288ae10-9ab6-4c47-ac7c-d7c0301344c9?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f288ae10-9ab6-4c47-ac7c-d7c0301344c9?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f288ae10-9ab6-4c47-ac7c-d7c0301344c9?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f288ae10-9ab6-4c47-ac7c-d7c0301344c9?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f288ae10-9ab6-4c47-ac7c-d7c0301344c9?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f288ae10-9ab6-4c47-ac7c-d7c0301344c9?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f288ae10-9ab6-4c47-ac7c-d7c0301344c9?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class="aspect-[2.75] object-contain object-center w-[88px] border overflow-hidden shrink-0 max-w-full rounded-full border-solid border-black border-opacity-20"
						/>
						<img
							loading="lazy"
							srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dcc4a-d558-4846-8961-21bd6b2d43ce?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dcc4a-d558-4846-8961-21bd6b2d43ce?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dcc4a-d558-4846-8961-21bd6b2d43ce?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dcc4a-d558-4846-8961-21bd6b2d43ce?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dcc4a-d558-4846-8961-21bd6b2d43ce?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dcc4a-d558-4846-8961-21bd6b2d43ce?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dcc4a-d558-4846-8961-21bd6b2d43ce?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc7dcc4a-d558-4846-8961-21bd6b2d43ce?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
							class="aspect-[2.94] object-contain object-center w-[94px] border overflow-hidden shrink-0 max-w-full rounded-full border-solid border-black border-opacity-20"
						/>
						<div
							class="border flex items-stretch justify-between gap-2 pl-1.5 pr-9 py-2 rounded-full border-solid border-black border-opacity-20 max-md:pr-5"
						>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b97d0fe-ca96-4d17-98b4-7c78ef391fc6?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
								class="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
							/>
							<div class="text-black text-xs leading-3 self-center grow whitespace-nowrap my-auto">
								Writing
							</div>
						</div>
						<div
							class="border flex items-stretch justify-between gap-2 pl-2 pr-6 py-2 rounded-full border-solid border-black border-opacity-20 max-md:pr-5"
						>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/55514ef9-4002-44cc-9401-9589e5b43fee?apiKey=51a0d4fd5fa64c4fb20653f7caa5129f&"
								class="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
							/>
							<div class="text-black text-xs leading-3 self-center grow whitespace-nowrap my-auto">
								Photography
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
