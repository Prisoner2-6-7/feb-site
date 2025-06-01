<script>
	// import { url } from "inspector";
  import Marquee from "./Marquee.svelte";
  import Reviewcard from "./Reviewcard.svelte";

  const reviews = [
  {
    name: "Alex Innovator", // Demo Name
    // username: "@Bhide",
    body: "Pioneering AI solutions for a smarter tomorrow.", // Demo company one-line description
    img: "https://avatar.vercel.sh/jack",
    url: "https://google.com"
  },
  {
    name: "Brenda Builder", // Demo Name
    // username: "@Jodd",
    body: "Your trusted partner in sustainable energy.", // Demo company one-line description
    img: "https://avatar.vercel.sh/jill",
    url: "https://google.com"
  },
  {
    name: "Charles Connector", // Demo Name
    // username: "@Pokie",
    body: "Crafting beautiful and intuitive user experiences.", // Demo company one-line description
    img: "https://avatar.vercel.sh/john",
    url: "https://google.com"
  },
  {
    name: "Diana Developer", // Demo Name
    // username: "@pablo",
    body: "Delivering cutting-edge cloud infrastructure globally.", // Demo company one-line description
    img: "https://avatar.vercel.sh/jane",
    url: "https://google.com"
  },
  {
    name: "Edward Engineer", // Demo Name
    // username: "@Saloni",
    body: "Revolutionizing e-commerce with personalized shopping.", // Demo company one-line description
    img: "https://avatar.vercel.sh/jenny",
    url: "https://google.com"
  },
  {
    name: "Fiona Founder", // Demo Name
    // username: "@Bhai",
    body: "Building the next generation of collaborative tools.", // Demo company one-line description
    img: "https://avatar.vercel.sh/james",
    url: "https://google.com"
  },
];


  let firstRow = reviews.slice(0, reviews.length / 2);
  let secondRow = reviews.slice(reviews.length / 2);
</script>

<div
  class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl"
>
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
