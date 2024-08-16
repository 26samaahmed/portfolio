<script>
  import NavBar from '../../components/DesignNavBar.svelte';
  import college_highlight4 from '$lib/assets/college_highlight4.jpg';
  import college_highlight2 from '$lib/assets/college_highlight2.jpg';
  import college_highlight6 from '$lib/assets/college_highlight6.jpg';
  import college_highlight8 from '$lib/assets/college_highlight8.jpg';
  import project1 from '$lib/assets/design_project1.png';
  import project2 from '$lib/assets/design_project2.png';
  let resume = 'https://drive.google.com/file/resume.pdf';

  let college_highlights = [
    {img: college_highlight2, title: 'ACM CSUF Design Officer', info: '📍First Design workshop, Spring 2024'},
    {img: college_highlight4, title: 'ACM CSUF Design Officer', info: '📍Portfolio Competition with 25+ submissions, Spring 2024'},
    {img: college_highlight6, title: 'First In Person Designathon', info: '📍UCLA Vista Designathon, Spring 2024'},
    {img: college_highlight8, title: 'FullyBeyond Web Dev Team Lead', info: '📍CSUF\'s first student-run designathon, Summer 2024'}
  ]

  let projects = [
    {name: 'Aura', description: 'A mobile app that is dedicated for deaf people to feel music in a different way through visuals made by people with color synthesia', image: project2, date: 'April 2024'},
    {name: 'E-GO', description: 'A mobile app that helps people that need a ride without having to search on multiple platforms', image: project1, date: 'May 2024'},
  ]

</script>

<main>
  <NavBar />
  <div class="flex flex-col border-white border-4 ml-5 mr-5 sm:ml-10 sm:mr-10 mt-10 text-center rounded-md p-16 pl-10 pr-10 sm:p-24 md:p-32 lg:p-24 lg:pt-32 lg:pb-32 xl:p-52" id="intro-container">
    <h1 class="text-3xl sm:text-4xl md:text-6xl xl:text-7xl mb-10"> Sama Ahmed</h1>
    <h2 class="text-lg sm:text-xl md:text-3xl xl:text-4xl mb-5">computer science student <br> @california state university, fullerton with a passion for UI/UX design</h2>
    <h2 class="text-lg sm:text-xl md:text-2xl xl:text-3xl">check out my resume <a href={resume} class="text-blue-500">here</a></h2>
  </div>


  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10 mt-24">
    <h1 class="text-3xl sm:text-4xl mb-5">College Highlights</h1>
    <div class="flex flex-wrap">
      {#each college_highlights as highlight}
        <div class="w-full sm:w-1/2 p-2 mb-12 md:mb-q0 text-center">
          <img src={highlight.img} alt={highlight.title} class="rounded-md mb-5 h-64 lg:h-96 w-full object-cover"/>
          <p>{highlight.title}</p>
          <p>{highlight.info}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10  mt-24" id="projects">
    <h1 class="text-4xl mb-5">Projects</h1>
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
  <p class="text-center text-md md:text-xl text-white">Made with 💚 by Sama Ahmed</p>
</main>


<style>
  :global(body) {
    background-color: black;
    color: white;
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