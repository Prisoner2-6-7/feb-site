<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Reveal from '$lib/components/reveal.svelte';
	import AuroraText from '$lib/components/AuroraText.svelte';
	// import GradualSpacing from '$lib/components/GradualSpacing.svelte'; // Not used in the template below
	import BorderBeam from '$lib/components/BorderBeam.svelte';
	import SparklesText from '$lib/components/SparklesText.svelte';
</script>

<!-- Hero Section -->
<div
	class="min-h-screen bg-[url('ramadan.webp'),url('https://ik.imagekit.io/rs8qlp3dz/ramadan.jpg')] bg-cover bg-fixed bg-center bg-no-repeat text-center text-white"
>
	<Navbar />

	<div class="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 pt-16 sm:pt-24 md:pt-32">
		<!-- Adjusted top padding for Navbar height and mobile -->
		<Reveal />
	</div>
</div>

<!-- Section 2: Intro Text and Discord Image -->
<div class="min-h-screen bg-white py-12 sm:py-16 md:py-20">
	<div class="mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
			Future Entrepreneurs Bangladesh <AuroraText>FEB</AuroraText>
		</h1>
		<p class="mb-8 mt-6 text-base leading-relaxed text-gray-700 sm:mt-8">
			In ipsum ullamcorper bibendum fringilla nulla dictum nibh nullam. Duis quam in bibendum
			gravida tristique dis elementum facilisis tristique. Nunc, dictumst eget purus interdum sed
			lorem ut non. Tellus diam praesent duis morbi et enim magna nam donec. Vitae, blandit ac
			tincidunt sollicitudin.
		</p>
	</div>
	<div class="mx-auto flex max-w-3xl items-end justify-center px-4 sm:px-8 md:px-12 lg:px-16">
		<div class="relative w-full rounded-3xl border-2 border-gray-300 sm:border-4">
			<BorderBeam size={150} duration={12} delay={0} />
			<img
				src="https://ik.imagekit.io/rs8qlp3dz/feb%20discord%20general.png"
				alt="Discord General chat for Future Entrepreneurs Bangladesh"
				class="h-auto w-full rounded-3xl object-contain"
			/>
		</div>
	</div>
</div>

