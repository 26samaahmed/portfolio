<svelte:head>
  <title>Sama's Coding Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import NavBar from '../../components/NavBar.svelte';
  import college_highlight1 from '$lib/assets/college_highlight1.jpg';
  import college_highlight3 from '$lib/assets/college_highlight3.jpg';
  import college_highlight5 from '$lib/assets/college_highlight5.jpg';
  import college_highlight7 from '$lib/assets/college_highlight7.jpg';
  import resume from '$lib/assets/resume.pdf';
  

  let projects =[
    {name: 'SkySong', link: 'https://github.com/26samaahmed/skysong', teck_stack: 'spotify api, openweather api, python, flask, html, css, spotipy', description: 'A website where the current temperature is displayed and songs of the hour are recommended for people to listen to. The lower the temperature, the calmer the music. If the temperature is high, then upbeat music will be recommended.'},
    {name: 'Concert Tracker', link: 'https://github.com/26samaahmed/concert-tracker', teck_stack: 'ticketmaster api, sveltekit, html, css, javascript', description: 'A website where users can search for concerts by city name and month and see the upcoming concerts in that city.'},
    {name: 'Fullybeyond', link: 'https://github.com/26samaahmed/fullybeyond', teck_stack: 'sveltekit, tailwindCSS, javascript', description: 'A website for CSUF\'s first student-led designathon that shows information about the event like the schedule, sponsors, and judges developed with 4 other team members.'},
    {name: 'acmcsuf.com', link: 'https://github.com/26samaahmed/acmcsuf.com', teck_stack: 'sveltekit, typescript', description: 'A website for the Association for Computing Machinery at California State University, Fullerton with 50+ contributers that shows information about the club, events, and resources. As the webmaster, I am responsible for maintaining the website and updating it with new information.'},
  ]

  let top_songs = [
    {i: 1, name: 'Hush-Hush', artist: 'Ateez, BE:FIRST', link: 'https://open.spotify.com/track/27JQxefJsCVa6xTbEFBVXG?si=25d0c5faf35946b6', img: 'placeholder'},
    {i: 2, name: "Honestly", artist: 'RIIZE', link: 'https://open.spotify.com/track/39WIXqHwC7mAkoM57ZqGkp?si=aa34361488264b44', img: 'placeholder'},
    {i: 3, name: 'Chk Chk Boom', artist: 'Stray Kids', link: 'https://open.spotify.com/track/09keT5ocFhEd5W5HidiUNq?si=b8ac8a39b20c42cc', img: 'placeholder'},
    {i: 4, name: "Impossible", artist: 'RIIZE', link: 'https://open.spotify.com/track/1JTmrZwZhaP1yYJtuzfvJ9?si=24ee3553016f4f61', img: 'placeholder'},
    {i: 5, name: 'This World', artist: 'Ateez', link: 'https://open.spotify.com/track/6QDcmN2Avrim8kNoCHkw9s?si=6e0061541fde40e3', img: 'placeholder'},
    {i: 6, name: 'MoonStruck', artist: 'Enhypen', link: 'https://open.spotify.com/track/3gYWGRS64XrGSrjD3vvtga?si=e443b7116d8d4cb9', img: 'placeholder'},
    {i: 7, name: '唱', artist: 'Ado', link: 'https://open.spotify.com/track/7o0TPSw494RG2Q4iWmd1v6?si=dcde6d7604464a37', img: 'placeholder'},
    {i: 8, name: 'Woke Up', artist: 'XG', link: 'https://open.spotify.com/track/4keuUM29CtIWgsPRzRhXoW?si=f39917ddc5894854', img: 'placeholder'},
    {i: 9, name: 'Halazia', artist: 'Ateez', link: 'https://open.spotify.com/track/5cTnKClHyczcUhFT8MKBZe?si=126f2c7b3d00420e', img: 'placeholder'},
    {i: 10, name: 'Slash', artist: 'Stray Kids', link: 'https://open.spotify.com/track/2MKGrYH1PyPAUKu2Sl8IaT?si=5cc880ba2fc84cb2', img: 'placeholder'},
  ]

  let top_books = [
    {i: 1, name: 'We are not free', author: 'Traci Chee', link: 'https://www.goodreads.com/book/show/49934666-we-are-not-free'},
    {i: 2, name: 'Legend', author: 'Marie Lu', link: 'https://www.goodreads.com/book/show/29863662-legend'},
    {i: 3, name: 'Prodigy', author: 'Marie Lu', link: 'https://www.goodreads.com/book/show/13414446-prodigy'},
    {i: 4, name: 'Champion', author: 'Marie Lu', link: 'https://www.goodreads.com/book/show/18291576-champion'},
    {i: 5, name: 'Alone with you in the ether', author: 'Olivie Blake', link: 'https://www.goodreads.com/book/show/61126612-alone-with-you-in-the-ether'},
    {i: 6, name: 'Girl in pieces', author: 'Kathleen Glasgow', link: 'https://www.goodreads.com/book/show/29236380-girl-in-pieces'},
    {i: 7, name: 'Normal People', author: 'Sally Rooney', link: 'https://www.goodreads.com/book/show/41057294-normal-people'},
    {i: 8, name: 'Today Tonight Tomorrow', author: 'Rachel Lynn Solomon', link: 'https://www.goodreads.com/book/show/52766407-today-tonight-tomorrow'},
  ]

  let college_highlights = [
    {img: college_highlight1, title: 'Open Source Software Team Member', info: '📍End of Semester Ceremony, Fall 2023'},
    {img: college_highlight5, title: 'ACM CSUF Design Officer', info: '📍End of Semester Meeting, Spring 2024'},
    {img: college_highlight3, title: 'FullyHacks Design Officer', info: '📍Hackathon with 400+ applicants, Spring 2024'},
    {img: college_highlight7, title: 'Fullyhacks Design Officer', info: '📍Behind the scenes before the event started, Spring 2024'}
  ]

