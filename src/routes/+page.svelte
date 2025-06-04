<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Reveal from '$lib/components/reveal.svelte';
	import AuroraText from '$lib/components/AuroraText.svelte';
	import BorderBeam from '$lib/components/BorderBeam.svelte';
	import SparklesText from '$lib/components/SparklesText.svelte';
	import MarqueeExample from '$lib/components/MarqueeExample.svelte';
	import FooterAction from '$lib/components/FooterAction.svelte';
	import SimpleCardVariant1 from '$lib/components/card/SimpleCardVariant1.svelte';
	import SchineBorder from '$lib/components/SchineBorder.svelte';
	import { lenis } from 'lenis-svelte';
	import ShiftingDropdown from '$lib/components/shiftingDropDown/ShiftingDropdown.svelte';
	const root = lenis.instance('root');
	// $effect(() => {
	// 	$root?.on('scroll', () => {
	// 		console.log('[Lenis root] scrolling...');
	// 	});
	// });

	// Check for iPhone or iOS
	let isIOS = false;
	if (typeof navigator !== 'undefined') {
		isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
	}
</script>

<main use:lenis>
	<!-- Hero Section -->
	<div class="relative min-h-screen overflow-hidden text-center text-white">
		{#if isIOS}
			<img
				src="ramadan.jpg"
				srcset="ramadan.jpg, https://ik.imagekit.io/rs8qlp3dz/ramadan.jpg"
				alt="Background"
				class="absolute inset-0 z-[-1] h-full w-full object-cover blur-sm brightness-50"
				aria-hidden="true"
			/>
		{:else}
			<div
				class="absolute inset-0 z-[-1] h-full w-full bg-cover bg-fixed bg-center bg-no-repeat blur-sm brightness-50"
				style="background-image: url('ramadan.jpg'), url('https://ik.imagekit.io/rs8qlp3dz/ramadan.jpg');"
				aria-hidden="true"
			></div>
		{/if}

		<Navbar />
		<div
			class="Reveal relative z-[1] flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center pb-48"
		>
			<Reveal />
			<div class="pt-20">
				<a href="https://discord.com/invite/6Pab63hMAq" target="_blank">
					<SchineBorder />
				</a>
			</div>

			<!-- <SimpleCardVariant1/> -->
		</div>
	</div>

	<!-- Intro Text and Discord Image -->
	<div class="min-h-screen bg-white py-12 sm:py-16 md:py-20">
		<div class="mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
			<h1 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
				Future Entrepreneurs Bangladesh - <AuroraText>FEB</AuroraText>
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
		<div class="mx-auto flex justify-center px-4 sm:px-8 md:px-12 lg:px-16">
			<div class="relative rounded-3xl border-2 border-gray-300 sm:border-4">
				<BorderBeam size={150} duration={12} delay={0} />
				<img
					src="discord_general.png"
					alt="Discord General chat for Future Entrepreneurs Bangladesh"
					class="h-full w-full rounded-3xl object-contain"
				/>
			</div>
		</div>
	</div>

	<!-- Section 3: Image and Text Alternating Layout -->
	<div class="min-h-screen bg-amber-50 py-12 sm:py-16 md:py-20">
		<div class="mx-auto max-w-6xl space-y-16 px-4 sm:space-y-24 sm:px-6 md:space-y-32 lg:px-8">
			<!-- Item 1 -->
			<div class="flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:gap-12">
				<div class="w-full md:w-1/2 lg:w-2/5">
					<img
						src="projects.png"
						alt="Share Projects"
						class="h-auto w-full max-w-md rounded-lg object-cover shadow-md md:max-w-none"
					/>
				</div>
				<div class="w-full text-center md:w-1/2 md:text-left lg:w-3/5">
					<div class="mb-4 md:p-0">
						<SparklesText text="Share Projects" />
					</div>
					<p class="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
						Showcase your latest creations and discoveries with the community! Share your projects
						for others to see, get feedback, collaborate and be inspired.
					</p>
				</div>
			</div>

			<div class="flex flex-col items-center gap-6 md:flex-row-reverse md:gap-8 lg:gap-12">
				<div class="w-full md:w-1/2 lg:w-2/5">
					<enhanced:img
						src="/static/questions.png"
						alt="Seek for Advice"
						class="h-auto w-full max-w-md rounded-lg object-cover shadow-md md:max-w-none"
					/>
				</div>
				<div class="w-full text-center md:w-1/2 md:text-left lg:w-3/5">
					<div class="mb-4 md:p-0">
						<SparklesText text="Seek for Advice" />
					</div>
					<p class="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
						Connect with experienced entrepreneurs and experts who can offer valuable insights,
						share their knowledge, and provide mentorship to help you navigate your journey.
					</p>
				</div>
			</div>

			<!-- Item 3 -->
			<div class="flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:gap-12">
				<div class="w-full md:w-1/2 lg:w-2/5">
					<video
						class="h-[362.02px] w-[370px] rounded-lg object-cover"
						autoplay
						muted
						loop
						playsinline
					>
						<source src="event.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div class="w-full text-center md:w-1/2 md:text-left lg:w-3/5">
					<div class="mb-4 md:p-0">
						<SparklesText text="Grow Together" />
					</div>
					<p class="text-base font-medium leading-relaxed text-gray-700 sm:text-lg">
						Join quarterly event meetups to collaboration and get invaluable insights into various
						industries. Network with peers, share experiences, and learn from experts to expand your
						knowledge base, discover new opportunities, and collectively advance your professional
						growth.
					</p>
				</div>
			</div>
		</div>
	</div>

	<MarqueeExample />

	<!-- YouTube Video -->
	<div class="min-h-screen bg-white py-12 sm:py-16 md:py-20">
		<div class="mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
			<p class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
				Watch Community <AuroraText>Discussions</AuroraText>
			</p>
			<p class="mb-8 mt-6 text-base leading-relaxed text-gray-700 sm:mt-8">
				Joining our podcast, where you can engage in direct conversations and connect with fellow
				members on a personal level. Which provides a unique opportunity to discuss ideas, share
				experiences, and build meaningful relationships within our community.
			</p>
		</div>
		<div class="mx-auto flex max-w-3xl items-end justify-center px-4 sm:px-8 md:px-12 lg:px-16">
			<div
				class="relative w-full overflow-hidden rounded-3xl border-2 border-gray-300 pt-[56.25%] sm:border-4"
			>
				<!-- 16:9 Aspect Ratio -->
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
		style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url('invitebanner.jpg'), url('https://ik.imagekit.io/rs8qlp3dz/invitebanner.jpg?updatedAt=1748780851735');"
		role="banner"
	>
		<h2
			class="mb-3 text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl"
		>
			LET'S CONNECT AND GROW TOGETHER
		</h2>
		<FooterAction />
	</div>
</main>
