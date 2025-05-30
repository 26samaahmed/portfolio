<script>
  import NavBar from "../../components/NavBar.svelte";
  import college_highlight3 from "$lib/assets/college_highlight3.jpg";
  import college_highlight5 from "$lib/assets/college_highlight5.jpg";
  import college_highlight9 from "$lib/assets/college_highlight9.jpg";
  import college_highlight12 from "$lib/assets/college_highlight12.jpg";

  let college_highlights = [
    {
      img: college_highlight3,
      title: "College Highlight 3",
    },
    {
      img: college_highlight12,
      title: "College Highlight 12",
    },
    {
      img: college_highlight5,
      title: "College Highlight 5",
    },
    {
      img: college_highlight9,
      title: "College Highlight 9",
    },
  ];

  let projects = [
    {
      name: "skysong",
      link: "https://github.com/26samaahmed/skysong",
      teck_stack: [
        "html",
        "css",
        "python",
        "flask",
        "openweathermap api",
        "spotify api",
      ],
      description:
        "☆ a website where the current temperature is displayed and songs of the hour are recommended for people to listen to. The lower the temperature, the calmer the music. If the temperature is high, then upbeat music will be recommended",
    },
    {
      name: "concert tracker",
      link: "https://github.com/26samaahmed/concert-tracker",
      teck_stack: ["sveltekit", "ticketmaster api"],
      description:
        "☆ a website where users can search for concerts by city name and month and see the upcoming concerts in that city",
    },
    {
      name: "fullybeyond",
      link: "https://github.com/26samaahmed/fullybeyond",
      teck_stack: ["sveltekit", "tailwindcss"],
      description:
        "☆ a website for csuf's first student-led designathon that shows information about the event like the schedule, sponsors, and judges developed with 4 other team members",
    },
    {
      name: "acmcsuf.com",
      link: "https://github.com/26samaahmed/acmcsuf.com",
      teck_stack: ["sveltekit", "typescript"],
      description:
        "☆ a website for the association for computing machinery at california state university, fullerton with 70+ contributers that shows information about the club, events, and resources",
    },
    {
      name: "playlist exporter",
      link: "https://github.com/JOwen-ster/PlaylistExporter",
      teck_stack: [
        "python",
        "flask",
        "sveltekit",
        "tailwindcss",
        "spotify api",
        "youtube api",
      ],
      description:
        "☆ a website where users can export their spotify playlists to youtube playlists",
    },
  ];
</script>

<svelte:head>
  <title>Technical Portfolio - Sama Ahmed</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <NavBar />
  <div
    class="flex flex-col rounded-md mr-5 ml-5 sm:ml-10 sm:mr-10 sm:pt-28 md:pb-64 text-center"
  >
    <div
      class="flex flex-col sm:flex-row justify-start items-start w-full mb-8 pt-16 text-left"
    >
      <h1
        class="text-2xl sm:text-3xl md:text-5xl xl:text-5xl sm:mr-4 mb-4 sm:mb-0"
      >
        hi, i'm sama ahmed
      </h1>
    </div>

    <h2 class="text-lg sm:text-xl md:text-3xl xl:text-4xl mb-5 text-left">
      frontend-focused developer with a passion for <em
        >building responsive web applications</em
      >
      and
      <em>creating seamless user experiences</em> — driven to
      <em>lead with initiative</em>
      and
      <em>collaborate with purpose</em> ⋆. 𐙚 ˚
    </h2>
  </div>

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10 mt-24">
    <h1 class="text-3xl sm:text-5xl mb-5">college highlights</h1>
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

  <div class="ml-5 mr-5 sm:ml-10 sm:mr-10 mt-16" id="projects">
    <h1 class="text-5xl text-black mb-5">projects</h1>
    <div class="flex flex-wrap -mx-2">
      {#each projects as project}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-2 mb-7">
          <div class="flex flex-col rounded p-4 border-black border-2 h-full">
            <div class="md:flex md:justify-between items-center">
              <h2 class="text-2xl mb-2">{project.name}</h2>
            </div>

            <p class="mb-2">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-2">
              {#each project.teck_stack as stack}
                <p
                  class="bg-black text-sm text-white rounded-lg w-32 text-center"
                >
                  {stack}
                </p>
              {/each}
            </div>

            <a
              href={project.link}
              target="_blank"
              class="text-blue-500 border-b-2 border-transparent hover:border-current transition duration-300 ease-in-out w-24 text-center"
              >view project</a
            >
          </div>
        </div>
      {/each}
    </div>

    <p class="text-lg text-black mb-5 text-end mr-4">
      check out more on my
      <a class="underline" href="https://github.com/26samaahmed" target="_blank"
        >github</a
      >
    </p>
  </div>

  <div class="text-center mt-16 m-5">
    <p class="text-md mb-2">
      thank you for making it this far! here is a song recommendation for you:
    </p>
    <iframe
      style="border-radius:12px; display:block; margin:auto;"
      class="w-full sm:w-96"
      src="https://open.spotify.com/embed/track/54Z2Nr6JA67vqyNAWVYlBD?utm_source=generator"
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
    made with 💚 by sama ahmed
  </p>
</main>

<style>
  :global(body) {
    background-color: white;
    color: black;
    font-family: "Alegreya Sans SC", sans-serif;
  }
</style>
