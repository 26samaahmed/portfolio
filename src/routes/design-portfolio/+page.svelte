<script>
  import NavBar from '../../components/DesignNavBar.svelte';
  import college_highlight3 from '$lib/assets/college_highlight3.jpg';
  import college_highlight4 from '$lib/assets/college_highlight4.jpg';
  let resume = 'https://drive.google.com/file/resume.pdf';

</script>

<main>
  <!--TODO: The social logos are black so they dont show up properly-->
  <NavBar />
  <div class="flex flex-col border-white border-4 ml-20 mr-20 mt-10 text-center rounded-md p-56">
    <h1 class="text-7xl text-white mb-10"> Sama Ahmed</h1>
    <h2 class="text-4xl text-white mb-5">computer science student <br> @california state university, fullerton with a passion for UI/UX design</h2>
    <h2 class="text-3xl text-white">check out my resume <a href={resume} class="text-blue-500">here</a></h2>
  </div>


  <div class="flex flex-col ml-20 mr-20 mt-10">
    <h1 class="text-4xl text-black mb-5">College Highlights</h1>
    <div class="flex flex-row space-x-5">
      <div class="w-1/2 h-3/4 text-center">
        <img src={college_highlight3} alt="college highlight 3" class="rounded-md mb-5"/>
        <p>ACM Design Officer</p>
        <p>📍Portfolio Competition with 25+ submissions, Spring 2024</p>
      </div>
      <div class="w-1/2 h-3/4 text-center">
        <img src={college_highlight4} alt="college highlight 4" class="rounded-md mb-5"/>
        <p>FullyHacks Design Officer</p>
        <p>📍Hackathon with 400+ applicants and 10 sponsors</p>
      </div>  
    </div>
  </div>

</main>


<style>
  :global(body) {
    background-color: black;
    color: white;
  }
</style>