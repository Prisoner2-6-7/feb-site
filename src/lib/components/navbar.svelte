<script>
	let isOpen = false;
	const toggleMenu = () => (isOpen = !isOpen);
	import ButtonMagnetic from './ButtonMagnetic.svelte';
</script>

<nav class="navbar relative flex items-center justify-between bg-transparent p-6">
	<img class="h-20 w-20" src="logo.gif" alt="Logo" />

	<!-- Nav links for pc-->
	<ul class="hidden gap-10 font-extrabold text-white md:flex">
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Product</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
	
	<ButtonMagnetic />


	<!-- Hamburger Icon -->
	<button class="text-white md:hidden" on:click={toggleMenu}>
		<svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	<!-- Mobile -->
	{#if isOpen}
		<ul
			class="absolute left-0 top-full z-50 flex w-full flex-col items-center gap-6 bg-white/20 py-6 font-extrabold backdrop-blur-lg md:hidden"
		>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Product</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	{/if}
</nav>
