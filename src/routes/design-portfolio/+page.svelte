<script>
  import NavBar from '../../components/DesignNavBar.svelte';
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


</main>


<style>
  :global(body) {
    background-color: black;
    color: white;
  }
</style>