</script>

<main>
  <NavBar />
  <div class="flex flex-col border-black border-4 ml-5 mr-5 sm:ml-10 sm:mr-10 mt-10 text-center rounded-md p-16 pl-10 pr-10 sm:p-24 md:p-32 lg:p-24 lg:pt-32 lg:pb-32 xl:p-52" id="intro-container">
    <h1 class="text-3xl sm:text-4xl md:text-6xl xl:text-7xl mb-10"> Sama Ahmed</h1>
    <h2 class="text-lg sm:text-xl md:text-3xl xl:text-4xl mb-5">computer science student <br> @california state university, fullerton</h2>
    <h2 class="text-lg sm:text-xl md:text-2xl xl:text-3xl">check out my resume <a href={resume} target="_blank" class="text-blue-500">here</a></h2>
  </div>

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10 mt-24">
    <h1 class="text-3xl sm:text-4xl mb-5">College Highlights</h1>
    <div class="flex flex-wrap">
      {#each college_highlights as highlight}
        <div class="w-full sm:w-1/2 p-2 mb-12 md:mb-q0 text-center">
          <img src={highlight.img} alt={highlight.title} class="rounded-md mb-5 h-64 lg:h-96 w-full object-cover"/>
          <p>{highlight.title}</p>
          <p>{highlight.info}</p>
        </div>
      {/each}
    </div>
  </div>
  

  <div class="flex flex-col ml-5 mr-5 sm:ml-10 sm:mr-10 mt-24" id="projects">
    <h1 class="text-4xl text-black mb-5">Projects</h1>
    {#each projects as project}
      <div class="flex flex-col bg-black text-white rounded-xl p-5 mb-7" id="project-container">
        <h2 class="text-2xl mb-2">{project.name}</h2>
        <h3 class= "mb-2">Tech Stack: {project.teck_stack}</h3>
        <p class= "mb-2">- {project.description}</p>
        <a href={project.link} target="_blank" class="text-blue-500">View Project</a>
      </div>
    {/each}
    <p class="text-lg text-black mb-5 text-end mr-4">Check out more on my <a class="underline " href="https://github.com/26samaahmed" target="_blank">github</a></p>
  </div>
  <p class="text-center text-md md:text-xl text-black">Made with 💚 by Sama Ahmed</p>

  <!--
  <div class="flex flex-row ml-20 mr-20 mt-10 space-x-10">
    <div class="flex-1">
      <div class="bg-[#C7D8FF] p-10 rounded-md">
        <h1 class="text-2xl text-black mb-5">Top songs this month:</h1>
        {#each top_songs as song}
          <p class="text-md text-black">{song.i}. <a href={song.link} class='underline font-bold'>{song.name}</a> by {song.artist}</p>
        {/each}
      </div>
    </div>

    <div class="flex-1">
      <div class="bg-[#B8EBFF] p-10 rounded-md">
        <h1 class="text-2xl text-black mb-5">Top books:</h1>
        {#each top_books as book}
          <p class="text-md text-black">{book.i}. <a href={book.link} class='underline font-bold'>{book.name}</a> by {book.author}</p>
        {/each}

        <p class="text-lg text-black mt-5">Current Read: <a class="underline font-bold" href="https://www.goodreads.com/book/show/28421168-renegades" target="_blank">Renegades</a> by Marissa Meyer</p>
      </div>
    </div>
  </div>
  -->
</main>

<style>
  :global(body) {
    background-color: white;
    font-family: "Goldman", sans-serif;
  }

  #intro-container {
    transition: 0.3s;
  }
  #intro-container:hover {
    background-color: black;
    color: white;
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