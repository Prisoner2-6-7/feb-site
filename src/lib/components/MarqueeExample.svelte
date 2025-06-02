<script>
	// import { url } from "inspector";
	import Marquee from './Marquee.svelte';
	import Reviewcard from './Reviewcard.svelte';
	import BlurIn from '$lib/components/BlurIn.svelte';

	const reviews = [
		{
			name: 'Minhazul Hayat Khan', // Demo Name
			// username: "@Bhide",
			body: 'Enthusiastic helper good guy.', // Demo company one-line description
			img: 'https://ik.imagekit.io/rs8qlp3dz/MinhajMembers.png?updatedAt=1748891614122',
			url: 'https://minhazul.com/'
		},
		{
			name: 'Matthews Ankon Baroi', // Demo Name
			// username: "@Jodd",
			body: 'SWE engineer working for country\'s one of top 5 companies.', // Demo company one-line description
			img: 'https://ik.imagekit.io/rs8qlp3dz/akonmember.png',
			url: 'https://www.linkedin.com/in/matthews-ankon-baroi/'
		},
		{
			name: 'Eureka Labs', // Demo Name
			// username: "@Pokie",
			body: 'Crafting next generation military hardware.', // Demo company one-line description
			img: 'https://ik.imagekit.io/rs8qlp3dz/eurekalabsMember.png',
			url: 'https://eurekaforall.com/'
		},
		{
			name: 'Tashrifur Rahman', // Demo Name
			// username: "@pablo",
			body: 'Social media manager at world renowned NGO.', // Demo company one-line description
			img: 'https://ik.imagekit.io/rs8qlp3dz/Tash.png',
			url: 'https://www.linkedin.com/in/tashrifur-rahman-337073141/'
		},
		// {
		// 	name: 'Cyrus Anushirvan Faizi', // Demo Name
		// 	// username: "@Saloni",
		// 	body: 'Lawyer Turned Entrepreneur.', // Demo company one-line description
		// 	img: 'https://ik.imagekit.io/rs8qlp3dz/lawyer.png',
		// 	url: 'https://www.linkedin.com/in/faizicyrus/'
		// },
		{
			name: 'Rochie Peter Gomes', // Demo Name
			// username: "@Bhai",
			body: 'Building the next generation of collaborative tools.', // Demo company one-line description
			img: 'https://ik.imagekit.io/rs8qlp3dz/peter.png',
			url: 'https://www.linkedin.com/in/rochiepg17/'
		},
		{
			name: 'Global Horizons', // Demo Name
			// username: "@Bhai",
			body: 'Look no further for full support to study and travel abroad.', // Demo company one-line description
			img: 'https://ik.imagekit.io/rs8qlp3dz/GlobalMembers.png',
			url: 'https://www.facebook.com/globalhorizons.bd/'
		},
	];

	let firstRow = reviews.slice(0, reviews.length / 2);
	let secondRow = reviews.slice(reviews.length / 2);
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl"
>
    <span
  class="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-4xl font-bold text-center text-transparent bg-clip-text mb-16"
>
Proud Members of Community
</span>

	<Marquee pauseOnHover class="[--duration:20s]">
		{#each firstRow as item}
			<Reviewcard {...item} />
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:20s]">
		{#each secondRow as item}
			<Reviewcard {...item} />
		{/each}
	</Marquee>
	<div
		class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"
	></div>
</div>
