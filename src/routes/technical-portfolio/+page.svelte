<script>
  import NavBar from "../../components/NavBar/Technical_NavBar.svelte";
  import Gallery from "../../components/Gallery/Gallery.svelte";
  import Footer from "../../components/Footer/Footer.svelte";

  import highlight_1 from "$lib/assets/highlight_1.jpg";
  import hightlight_2 from "$lib/assets/highlight_2.jpg";
  import hightlight_3 from "$lib/assets/highlight_3.jpg";
  import hightlight_4 from "$lib/assets/highlight_4.jpg";
  import hightlight_5 from "$lib/assets/highlight_5.jpg";
  import hightlight_6 from "$lib/assets/highlight_6.jpg";

  let college_highlights = [
    {
      img: highlight_1,
      title: "College Highlight 1",
    },
    {
      img: hightlight_2,
      title: "College Highlight 2",
    },
    {
      img: hightlight_3,
      title: "College Highlight 3",
    },
    {
      img: hightlight_4,
      title: "College Highlight 4",
    },
    {
      img: hightlight_5,
      title: "College Highlight 5",
    },
    {
      img: hightlight_6,
      title: "College Highlight 6",
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
        "☆ a web app that displays the current temperature and recommends songs to match the weather — chill tracks for colder days, upbeat ones for the heat.",
    },
    {
      name: "concert tracker",
      link: "https://github.com/26samaahmed/concert-tracker",
      teck_stack: ["sveltekit", "ticketmaster api"],
      description:
        "☆ a website where users can search for concerts by city and month, and explore upcoming events happening in that location.",
    },
    {
      name: "fullybeyond",
      link: "https://github.com/26samaahmed/fullybeyond",
      teck_stack: ["sveltekit", "tailwindcss"],
      description:
        "☆ the official site for csuf’s first student-led designathon, built with a team of 4. it features the event schedule, sponsors, and more.",
    },
    {
      name: "acm csuf website",
      link: "https://github.com/EthanThatOneKid/acmcsuf.com",
      teck_stack: ["sveltekit", "typescript"],
      description:
        "☆ the official website for csuf’s acm chapter, built with 70+ contributors. it highlights club info, events, and resources for members.",
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
        "☆ a tool that lets users convert and export their spotify playlists directly to youtube playlists.",
    },
  ];

  let song_url =
    "https://open.spotify.com/embed/track/6Stw2SepJwrkjT60fusHxR?utm_source=generator";
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

<body class="bg-white text-black">
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

  <Gallery {college_highlights} />

  <div class="ml-5 mr-5 sm:ml-16 sm:mr-16 mt-24" id="projects">
    <h1 class="text-4xl text-black mb-2">projects</h1>
    <div class="flex flex-wrap -mx-2">
      {#each projects as project}
        <div class="w-full sm:w-1/2 lg:w-1/3 pb-8 px-2">
          <div
            class="flex flex-col relative rounded border-black border-2 mt-10 pt-6 px-4 h-full min-h-[10rem] sm:min-h-[10rem]"
          >
            <div
              class="md:flex md:justify-between items-center absolute -top-4 left-4"
            >
              <h2 class="text-2xl bg-white px-3 max-w-full break-words">
                {project.name}
              </h2>
            </div>

            <p class="mb-2 text-lg">{project.description}</p>
            <div class="flex flex-wrap gap-2 mb-2">
              {#each project.teck_stack as stack}
                <p
                  class="bg-black text-sm text-white rounded-lg px-3 py-1 text-center whitespace-nowrap"
                >
                  {stack}
                </p>
              {/each}
            </div>

            <div class="mt-auto mb-2">
              <a
                href={project.link}
                target="_blank"
                class="text-lg text-blue-500 border-b-2 border-transparent hover:border-current transition duration-300 ease-in-out text-center"
                >view project</a
              >
            </div>
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
      <h1 class="bg-white px-3 text-4xl whitespace-nowrap">જ⁀➴ about me</h1>
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
        in acm at csuf, the largest tech club on campus, taking on leadership
        roles like co-directing fullyhacks 2025, where i led 50+ organizers and
        helped attract over 250 participants. i also co-led the open source team
        and served as webmaster during the 2024–2025 academic year, teaching
        students about open source tools and helping them contribute to
        projects. i’m currently interning as a user experience researcher at lpl
        financial in san diego.
      </p>
      <br />
      <p>
        outside of tech, i enjoy watching k-dramas, listening to music, and
        designing websites. in 2024, i had the amazing experience of seeing my
        favorite artists, ateez and txt, live in concert ⋆ 𐙚 ̊.
      </p>
    </section>
  </div>

  <Footer {song_url} />
</body>

<style>
  :global(body) {
    font-family: "Alegreya Sans SC", sans-serif;
  }
</style>
