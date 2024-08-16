<script>
  import github from '$lib/assets/github.png';
  import linkedin from '$lib/assets/linkedin.png';
  import mail from '$lib/assets/mail.png';

  let socials = [
    {name: 'Github', link: 'https://github.com/26samaahmed', img: github},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/sama-ahmedd/', img: linkedin},
    {name: 'Email', link: '', img: mail}
  ]

  let buttons = [
    {name: 'Home', link: '/'},
    {name: 'Projects', link: '#projects'},
  ]

  function scrollIntoView({ target }) {
      const el = document.querySelector(target.getAttribute('href'));
      if (!el) return;
      el.scrollIntoView({
        behavior: 'smooth'
      });
  }

</script>

<main>
  <nav class="flex ml-5 mr-5 sm:ml-10 sm:mr-10 mt-7 text-black">
    <div class="flex-1 justify-start space-x-3 sm:space-x-8">
      {#each socials as social}
        <a href={social.link} target="_blank" class="no-underline hover:underline text-2xl"><img src={social.img} alt={social.name} class="w-5 h-5 sm:w-10 sm:h-10 inline-block"/></a>
      {/each}
    </div>

    <div class="flex justify-end space-x-8">
      {#each buttons as button}
        {#if button.link === '#projects'}
          <a href={button.link} on:click|preventDefault={scrollIntoView} class="no-underline hover:underline text:lg sm:text-2xl">{button.name}</a>
        {:else}
          <a href={button.link} class="no-underline hover:underline text:lg sm:text-2xl">{button.name}</a>
        {/if}
      {/each}
    </div>
  </nav>
</main>