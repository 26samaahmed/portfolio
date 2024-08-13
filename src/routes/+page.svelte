<script>
  import NavBar from '../components/NavBar.svelte';
  import white_arrow from '$lib/assets/white_arrow.png';
  import black_arrow from '$lib/assets/black_arrow.png';
</script>

<head>
  <title>Sama Ahmed's Portfolio</title>
  <meta name="description" content="sama ahmed's personal website">
  <meta name="keywords" content="sama ahmed, computer science, cal state fullerton">
  <meta name="author" content="sama ahmed">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<main>
  <div class="flex flex-col md:flex-row h-screen">
    <div class="flex-1 bg-white h-full flex flex-col justify-center items-center"> 
      <h1 class="text-black text-2xl sm:text-4xl">Aspiring Software Engineer</h1>
      <img src={white_arrow} alt="white arrow" class="w-10 h-10 mt-24"/>
      <h3 class="text-black text-2xl mt-24"><a href='/coding-portfolio' class="no-underline hover:underline">View Coding Portfolio</a></h3>
    </div>
  
    <div class="flex-1 bg-black h-full flex flex-col justify-center items-center">
      <h1 class="text-white text-2xl sm:text-4xl">Aspiring Designer</h1>
      <img src={black_arrow} alt="black arrow" class="w-10 h-10 mt-24"/>
      <h3 class="text-white text-2xl mt-24"><a href='/design-portfolio' class="no-underline hover:underline">View Design Portfolio</a></h3>
    </div>
  </div>
  
</main>

<style>
  :global(body) {
    font-family: "Goldman", sans-serif;
  }
</style>