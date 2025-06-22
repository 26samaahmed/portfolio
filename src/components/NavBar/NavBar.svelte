<script>
  export let buttons = {};
  export let icons = {};
  export let icon_color = "";
  export let underlineColor = "#";

  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<nav
  class="flex mr-5 ml-5 sm:ml-16 sm:mr-16 pt-6 items-center"
>
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
          style="--underline-color: {underlineColor};"
          on:click|preventDefault={scrollIntoView}
          class="text-lg sm:text-3xl inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[var(--underline-color)] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[250ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
          >{button.name}</a
        >
      {:else}
        <a
          href={button.link}
          style="--underline-color: {underlineColor};"
          class="text-lg sm:text-3xl inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[var(--underline-color)] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[250ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
        >
          {button.name}
        </a>
      {/if}
    {/each}
  </div>
</nav>
