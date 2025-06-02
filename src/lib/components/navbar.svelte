<script>
	let isOpen = false;
	const toggleMenu = () => (isOpen = !isOpen);
</script>

<nav class="navbar flex items-center justify-between p-6 bg-transparent relative">
	<img class="h-20 w-20" src="logo.gif" alt="Logo" />

	<!-- Hamburger Icon -->
	<button class="md:hidden text-white" on:click={toggleMenu}>
		<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	<!-- Nav Links -->
	<ul class="hidden md:flex gap-10 font-extrabold text-white">
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Product</a></li>
		<li><a href="#">Contact</a></li>
	</ul>

	<!-- Mobile Menu -->
	{#if isOpen}
		<ul 
				class="absolute top-full left-0 w-full bg-white/20 backdrop-blur-lg flex flex-col items-center gap-6 py-6 font-extrabold md:hidden z-50">			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Product</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	{/if}
</nav>