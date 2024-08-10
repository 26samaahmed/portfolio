<script>
  import NavBar from '../components/NavBar.svelte';

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
   <!-- <button class="absolute top-10 right-10 bg-transparent border-2 border-white rounded-full w-150 p-3 px-8 text-20 cursor-pointer text-white hover:bg-white hover:text-black">Contact</button>-->

    <div class="flex-1 bg-white h-full content-center text-center"> 
      <h1 class="text-black text-4xl">Aspiring Software Engineer</h1>
        <h3 class="text-black mt-24 absolute bottom-2"><a href='/coding-portfolio' class="no-underline hover:underline">View Coding Portfolio</a></h3>
    </div>

    <div class="flex-1 bg-black h-full content-center text-center">
      <h1 class="text-white text-4xl">Aspiring Designer</h1>
      <h3 class="text-white mt-24 absolute bottom-2"><a href='/' class="no-underline hover:underline">View Design Portfolio</a></h3>
    </div>

  </div>
</main>

<style>
  :global(body) {
    font-family: "Goldman", sans-serif;
  }
</style>