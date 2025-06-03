<script>
    import BoxReveal from "$lib/components/BoxReveal.svelte";
</script>
<div
  class="flex flex-col h-full w-full max-w-[50rem] items-center justify-center overflow-hidden bg-white/0 rounded-3xl "> <!-- backdrop-blur-sm backdrop-contrast-50 backdrop-grayscale-50 -->
  <BoxReveal boxColor={"#00E8FF"} duration={0.5}>
    <p class="text-[3.5rem] font-semibold">
      Future <span class="text-[#00E8FF] ">Entrepreneurs</span> Bangladesh
    </p>
  </BoxReveal>

  <BoxReveal boxColor={"#00E8FF"} duration={1}>
    <h2 class="mt-[.5rem] text-[1rem] mx-4">
      Community For{" "}
      <span class="text-[#00E8FF]">Entrepreneurs</span>
    </h2>
  </BoxReveal>

  <BoxReveal boxColor={"#00E8FF"} duration={0.5}>
    <div class="mt-[1.5rem] text-[1rem] mx-4">
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
