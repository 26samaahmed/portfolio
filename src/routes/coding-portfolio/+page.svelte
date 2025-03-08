<svelte:head>
  <title>sama's coding portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<script>
  import NavBar from "../../components/NavBar.svelte";
  import college_highlight3 from "$lib/assets/college_highlight3.jpg";
  import college_highlight5 from "$lib/assets/college_highlight5.jpg";
  import college_highlight9 from "$lib/assets/college_highlight9.jpg";
  import college_highlight12 from "$lib/assets/college_highlight12.jpg";

  let project_type = false; // false = personal project, true = group project

  let projects = [
    {
      name: "SkySong",
      link: "https://github.com/26samaahmed/skysong",
      teck_stack:
        "python, flask, html, css, spotify api, openweather api, spotipy",
      description:
        "A website where the current temperature is displayed and songs of the hour are recommended for people to listen to. The lower the temperature, the calmer the music. If the temperature is high, then upbeat music will be recommended.",
      project_type: project_type,
    },
    {
      name: "Concert Tracker",
      link: "https://github.com/26samaahmed/concert-tracker",
      teck_stack: "ticketmaster api, sveltekit, html, css, javascript",
      description:
        "A website where users can search for concerts by city name and month and see the upcoming concerts in that city.",
      project_type: project_type,
    },
    {
      name: "Fullybeyond",
      link: "https://github.com/26samaahmed/fullybeyond",
      teck_stack: "sveltekit, tailwindcss, javascript",
      description:
        "A website for CSUF's first student-led designathon that shows information about the event like the schedule, sponsors, and judges developed with 4 other team members.",
      project_type: !project_type,
    },
    {
      name: "acmcsuf.com",
      link: "https://github.com/26samaahmed/acmcsuf.com",
      teck_stack: "sveltekit, typescript",
      description:
        "A website for the Association for Computing Machinery at California State University, Fullerton with 50+ contributers that shows information about the club, events, and resources. As the webmaster, I am responsible for maintaining the website and updating it with new information.",
      project_type: !project_type,
    },
    {
      name: "PlaylistExporter",
      link: "https://github.com/JOwen-ster/PlaylistExporter",
      teck_stack:
        "python, flask, svelte, tailwindcss, spotify api, youtube api",
      description:
        "A website where users can export their spotify playlists to youtube playlists.",
      project_type: !project_type,
    },
  ];

  let college_highlights = [
    {
      img: college_highlight3,
      title: "FullyHacks Design Officer",
      info: "📍Fullyhacks Day, Spring 2024",
    },
    {
      img: college_highlight5,
      title: "ACM CSUF Design Officer",
      info: "📍Last ACM General Meeting, Spring 2024",
    },
    {
      img: college_highlight9,
      title: "Open Source Software Co-Team Lead/Webmaster",
      info: "📍First Contibutions oss worskhop, Fall 2024",
    },
    {
      img: college_highlight12,
      title: "OSS Commencement",
      info: "📍oss commencement, Fall 2024",
    },
  ];
</script>

<main>
  <NavBar />
  <div
    class="flex flex-col rounded-md mr-5 ml-5 sm:ml-10 sm:mr-10 sm:pt-28 md:pb-64"
    id="intro-container"
  >
    <div
      class="flex flex-col sm:flex-row justify-start items-start w-full mb-8 pt-16 text-left"
    >
      <h1
        class="text-2xl sm:text-3xl md:text-5xl xl:text-5xl sm:mr-4 mb-4 sm:mb-0"
      >
        I'm Sama Ahmed
      </h1>
      <div class="hidden sm:block w-[2px] h-16 bg-gray-500"></div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-5xl sm:ml-4">
        أنا سما أحمد
      </h1>
    </div>

    <h2 class="text-lg sm:text-xl md:text-3xl xl:text-4xl mb-5 text-left">
      a passionate computer science student @csuf who loves solving problems
      with code and enjoys taking on leadership roles to help projects and teams
      succeed
    </h2>
  </div>

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10 mt-24">
    <h1 class="text-3xl sm:text-4xl mb-5">College Highlights</h1>
    <div class="flex flex-wrap">
      {#each college_highlights as highlight}
        <div class="w-full sm:w-1/2 p-2 mb-12 text-center">
          <img
            src={highlight.img}
            alt={highlight.title}
            class="rounded-md mb-5 h-64 lg:h-96 w-full object-cover"
          />
          <p class="text-md sm:text-lg">{highlight.info}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10 mt-16" id="projects">
    <h1 class="text-4xl text-black mb-5">Projects</h1>
    {#each projects as project}
      <div
        class="flex flex-col bg-black text-white rounded-xl p-5 mb-7"
        id="project-container"
      >
        <div class="md:flex md:justify-between items-center">
          <h2 class="text-2xl mb-2">{project.name}</h2>
          {#if project.project_type == false}
            <p
              class="bg-white text-sm text-black rounded-lg w-36 mb-5 text-center"
            >
              Personal Project
            </p>
          {:else}
            <p
              class="bg-white text-sm text-black rounded-lg w-36 mb-5 text-center"
            >
              Group Project
            </p>
          {/if}
        </div>
        <h3 class="mb-2">Tech Stack: {project.teck_stack}</h3>
        <p class="mb-2">- {project.description}</p>
        <a href={project.link} target="_blank" class="text-blue-500"
          >View Project</a
        >
      </div>
    {/each}
    <p class="text-lg text-black mb-5 text-end mr-4">
      Check out more on my <a
        class="underline"
        href="https://github.com/26samaahmed"
        target="_blank">github</a
      >
    </p>
  </div>

  <div class="text-center mt-16 m-5">
    <p class="text-md mb-2">
      Thank you for making it this far! Here is a song recommendation for you:
    </p>
    <iframe
      style="border-radius:12px; display:block; margin:auto;"
      class="w-full sm:w-96"
      src="https://open.spotify.com/embed/track/1NaSrCqTnZdlusQ82SJhGN?utm_source=generator"
      height="100"
      frameBorder="0"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Song Player"
    >
    </iframe>
  </div>
  <p class="text-center mt-5 text-md md:text-lg text-black">
    Made with 💚 by Sama Ahmed
  </p>
</main>

<style>
  :global(body) {
    background-color: white;
    font-family: "Baskervville SC", serif;
  }

  #project-container {
    transition: 0.3s;
  }

  #project-container:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
</style>
