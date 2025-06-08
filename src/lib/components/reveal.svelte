<script>
	import BoxReveal from '$lib/components/BoxReveal.svelte';
</script>

<div
	class="flex h-full w-full max-w-[50rem] flex-col items-center justify-center overflow-hidden rounded-3xl bg-white/0"
>
	<!-- backdrop-blur-sm backdrop-contrast-50 backdrop-grayscale-50 -->
	<BoxReveal boxColor={'#00E8FF'} duration={0.5}>
		<p class="text-[2.7rem] font-semibold sm:text-[3.5rem]">
			Future <span class="text-[#00E8FF]">Entrepreneurs</span><br />Bangladesh
		</p>
	</BoxReveal>

	<BoxReveal boxColor={'#00E8FF'} duration={1}>
		<h2 class="mx-4 mt-[.5rem] text-[1rem]">
			Community For{' '}
			<span class="text-[#00E8FF]">Entrepreneurs</span>
		</h2>
	</BoxReveal>

	<BoxReveal boxColor={'#00E8FF'} duration={0.5}>
		<div class="mx-4 mt-[1.5rem] text-[1rem]">
			<p>
				An open community where people can
				<span class="font-semibold text-[#00E8FF]"> Connect</span>,
				<span class="font-semibold text-[#00E8FF]"> Network</span>,
				<span class="font-semibold text-[#00E8FF]"> Question</span>, and
				<span class="font-semibold text-[#00E8FF]"> Get Help</span>
				<!-- <br />-&gt;100% open-source, and customizable -->
			</p>
		</div>
	</BoxReveal>
</div>
