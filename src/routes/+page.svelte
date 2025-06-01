<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Reveal from '$lib/components/reveal.svelte';
	import AuroraText from '$lib/components/AuroraText.svelte';
	import GradualSpacing from '$lib/components/GradualSpacing.svelte';
</script>

<div
	class="min-h-screen bg-[url('https://ik.imagekit.io/rs8qlp3dz/ramadan.jpg')] bg-cover bg-fixed bg-center bg-no-repeat text-center text-white"
>
	<Navbar />

	<div class="mt-32 flex items-center justify-center">
		<Reveal />
	</div>
</div>

<div class="min-h-screen">
	<div class="mx-auto max-w-2xl bg-white p-6 md:p-8">
		<h1 class="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
			Future Entrepreneurs Bangladesh <AuroraText>FEB</AuroraText>
		</h1>
		<!-- Paragraph Text -->
		<p class="mb-8 mt-8 text-base leading-relaxed text-gray-700">
			In ipsum ullamcorper bibendum fringilla nulla dictum nibh nullam. Duis quam in bibendum
			gravida tristique dis elementum facilisis tristique. Nunc, dictumst eget purus interdum sed
			lorem ut non. Tellus diam praesent duis morbi et enim magna nam donec. Vitae, blandit ac
			tincidunt sollicitudin.
		</p>

		<!-- Image -->
	</div>
	<div class="mx-32 flex items-end justify-center">
		<div class="">
			<img
				src="https://ik.imagekit.io/rs8qlp3dz/feb%20discord%20general.png"
				alt="Interior view of a church altar with a cross"
				class=" rounded-lg shadow-md"
			/>
		</div>
	</div>
</div>
<div class="min-h-screen bg-amber-50 mt-8">

</div>