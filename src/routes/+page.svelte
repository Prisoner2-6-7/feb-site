<script>
    import Navbar from "$lib/components/navbar.svelte";
	import Reveal from "$lib/components/reveal.svelte";
</script>


<div class="bg-image min-h-screen">
    <Navbar></Navbar>

	<div class="flex justify-center items-center mt-20"> <!-- need to change mt-20 -->
    <Reveal/>

	</div>

</div>
<div class="h-lvh"></div>

<style>
	.bg-image {
		color: white;
		text-align: center;
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
			/* This is the overlay */ url(ramadan1.jpg);
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}
</style>
