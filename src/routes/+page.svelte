<script>
  let email = "ssama5336@gmail.com";
</script>

<svelte:head>
  <title>Sama Ahmed's Portfolio</title>
  <meta name="description" content="sama ahmed's personal website, 2024" />
  <meta
    name="keywords"
    content="sama ahmed, computer science, cal state fullerton"
  />
  <meta name="author" content="sama ahmed" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <div class="flex flex-col md:flex-row h-screen">
    <div
      class="flex-1 bg-white h-full flex flex-col justify-center items-center"
    >
      <button
        class="text-xl sm:text-2xl absolute left-3 top-2 sm:rounded-3xl rounded-3xl border-2 text-black border-black p-2 pl-5 pr-5"
        ><a href="mailto:ssama5336@gmail.com" target="_blank">contact</a
        ></button
      >
      <h1 class="text-black text-2xl sm:text-4xl">software engineer</h1>

      <div class="flex flex-row items-center space-x-3 mt-3">
        <svg
          class="w-6 h-6 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="6"
            y1="12"
            x2="22"
            y2="12"
            stroke="black"
            stroke-width="2"
          />
          <polyline
            points="12,6 6,12 12,18"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3 class="text-black text-md sm:text-xl">
          <a
            href="/coding-portfolio"
            class="border-b-2 border-transparent hover:border-current transition duration-300 ease-in-out"
            >view technical portfolio</a
          >
        </h3>
      </div>
    </div>

    <div
      class="flex-1 bg-black h-full flex flex-col justify-center items-center"
    >
      <h1 class="text-white text-2xl sm:text-4xl">ui/ux designer</h1>

      <div class="flex flex-row items-center space-x-3 mt-3">
        <h3 class="text-white text-md sm:text-xl">
          <a
            href="/design-portfolio"
            class="border-b-2 border-transparent hover:border-current transition duration-300 ease-in-out"
            >view design portfolio</a
          >
        </h3>
        <svg
          class="w-6 h-6 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2"
            y1="12"
            x2="18"
            y2="12"
            stroke="white"
            stroke-width="2"
          />
          <polyline
            points="12,6 18,12 12,18"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div
    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
  >
    <p class="text-center text-md md:text-xl text-white md:text-black">
      made with 💚 <span class="md:text-white">by sama ahmed</span>
    </p>
  </div>
</main>

<style>
  :global(body) {
    font-family: "Alegreya Sans SC", sans-serif;
  }

  button {
    transition: 0.3s;
  }
  button:hover {
    background-color: black;
    color: white;
  }
</style>
