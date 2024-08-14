<script>
  import NavBar from '../../components/DesignNavBar.svelte';
  import college_highlight4 from '$lib/assets/college_highlight4.jpg';
  import college_highlight2 from '$lib/assets/college_highlight2.jpg';
  import college_highlight6 from '$lib/assets/college_highlight6.jpg';
  import project1 from '$lib/assets/design_project1.png';
  import project2 from '$lib/assets/design_project2.png';
  let resume = 'https://drive.google.com/file/resume.pdf';

</script>

<main>
  <!--TODO: The social logos are black so they dont show up properly-->
  <NavBar />
  <div class="flex flex-col border-white border-4 ml-20 mr-20 mt-10 text-center rounded-md p-52" id="intro-container">
    <h1 class="text-7xl mb-10"> Sama Ahmed</h1>
    <h2 class="text-4xl mb-5">computer science student <br> @california state university, fullerton with a passion for UI/UX design</h2>
    <h2 class="text-3xl">check out my resume <a href={resume} class="text-blue-500">here</a></h2>
  </div>


  <div class="flex flex-col ml-20 mr-20 mt-10">
    <h1 class="text-4xl mb-5">College Highlights</h1>
    <div class="flex flex-row space-x-5">

      <div class="w-1/3 text-center">
        <img src={college_highlight2} alt="college highlight 2" class="rounded-md mb-5 h-64 lg:h-96 w-full object-cover"/>
        <p>ACM CSUF Design Officer</p>
        <p>📍First workshop of Spring 2024</p>
      </div>   
      <div class="w-1/3 text-center">
        <img src={college_highlight4} alt="college highlight 4" class="rounded-md mb-5 h-64 lg:h-96 w-full object-cover"/>
        <p>ACM Design Officer</p>
        <p>📍Portfolio Competition with 25+ submissions, Spring 2024</p>
      </div>
      
      <div class="w-1/3 text-center">
        <img src={college_highlight6} alt="college highlight 6" class="rounded-md mb-5 h-64 lg:h-96 w-full object-cover"/>
        <p>First In Person Designathon</p>
        <p>📍UCLA Vista Designathon, Spring 2024</p>
      </div>  
    </div>
  </div>

  <div class="flex flex-col ml-20 mr-20 mt-24" id="projects">
    <div>
      <div class="flex flex-row justify-between">
        <p class="text-3xl mb-2">Aura</p>
        <p class="text-3xl mb-2">April 2024</p>
      </div>
      <img src={project2} id="project1" alt="project 2" class="rounded-md mb-20 w-full object-cover"/>
    </div>

    <div>
      <div class="flex flex-row justify-between">
        <p class="text-3xl mb-2">E-GO</p>
        <p class="text-3xl mb-2">May 2024</p>
      </div>
      <img src={project1} id="project2" alt="project 1" class="rounded-md mb-20 w-full object-cover"/>
    </div>
  </div>

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

  #project1, #project2 {
    transition: 0.3s;
  }

  #project1:hover, #project2:hover {
    opacity: 0.2;
  }
</style>