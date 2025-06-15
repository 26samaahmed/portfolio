<script>
  import NavBar from "../../components/DesignNavBar.svelte";
  import college_highlight4 from "$lib/assets/college_highlight4.jpg";
  import college_highlight2 from "$lib/assets/college_highlight2.jpg";
  import college_highlight13 from "$lib/assets/college_highlight13.jpg";
  import college_highlight8 from "$lib/assets/college_highlight8.jpg";
  import college_highlight7 from "$lib/assets/college_highlight7.jpg";
  import college_highlight10 from "$lib/assets/college_highlight10.jpg";
  import project1 from "$lib/assets/design_project1.png";
  import project2 from "$lib/assets/design_project2.png";
  import project3 from "$lib/assets/design_project3.png";
  import project4 from "$lib/assets/design_project4.png";

  let college_highlights = [
    {
      img: college_highlight2,
      title: "College Highlight 2",
    },
    {
      img: college_highlight4,
      title: "College Highlight 4",
    },
    {
      img: college_highlight8,
      title: "College Highlight 8",
    },
    {
      img: college_highlight13,
      title: "College Highlight 13",
    },
    {
      img: college_highlight7,
      title: "College Highlight 7",
    },
    {
      img: college_highlight10,
      title: "College Highlight 10",
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
  <title>Creative Portfolio - Sama Ahmed</title>
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
    class="flex flex-col rounded-md mr-5 ml-5 sm:ml-16 sm:mr-16 sm:pt-28 md:pb-64"
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

  <div class="flex flex-col ml-5 mr-5 sm:ml-16 sm:mr-16 mt-24">
    <h1 class="text-3xl sm:text-4xl mb-5">college highlights</h1>
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

  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-8 ml-5 mr-5 sm:ml-16 sm:mr-16 mt-24"
    id="projects"
  >
    <h1 class="col-span-1 sm:col-span-2 text-4xl">projects</h1>
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
          class="description text-md sm:text-lg m-4 text-white absolute inset-0 flex items-center text-center justify-center opacity-0"
        >
          {project.description}
        </p>
      </div>
    {/each}
  </div>

  <div
    class="relative rounded border-white border-2 ml-5 mr-5 sm:ml-16 sm:mr-16 mt-40 pt-8 px-4 pb-4"
  >
    <div class="absolute -top-6 left-4 flex items-center">
      <h1 class="bg-black px-3 text-4xl whitespace-nowrap">જ⁀➴ about me</h1>
    </div>

    <section class="text-xl sm:text-2xl">
      <p>
        i’m an aspiring product designer with a love for creating intuitive,
        user-friendly web apps. my design journey started during my sophomore
        year, when i joined the design team for my college’s annual hackathon,
        fullyhacks 2024. that experience sparked my interest in crafting
        interfaces that not only look good, but feel seamless to use.
      </p>
      <br />
      <p>
        i’ve always been drawn to art, and design has become one of my favorite
        ways to express creativity. over time, i began exploring the world of
        designathons, where i collaborated with other designers to build
        projects in under 24 hours. i’ve participated in events like createsc
        2024 (usc), gator user design 2024 (uf), and vista 2024 (ucla). at
        createsc, which was only my second designathon, my team and i made it to
        the top 15 finalists.
      </p>
      <br />
      <p>
        inspired by that experience, my friends and i decided to organize our
        own: fullybeyond 2024, the first designathon hosted by a csu. with my
        background in frontend development, i led the website’s development.
        after six months of planning, we successfully launched the event and
        received 100+ applicants. it was one of the most meaningful moments of
        my college experience, and it reminded me how much i love working with
        others to bring ideas to life. i’m now interning as a user experience researcher
        at lpl financial in san diego to explore how user insights can shape stronger, 
        more meaningful designs. my goal is to keep building experiences that truly connect.
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
  <p class="text-center text-md md:text-lg">
    made with <span class="text-sm">💚</span> by sama ahmed
  </p>
  <p class="text-center text-md md:text-lg -mt-2">
    all rights reserved © 2025
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
