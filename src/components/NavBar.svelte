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
  {name: 'Projects', link: '/projects'}
]

</script>

<main>
  <nav class="flex ml-20 mr-20 mt-7">
    <div class="flex-1 justify-start space-x-8">
      {#each socials as social}
        <a href={social.link} class="no-underline hover:underline text-black text-2xl"><img src={social.img} alt={social.name} class="w-10 h-10 inline-block"/></a>
      {/each}
    </div>

    <div class="flex justify-end space-x-8">
      {#each buttons as button}
        <a href={button.link} class="no-underline hover:underline text-black text-2xl">{button.name}</a>
      {/each}
    </div>
  </nav>
</main>