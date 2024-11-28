<svelte:head>
  <title>Sama's Design Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import NavBar from '../../components/DesignNavBar.svelte';
  import college_highlight4 from '$lib/assets/college_highlight4.jpg';
  import college_highlight2 from '$lib/assets/college_highlight2.jpg';
  import college_highlight6 from '$lib/assets/college_highlight6.jpg';
  import college_highlight8 from '$lib/assets/college_highlight8.jpg';
  import project1 from '$lib/assets/design_project1.png';
  import project2 from '$lib/assets/design_project2.png';
  import project3 from '$lib/assets/design_project3.png';
  import project4 from '$lib/assets/design_project4.png';

  let college_highlights = [
    {img: college_highlight2, title: 'ACM CSUF Design Officer', info: '📍First Design workshop, Spring 2024'},
    {img: college_highlight4, title: 'ACM CSUF Design Officer', info: '📍Portfolio Competition with 25+ submissions, Spring 2024'},
    {img: college_highlight6, title: 'First In Person Designathon', info: '📍UCLA Vista Designathon, Summer 2024'},
    {img: college_highlight8, title: 'FullyBeyond Web Dev Team Lead', info: '📍CSUF\'s first student-run designathon, Summer 2024'}
  ]

  let projects = [
    {name: 'Fullyhacks', description: 'A website for the biggest hackathon in CSUF, attracting 400+ applicants and 10 sponsors', image: project4, date: 'February 2024'},
    {name: 'Aura', description: 'A mobile app dedicated for deaf people to feel music in a different way through visuals made by people with color synthesia', image: project2, date: 'April 2024'},
    {name: 'Fish Tank', description: 'A mobile app that allows for students in college to meet new friends by joining activities happening on campus', image: project3, date: 'April 2024'},
    {name: 'E-GO', description: 'A mobile app that helps people that need a ride without having to search on multiple platforms', image: project1, date: 'May 2024'}
  ]

</script>

<main>
  <NavBar />
  <div class="flex flex-col rounded-md mr-5 ml-5 sm:ml-10 sm:mr-10 sm:pt-28 md:pb-28" id="intro-container">
    <div class="flex flex-col sm:flex-row justify-center items-center w-full mb-8 pt-16 text-center">
      <h1 class="text-2xl sm:text-3xl md:text-5xl xl:text-5xl sm:mr-4 mb-4 sm:mb-0">I'm Sama Ahmed</h1>
      <div class="hidden sm:block w-[2px] h-16 bg-gray-500"></div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl sm:ml-4">أنا سما أحمد</h1>
    </div>
    <h2 class="text-lg sm:text-xl md:text-3xl xl:text-4xl mb-5 text-center">a passionate computer science student @csuf with a deep interest in ui/ux design, , driven by creating user-centered experiences and eager to bring ideas to life.</h2>
  </div>

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10 mt-24">
    <h1 class="text-3xl sm:text-4xl mb-5">College Highlights</h1>
    <div class="flex flex-wrap">
      {#each college_highlights as highlight}
        <div class="w-full sm:w-1/2 p-2 mb-12  text-center">
          <img src={highlight.img} alt={highlight.title} class="rounded-md mb-5 h-64 lg:h-96 w-full object-cover"/>
          <p>{highlight.title}</p>
          <p>{highlight.info}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10  mt-24" id="projects">
    <h1 class="text-4xl mb-5">Projects <span class="text-sm">(all designed using Figma)</span></h1>
    {#each projects as project}
      <div class="relative group">
        <div class="flex flex-row justify-between">
          <h2 class="text-lg sm:text-2xl mb-2">{project.name}</h2>
          <p class="text-lg sm:text-2xl mb-2">{project.date}</p>
        </div>
        <img src={project.image} alt="project 2" class="rounded-md mb-20 w-full object-cover" />
        <p class="description text-md sm:text-xl m-5 text-white absolute inset-0 flex items-center justify-center opacity-0">
          {project.description}
        </p>
      </div> 
    {/each}
  </div>
  <div class="text-center mt-10 m-5">
    <p class="text-md mb-2">Thank you for making it this far! Here is a song recommendation for you:</p>
    <iframe 
      style="border-radius:12px; display:block; margin:auto;" 
      class="w-full sm:w-96"
      src="https://open.spotify.com/embed/track/0Xt3OOV9aA5g54iUYtaP9z?utm_source=generator" 
      height="100"
      frameBorder="0" 
      allowfullscreen 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy" 
      title="Spotify Song Player">
    </iframe>
  </div>
  <p class="text-center mt-5 text-md md:text-lg text-white">Made with 💚 by Sama Ahmed</p>
</main>


<style>
  :global(body) {
    background-color: black;
    color: white;
    font-family: "Baskervville SC", serif;
  }

  #intro-container {
    transition: 0.3s;
  }
  
  #intro-container:hover {
    background-color: white;
    color: black;
  }

  .group img {
    transition: 0.5s;
  }
  
  .group:hover img {
    opacity: 0.2;
  }

  .group:hover .description {
    opacity: 1;
  }

</style>