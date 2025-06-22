<script>
  export let song_url = ""
</script>

<div class="text-center mt-16 m-3">
  <p class="text-lg mb-2">
    thank you for making it this far, here is a song recommendation for you!
  </p>
  <iframe
    style="border-radius:12px; display:block; margin:auto;"
    class="w-full sm:w-96"
    src={song_url}
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