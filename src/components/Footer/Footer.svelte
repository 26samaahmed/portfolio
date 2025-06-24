<script>
  export let song_url = "";
  export let color = "";
  export let path1 = {
    href: "/",
    text: "",
  };

  export let path2 = {
    href: "/",
    text: "",
  };
</script>

<div class="text-center mt-16">
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

<div
  class="grid grid-cols-1 md:grid-cols-3 items-center mt-4 md:mt-12 mx-5 sm:mx-16 text-center"
>
  <!-- Left webring link (hidden on mobile) -->
  <div class="hidden md:flex items-center justify-start space-x-3">
    <svg class="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
      <line x1="6" y1="12" x2="22" y2="12" stroke={color} stroke-width="2" />
      <polyline
        points="12,6 6,12 12,18"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <h3 class="text-md md:text-lg lg:text-xl">
      <a
        href={path1.href}
        style="--color: {color};"
        class="inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[var(--color)] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[250ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
      >
        {path1.text}
      </a>
    </h3>
  </div>

  <!-- Center footer: always centered -->
  <div class="flex justify-center text-md md:text-lg lg:text-xl">
    <div>
      made with <span class="text-sm">💚</span> by sama ahmed
      <br class="hidden sm:block" />
      <span class="block text-sm md:text-base -mt-2"
        >all rights reserved © 2025</span
      >
    </div>
  </div>

  <!-- Right webring link (hidden on mobile) -->
  <div class="hidden md:flex items-center justify-end space-x-3">
    <h3 class="text-md md:text-lg lg:text-xl">
      <a
        href={path2.href}
        style="--color: {color};"
        class="inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[var(--color)] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[250ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
      >
        {path2.text}
      </a>
    </h3>
    <svg class="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
      <line x1="2" y1="12" x2="18" y2="12" stroke={color} stroke-width="2" />
      <polyline
        points="12,6 18,12 12,18"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</div>
