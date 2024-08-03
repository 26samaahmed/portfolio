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
  <button>Contact</button>
  <div class="container">
    <div class="left">
      <h1 id="software-title">Aspiring Software Engineer</h1>
    </div>
    <div class="right">
      <h1 id="design-title">Aspiring Designer</h1>
    </div>
  </div>

  <div class="container1">
    <div class="left1">
      <h3 id="coding-portfolio"><a href='/'>View Coding Portfolio</a></h3>
    </div>

    <div class="right1">
      <h3 id="design-portfolio"><a href='/'>View Design Portfolio</a></h3>
    </div>
  </div>
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
    margin: 0;
    margin-bottom: 80px;
  }

  #coding-portfolio {
    color: black;
    margin-left: 60%;
  }

  #design-portfolio {
    color: white;
    margin-right: 60%;
  }

  .container1 {
    display: flex;
    height: 0vh;

  }

  .right1, .left1 {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: "Goldman", sans-serif;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 25px;
    width: 150px;
    padding: 13px;
    font-size: 20px;
    cursor: pointer;
    color: rgb(255, 255, 255);
  }

  button:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
</style>