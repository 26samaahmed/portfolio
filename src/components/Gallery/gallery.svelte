<script>
  export let college_highlights = [];
</script>

<div class="flex flex-col ml-5 mr-5 sm:ml-16 sm:mr-16 mt-24">
  <h1 class="text-3xl sm:text-4xl mb-5">college highlights</h1>
  <div class="flex flex-wrap">
    {#each college_highlights as highlight}
      <div class="w-full sm:w-1/3 p-1 mb-1">
        <img
          src={highlight.img}
          alt={highlight.title}
          class="rounded-sm h-64 lg:h-64 w-full object-cover saturate-0 hover:saturate-100 transition-all duration-400"
        />
      </div>
    {/each}
  </div>
</div>