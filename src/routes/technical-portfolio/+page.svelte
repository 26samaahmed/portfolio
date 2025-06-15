<script>
  import NavBar from "../../components/NavBar.svelte";
  import college_highlight3 from "$lib/assets/college_highlight3.jpg";
  import college_highlight5 from "$lib/assets/college_highlight5.jpg";
  import college_highlight9 from "$lib/assets/college_highlight9.jpg";
  import college_highlight12 from "$lib/assets/college_highlight12.jpg";
  import college_highlight1 from "$lib/assets/college_highlight1.jpg";
  import college_highlight6 from "$lib/assets/college_highlight6.jpg";

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
    {
      img: college_highlight6,
      title: "College Highlight 6",
    },
    {
      img: college_highlight1,
      title: "College Highlight 1",
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
    class="flex flex-col rounded-md mr-5 ml-5 sm:ml-16 sm:mr-16 sm:pt-28 md:pb-64 text-center"
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

  <div class="flex flex-col ml-5 mr-16 sm:ml-16 sm:mr-15 mt-24">
    <h1 class="text-3xl sm:text-4xl mb-5 font-medium">college highlights</h1>
    <div class="flex flex-wrap">
      {#each college_highlights as highlight}
        <div class="w-full sm:w-1/3 p-1 mb-1">
          <img
            src={highlight.img}
            alt={highlight.title}
            class="rounded-sm h-64 lg:h-64 w-full object-cover saturate-0 hover:saturate-100 transition-all duration-400"
          />
        </div>
      {/each}
    </div>
  </div>

  <div class="ml-5 mr-5 sm:ml-16 sm:mr-16 mt-16" id="projects">
    <h1 class="text-4xl text-black mb-2 font-medium">projects</h1>
    <div class="flex flex-wrap -mx-2">
      {#each projects as project}
        <div class="w-full sm:w-1/2 lg:w-1/3 px-2">
          <div
            class="flex flex-col relative rounded border-black border-2 h-72 mt-10 pt-6 px-4"
          >
            <div
              class="md:flex md:justify-between items-center absolute -top-4 left-4"
            >
              <h2 class="text-2xl bg-white px-3">{project.name}</h2>
            </div>

            <p class="mb-2 text-lg">{project.description}</p>
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
              class="text-lg text-blue-500 border-b-2 border-transparent hover:border-current transition duration-300 ease-in-out w-24 text-center"
              >view project</a
            >
          </div>
        </div>
      {/each}
    </div>

    <p class="text-xl text-black mt-5 text-end mr-4">
      check out more on my
      <a class="underline" href="https://github.com/26samaahmed" target="_blank"
        >github</a
      >
    </p>
  </div>

  <div
    class="relative rounded border-black border-2 ml-5 mr-5 sm:ml-16 sm:mr-16 mt-40 pt-8 px-4 pb-4"
  >
    <div class="absolute -top-6 left-4 flex items-center">
      <h1 class="bg-white px-3 text-4xl font-medium whitespace-nowrap">
        જ⁀➴ more about me
      </h1>
    </div>

    <section class="text-xl sm:text-2xl">
      <p>
        i’m an egyptian immigrant who moved to the united states at 15, bringing
        a unique perspective to my work in tech. i’m passionate about both
        product management and software engineering, especially frontend
        development. i love building intuitive, user-centered web apps and
        exploring how design, engineering, and product come together to create
        great user experiences.
      </p>
      <br />
      <p>
        currently, i’m a rising senior at cal state fullerton majoring in
        computer science. since my sophomore year, i’ve been actively involved
        in the largest tech club on campus, taking on leadership roles like
        co-directing fullyhacks 2025, where i led 50+ organizers and helped
        attract over 250 participants. i also co-led the open source team and
        served as webmaster during the 2024–2025 academic year, teaching
        students about open source tools and helping them contribute to
        projects.
      </p>
      <br />
      <p>
        outside of tech, i enjoy watching k-dramas, listening to music, and
        designing websites. in 2024, i had the amazing experience of seeing my
        favorite artists, ateez, live in concert ⋆ 𐙚 ̊.
      </p>
    </section>
  </div>

  <div class="text-center mt-16 m-3">
    <p class="text-lg mb-2">
      thank you for making it this far, here is a song recommendation for you!
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
  <p class="text-center text-md md:text-lg text-black">
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
