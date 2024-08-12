<script>
  import NavBar from '../../components/NavBar.svelte';
  let resume = 'https://drive.google.com/file/resume.pdf';

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
</script>

<main>
  <NavBar />
  <div class="flex flex-col bg-black ml-20 mr-20 mt-10 text-center rounded-md p-56">
    <h1 class="text-7xl text-white mb-10"> Sama Ahmed</h1>
    <h2 class="text-4xl text-white mb-5">computer science student <br> @california state university, fullerton</h2>
    <h2 class="text-3xl text-white">check out my resume <a href={resume} class="text-blue-500">here</a></h2>
  </div>

  <div class="flex flex-col ml-20 mr-20 mt-10">
    <h1 class="text-4xl text-black mb-5">Projects</h1>
    {#each projects as project}
      <div class="flex flex-col bg-black rounded-xl p-5 mb-5">
        <h2 class="text-2xl text-white mb-2">{project.name}</h2>
        <h3 class="text-white mb-2">Tech Stack: {project.teck_stack}</h3>
        <p class="text-white mb-2">- {project.description}</p>
        <a href={project.link} target="_blank" class="text-blue-500">View Project</a>
      </div>
    {/each}
    <p class="text-lg text-black mb-5">Check out more on my <a class="underline " href="https://github.com/26samaahmed" target="_blank">github</a></p>
  </div>

  <div class="flex flex-col ml-20 mr-20 mt-10">
    <div class="bg-[#C7D8FF] p-10 rounded-md">
      <h1 class="text-2xl text-black mb-5">Top songs this month:</h1>
      {#each top_songs as song}
        <p class="text-md">{song.i}. <a href={song.link} class='underline font-bold'>{song.name}</a> by {song.artist}</p>
      {/each}
    </div>
    
  </div>
</main>