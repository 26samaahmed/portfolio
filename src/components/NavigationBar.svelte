<script>
  export let buttons = {};
  export let icons = {};
  export let icon_color = "";

  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<main>
  <nav class="flex mr-5 ml-5 sm:ml-16 sm:mr-16 mt-7 items-center">
    <div class="flex-1 justify-start space-x-3 sm:space-x-5">
      {#each icons as icon}
        <a
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          class="text-2xl"
        >
          <svg
            class="w-7 h-7 sm:w-10 sm:h-10 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path fill={icon_color} d={icon.path}></path>
          </svg>
        </a>
      {/each}
    </div>

    <div class="flex justify-end space-x-3 md:space-x-8">
      {#each buttons as button}
        {#if button.link === "#projects"}
          <a
            href={button.link}
            on:click|preventDefault={scrollIntoView}
            class="buttons text:lg sm:text-3xl">{button.name}</a
          >
        {:else}
          <a href={button.link} class="buttons text:lg sm:text-3xl"
            >{button.name}</a
          >
        {/if}
      {/each}
    </div>
  </nav>
</main>

<style>
  .buttons {
    display: inline-block;
    position: relative;
  }
  .buttons::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    background-color: #000000;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  .buttons:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>
