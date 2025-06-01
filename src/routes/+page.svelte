<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Reveal from '$lib/components/reveal.svelte';
	import AuroraText from '$lib/components/AuroraText.svelte';
	import GradualSpacing from '$lib/components/GradualSpacing.svelte';
	import BorderBeam from '$lib/components/BorderBeam.svelte';
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
		<div
			class="relative  rounded-3xl border border-gray-700/70 "
		>
			<BorderBeam size={150} duration={12} />
			<img
				src="https://ik.imagekit.io/rs8qlp3dz/feb%20discord%20general.png"
				alt="Interior view of a church altar with a cross"
				class=" rounded-3xl"
			/>
		</div>
	</div>
</div>

<div class="mt-8 min-h-screen bg-amber-50">
	<div class="mx-32">
		<div class="max-w-2x mx-auto p-6 md:p-8">
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
		<div class="flex items-end justify-center">
			<div class="">
				<img
					src="https://media.discordapp.net/attachments/1244616153716752445/1377970217896120361/Screenshot_2025-05-30-17-21-28-41_a23b203fd3aafc6dcb84e438dda678b6.jpg?ex=683ce085&is=683b8f05&hm=b71ec0c754836feda5f42400dd8dea70a5fe22e1a2966da08aa29f5262364591&=&format=webp&width=512&height=696"
					alt="Interior view of a church altar with a cross"
					class=" rounded-lg shadow-md"
				/>
			</div>
		</div>
	</div>
</div>