<!-- Section 3: Image and Text Alternating Layout -->
<div class="min-h-screen bg-amber-50 py-12 sm:py-16 md:py-20">
	<div class="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8 sm:space-y-24 md:space-y-32">
		<!-- Item 1 -->
		<div class="flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:gap-12">
			<div class="w-full md:w-1/2 lg:w-2/5">
				<img
					src="https://media.discordapp.net/attachments/1244616153716752445/1377970217896120361/Screenshot_2025-05-30-17-21-28-41_a23b203fd3aafc6dcb84e438dda678b6.jpg?ex=683ce085&is=683b8f05&hm=b71ec0c754836feda5f42400dd8dea70a5fe22e1a2966da08aa29f5262364591&=&format=webp&width=512&height=696"
					alt="Ministry highlight 1"
					class="h-auto w-full max-w-md rounded-lg object-cover shadow-md md:max-w-none"
				/>
			</div>
			<div class="w-full text-center md:w-1/2 md:text-left lg:w-3/5">
				<div class="mb-4 md:p-0">
					<SparklesText text="Our Vision" />
				</div>
				<p class="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum asperiores
					consectetur quam! Tenetur repellendus nostrum molestiae in corporis, tempora debitis
					perferendis tempore fugiat itaque hic porro consequuntur ea adipisci?
				</p>
			</div>
		</div>

		<!-- Item 2 (Reversed) -->
		<div class="flex flex-col items-center gap-6 md:flex-row-reverse md:gap-8 lg:gap-12">
			<div class="w-full md:w-1/2 lg:w-2/5">
				<img
					src="https://media.discordapp.net/attachments/1244616153716752445/1377970217896120361/Screenshot_2025-05-30-17-21-28-41_a23b203fd3aafc6dcb84e438dda678b6.jpg?ex=683ce085&is=683b8f05&hm=b71ec0c754836feda5f42400dd8dea70a5fe22e1a2966da08aa29f5262364591&=&format=webp&width=512&height=696"
					alt="Ministry highlight 2"
					class="h-auto w-full max-w-md rounded-lg object-cover shadow-md md:max-w-none"
				/>
			</div>
			<div class="w-full text-center md:w-1/2 md:text-left lg:w-3/5">
				<div class="mb-4 md:p-0">
					<SparklesText text="Community Focus" />
				</div>
				<p class="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum asperiores
					consectetur quam! Tenetur repellendus nostrum molestiae in corporis, tempora debitis
					perferendis tempore fugiat itaque hic porro consequuntur ea adipisci?
				</p>
			</div>
		</div>

		<!-- Item 3 -->
		<div class="flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:gap-12">
			<div class="w-full md:w-1/2 lg:w-2/5">
				<img
					src="https://media.discordapp.net/attachments/1244616153716752445/1377970217896120361/Screenshot_2025-05-30-17-21-28-41_a23b203fd3aafc6dcb84e438dda678b6.jpg?ex=683ce085&is=683b8f05&hm=b71ec0c754836feda5f42400dd8dea70a5fe22e1a2966da08aa29f5262364591&=&format=webp&width=512&height=696"
					alt="Ministry highlight 3"
					class="h-auto w-full max-w-md rounded-lg object-cover shadow-md md:max-w-none"
				/>
			</div>
			<div class="w-full text-center md:w-1/2 md:text-left lg:w-3/5">
				<div class="mb-4 md:p-0">
					<SparklesText text="Growth Together" />
				</div>
				<p class="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum asperiores
					consectetur quam! Tenetur repellendus nostrum molestiae in corporis, tempora debitis
					perferendis tempore fugiat itaque hic porro consequuntur ea adipisci?
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Section 4: YouTube Video -->
<div class="min-h-screen bg-white py-12 sm:py-16 md:py-20">
	<div class="mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
			Watch Our Latest Event <AuroraText>Highlights</AuroraText>
		</h1>
		<p class="mb-8 mt-6 text-base leading-relaxed text-gray-700 sm:mt-8">
			In ipsum ullamcorper bibendum fringilla nulla dictum nibh nullam. Duis quam in bibendum
			gravida tristique dis elementum facilisis tristique. Nunc, dictumst eget purus interdum sed
			lorem ut non. Tellus diam praesent duis morbi et enim magna nam donec. Vitae, blandit ac
			tincidunt sollicitudin.
		</p>
	</div>
	<div class="mx-auto flex max-w-3xl items-end justify-center px-4 sm:px-8 md:px-12 lg:px-16">
		<div class="relative w-full overflow-hidden rounded-3xl border-2 border-gray-300 pt-[56.25%] sm:border-4">
			<!-- 16:9 Aspect Ratio -->
			<BorderBeam size={150} duration={12} delay={0} />
			<iframe
				class="absolute left-0 top-0 h-full w-full rounded-3xl"
				src="https://www.youtube.com/embed/1VcytY556E8?si=mXfH-8Alv5ql_Plb"
				title="YouTube video player for FEB Event"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			>
			</iframe>
		</div>
	</div>
</div>

<!-- Section 5: Call to Action Banner -->
<div
	class="
    flex h-72 w-full
    flex-col items-center justify-center bg-cover
    bg-center p-4 text-center
    sm:h-80 md:h-96
  "
	style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://ik.imagekit.io/rs8qlp3dz/invitebanner.jpg?updatedAt=1748780851735');"
	role="banner"
>
	<h2 class="mb-3 text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
		LETS <br class="sm:hidden" /> CONNECT AND GROW TOGETHER
	</h2>
	<a href="YOUR_DISCORD_INVITE_LINK_HERE" target="_blank" rel="noopener noreferrer"
		class="text-xs font-medium uppercase tracking-wide text-orange-400 hover:text-orange-300 sm:text-sm"
	>
		CLICK HERE TO JOIN OUR DISCORD
	</a>
</div>