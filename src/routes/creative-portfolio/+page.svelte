<script>
  import NavBar from "../../components/NavBar/Creative_NavBar.svelte";
  import Gallery from "../../components/Gallery/Gallery.svelte";
  import Footer from "../../components/Footer/Footer.svelte";

  import highlight_7 from "$lib/assets/highlight_7.jpg";
  import highlight_8 from "$lib/assets/highlight_8.jpg";
  import highlight_9 from "$lib/assets/highlight_9.jpg";
  import highlight_10 from "$lib/assets/highlight_10.jpg";
  import highlight_11 from "$lib/assets/highlight_11.jpg";
  import highlight_12 from "$lib/assets/highlight_12.jpg";

  import project1 from "$lib/assets/design_project1.png";
  import project2 from "$lib/assets/design_project2.png";
  import project3 from "$lib/assets/design_project3.png";
  import project4 from "$lib/assets/design_project4.png";

  let college_highlights = [
    {
      img: highlight_7,
      title: "College Highlight 7",
    },
    {
      img: highlight_8,
      title: "College Highlight 8",
    },
    {
      img: highlight_9,
      title: "College Highlight 9",
    },
    {
      img: highlight_10,
      title: "College Highlight 10",
    },
    {
      img: highlight_11,
      title: "College Highlight 11",
    },
    {
      img: highlight_12,
      title: "College Highlight 12",
    },
  ];

  let projects = [
    {
      name: "moaverse",
      description:
        "a website for txt, a k-pop group, that showcases information about the members and their music in an interactive way",
      image: project4,
      date: "april 2024",
    },
    {
      name: "aura",
      description:
        "a mobile app that reimagines how deaf individuals experience music — using visuals created by people with color synesthesia",
      image: project2,
      date: "april 2024",
    },
    {
      name: "fishtank",
      description:
        "an ai-powered app that curates local events based on user prompts and interests — designed to foster connection and well-being among college students",
      image: project3,
      date: "april 2024",
    },
    {
      name: "e-go",
      description:
        "a mobile app that helps students find convenient, affordable rides by integrating public transportation options and offering rewards for using them",
      image: project1,
      date: "may 2024",
    },
  ];

  let song_url =
    "https://open.spotify.com/embed/track/19kHhX6f6EfLU7rcO3RqjO?utm_source=generator";

  let color = "#FFFFFF";
  let path1 = {
    href: "/",
    text: "return home",
  };

  let path2 = {
    href: "/technical-portfolio",
    text: "explore technical portfolio",
  };
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

<body class="bg-black text-white">
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

  <Gallery {college_highlights} />

  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-8 ml-5 mr-5 sm:ml-16 sm:mr-16 mt-24"
    id="projects"
  >
    <h1 class="col-span-1 sm:col-span-2 text-4xl">projects</h1>
    {#each projects as project}
      <div class="relative mb-8 group">
        <div class="flex flex-row justify-between">
          <h2 class="text-lg sm:text-2xl mb-2">{project.name}</h2>
          <p class="text-lg sm:text-2xl mb-2">{project.date}</p>
        </div>
        <img
          src={project.image}
          alt="project"
          class="rounded-md w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-20"
        />
        <p
          class="text-md sm:text-lg m-4 text-white absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
        others to bring ideas to life. i’m now interning as a user experience
        researcher at lpl financial in san diego to explore how user insights
        can shape stronger, more meaningful designs. my goal is to keep building
        experiences that truly connect ⋆ 𐙚 ̊.
      </p>
    </section>
  </div>

  <Footer {song_url} {path1} {path2} {color} />
</body>

<style>
  :global(body) {
    font-family: "Alegreya Sans SC", sans-serif;
  }
</style>
