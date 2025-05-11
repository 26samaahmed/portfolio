<script>
  import NavBar from "../../components/NavBar.svelte";
  import college_highlight3 from "$lib/assets/college_highlight3.jpg";
  import college_highlight5 from "$lib/assets/college_highlight5.jpg";
  import college_highlight9 from "$lib/assets/college_highlight9.jpg";
  import college_highlight12 from "$lib/assets/college_highlight12.jpg";

  let projects = [
    {
      name: "SkySong",
      link: "https://github.com/26samaahmed/skysong",
      teck_stack: [
        "SvelteKit",
        "TailwindCSS",
        "JavaScript",
        "Openweathermap API",
        "Spotify API",
      ],
      description:
        "A website where the current temperature is displayed and songs of the hour are recommended for people to listen to. The lower the temperature, the calmer the music. If the temperature is high, then upbeat music will be recommended.",
    },
    {
      name: "Concert Tracker",
      link: "https://github.com/26samaahmed/concert-tracker",
      teck_stack: [
        "SvelteKit",
        "HTML",
        "CSS",
        "JavaScript",
        "Ticketmaster API",
      ],
      description:
        "A website where users can search for concerts by city name and month and see the upcoming concerts in that city."
    },
    {
      name: "Fullybeyond",
      link: "https://github.com/26samaahmed/fullybeyond",
      teck_stack: ["SvelteKit", "TailwindCSS", "JavaScript"],
      description:
        "A website for CSUF's first student-led designathon that shows information about the event like the schedule, sponsors, and judges developed with 4 other team members."
    },
    {
      name: "acmcsuf.com",
      link: "https://github.com/26samaahmed/acmcsuf.com",
      teck_stack: ["Sveltekit", "TypeScript"],
      description:
        "A website for the Association for Computing Machinery at California State University, Fullerton with 70+ contributers that shows information about the club, events, and resources. As the webmaster, I am responsible for maintaining the website and updating it with new information."
    },
    {
      name: "PlaylistExporter",
      link: "https://github.com/JOwen-ster/PlaylistExporter",
      teck_stack: [
        "Python",
        "Flask",
        "Svelte",
        "TailwindCSS",
        "Spotify API",
        "YouTube API",
      ],
      description:
        "A website where users can export their spotify playlists to youtube playlists."
    },
  ];

  let college_highlights = [
    {
      img: college_highlight3,
      title: "College Highlight 3",
    },
    {
      img: college_highlight5,
      title: "College Highlight 5",
    },
    {
      img: college_highlight9,
      title: "College Highlight 9",
    },
    {
      img: college_highlight12,
      title: "College Highlight 12",
    },
  ];
</script>

<svelte:head>
  <title>sama's coding portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
    rel="stylesheet"
  />
</svelte:head>

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
    <h1 class="text-3xl sm:text-5xl mb-5">College Highlights</h1>
    <div class="flex flex-wrap">
      {#each college_highlights as highlight}
        <div class="w-full sm:w-1/2 p-2 mb-2">
          <img
            src={highlight.img}
            alt={highlight.title}
            class="rounded-sm h-64 lg:h-96 w-full object-cover saturate-0 hover:saturate-100 transition-all duration-400"
          />
        </div>
      {/each}
    </div>
  </div>

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10 mt-16">
    <h1 class="text-5xl text-black mb-5">Projects</h1>
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

        <div class="flex flex-wrap gap-2">
          {#each project.teck_stack as stack}
            <p
              class="bg-white text-sm text-black rounded-lg mb-2 w-32 text-center"
            >
              {stack}
            </p>
          {/each}
        </div>
        <p class="mb-2">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          class="text-blue-500 border-b-2 border-transparent hover:border-current transition duration-300 ease-in-out w-20 text-center"
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
      src="https://open.spotify.com/embed/track/0luIZaA4wYL4ftOvMAn3nU?utm_source=generator"
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
    font-family: "Shadows Into Light", cursive;
  }
</style>
