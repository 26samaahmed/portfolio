<script>
  import white_arrow from '$lib/assets/white_arrow.png';
  import black_arrow from '$lib/assets/black_arrow.png';
  let email = 'ssama5336@gmail.com';
</script>

<head>
  <title>Sama Ahmed's Portfolio</title>
  <meta name="description" content="sama ahmed's personal website, 2024">
  <meta name="keywords" content="sama ahmed, computer science, cal state fullerton">
  <meta name="author" content="sama ahmed">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<main>
  <div class="flex flex-col md:flex-row h-screen">
    <div class="flex-1 bg-white h-full flex flex-col justify-center items-center">
      <button class="text-xl sm:text-2xl absolute left-3 top-2 sm:rounded-3xl rounded-3xl border-4 text-black border-black p-2 pl-5 pr-5"><a href="mailto:ssama5336@gmail.com" target="_blank">Contact</a></button>
      <h1 class="text-black text-2xl sm:text-4xl">Aspiring Software Engineer</h1>
      <div class="flex flex-row items-center space-x-3">
        <img src={black_arrow} alt="black arrow" class="w-5 h-5 mt-2" />
        <h3 class="text-black text-md sm:text-2xl mt-2">
          <a href='/coding-portfolio' class="no-underline hover:underline">View Coding Portfolio</a>
        </h3>
      </div>
    </div>
  
    <div class="flex-1 bg-black h-full flex flex-col justify-center items-center">
      <h1 class="text-white text-2xl sm:text-4xl">Aspiring Designer</h1>
      <div class="flex flex-row items-center space-x-3">
        <h3 class="text-white text-md sm:text-2xl mt-2">
          <a href='/design-portfolio' class="no-underline hover:underline">View Design Portfolio</a>
        </h3>
        <img src={white_arrow} alt="white arrow" class="w-5 h-5 mt-2" />
      </div>
    </div>
  </div>
  
  <!-- Footer -->
  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
    <p class="text-center text-md md:text-2xl text-white md:text-black">Made with 💚 b<span class="md:text-white">y Sama Ahmed</span></p>
  </div>
  
  
</main>

<style>
  :global(body) {
    font-family: "Goldman", sans-serif;
  }

  button {
    transition: 0.3s;
  }
  button:hover{
    background-color: black;
    color: white;
  }
</style>