<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade } from 'svelte/transition';

	let node;
</script>

<IntersectionObserver element={node} let:intersecting>
	<main>
		<div bind:this={node}>
			{#if intersecting}

			<div transition:fade={{ delay: 200 }} class="mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
				<h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
					Future Entrepreneurs Bangladesh - 
				</h1>
				<p class="mb-8 mt-6 text-base leading-relaxed text-gray-700 sm:mt-8">
					Ambitious people are rare, so if everyone is mixed together randomly, as they tend to be
					early in people's lives, then the ambitious ones won't have many ambitious peers. When you
					take people like this and put them together with other ambitious people, they bloom like
					dying plants given water. Probably most ambitious people are starved for the sort of
					encouragement they'd get from ambitious peers, whatever their age."<br />
					– Paul Graham<br />
					Co-founder, Y Combinator
				</p>
			</div>
				<div transition:fade={{ delay: 600 }}>
                    


                </div>
			{/if}
		</div>
	</main>
</IntersectionObserver>
