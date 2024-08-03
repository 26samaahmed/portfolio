<script>

</script>

<head>
  <title>sama ahmed</title>
  <meta name="description" content="sama ahmed's personal website">
  <meta name="keywords" content="sama ahmed, computer science, cal state fullerton">
  <meta name="author" content="sama ahmed">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap" rel="stylesheet">
</head>

<main>
  <div class="container">
    <div class="left">
      <h1 id="software-title">Aspiring Software Engineer</h1>
    </div>
    <div class="right">
      <h1 id="design-title">Aspiring Designer</h1>
    </div>
  </div>

  <h3 id="coding-portfolio">View Coding Portfolio</h3>
  <h3 id="design-portfolio">View Design Portfolio</h3>
</main>

<style>
  :global(body) {
    font-family: "Goldman", sans-serif;
    color: #333;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, white 0%, white 50%, black 50%, black 100%);
  }

  .container {
    display: flex;
    height: 100vh;
  }

  .left, .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
  }

  .left {
    color: black;
  }

  .right {
    color: white;
  }

  h1 {
    margin: 0;
    padding: 20px; /* Adjust as necessary */
    font-weight: 500;
  }

  h3 {
    text-align: center;
    font-weight: 400;
  }

  #coding-portfolio {
    color: black;
    margin-right: 20%;
  }

  #design-portfolio {
    color: white;
    margin-left: 20%;
  }

</style>