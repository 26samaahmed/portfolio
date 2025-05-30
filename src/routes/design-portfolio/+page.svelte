<script>
  import NavBar from "../../components/DesignNavBar.svelte";
  import college_highlight4 from "$lib/assets/college_highlight4.jpg";
  import college_highlight2 from "$lib/assets/college_highlight2.jpg";
  import college_highlight13 from "$lib/assets/college_highlight13.jpg";
  import college_highlight8 from "$lib/assets/college_highlight8.jpg";
  import project1 from "$lib/assets/design_project1.png";
  import project2 from "$lib/assets/design_project2.png";
  import project3 from "$lib/assets/design_project3.png";
  import project4 from "$lib/assets/design_project4.png";

  let college_highlights = [
    {
      img: college_highlight2,
      title: "First Design workshop",
    },
    {
      img: college_highlight4,
      title: "Portfolio Competition with 25+ submissions",
    },
    {
      img: college_highlight8,
      title: "CSUF's first student-run designathon",
    },
    {
      img: college_highlight13,
      title: "Designathon 101 Workshop",
    },
  ];

  let projects = [
    {
      name: "moaverse",
      description:
        "a website for a txt, a k-pop group, that displays information about the group and their music",
      image: project4,
      date: "april 2024",
    },
    {
      name: "aura",
      description:
        "a mobile app dedicated for deaf people to feel music in a different way through visuals made by people with color synthesia",
      image: project2,
      date: "april 2024",
    },
    {
      name: "fishtank",
      description:
        "a mobile app that allows for students in college to meet new friends by joining activities happening on campus",
      image: project3,
      date: "april 2024",
    },
    {
      name: "e-go",
      description:
        "a mobile app that helps people that need a ride without having to search on multiple platforms",
      image: project1,
      date: "may 2024",
    },
  ];
</script>

<svelte:head>
  <title>Design Portfolio - Sama Ahmed</title>
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
    class="flex flex-col rounded-md mr-5 ml-5 sm:ml-10 sm:mr-10 sm:pt-28 md:pb-64"
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
      ui/ux enthusiast with a passion for <em
        >designing intuitive web interfaces</em
      >
      and
      <em>building user-centered web applications</em> — driven to
      <em>bring ideas to life</em>
      through purposeful, creative design ⋆. 𐙚 ˚
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

  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-12 ml-5 mr-5 sm:ml-10 sm:mr-10 mt-24"
    id="projects"
  >
    <h1 class="col-span-1 sm:col-span-2 text-5xl">projects</h1>
    {#each projects as project}
      <div class="relative group mb-8">
        <div class="flex flex-row justify-between">
          <h2 class="text-lg sm:text-2xl mb-2">{project.name}</h2>
          <p class="text-lg sm:text-2xl mb-2">{project.date}</p>
        </div>
        <img
          src={project.image}
          alt="project 2"
          class="rounded-md w-full h-full object-cover"
        />
        <p
          class="description text-md sm:text-lg m-5 text-white absolute inset-0 flex items-center text-center justify-center opacity-0"
        >
          {project.description}
        </p>
      </div>
    {/each}
  </div>

  <div class="text-center mt-16 m-5">
    <p class="text-md mb-2">
      thank you for making it this far! here is a song recommendation for you:
    </p>
    <iframe
      style="border-radius:12px; display:block; margin:auto;"
      class="w-full sm:w-96"
      src="https://open.spotify.com/embed/track/0xtIp0lgccN85GfGOekS5L?utm_source=generator"
      height="100"
      frameBorder="0"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify Song Player"
    >
    </iframe>
  </div>
  <p class="text-center mt-5 text-md md:text-lg text-white">
    made with 💚 by sama ahmed
  </p>
</main>

<style>
  :global(body) {
    background-color: black;
    color: white;
    font-family: "Alegreya Sans SC", sans-serif;
  }

  .group img {
    transition: 0.5s;
  }

  .group:hover img {
    opacity: 0.2;
  }

  .group:hover .description {
    opacity: 1;
  }
</style>
