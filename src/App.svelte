<script>
  let name = "sheng"; //沒有export的狀況下不會綁props
  let color = "black";
  const handleClick = () => {
    color = "orange";
  };

  const handleInput = (e) => {
    //單向改變值，只要color被任何地方使用，所有的地方都會跟著變動
    color = e.target.value;
  };
</script>

<!--  component 沒有export-->
<!-- 後續的component都會是這隻的child -->
<!-- root conponent -->
<main>
  <h1>Hello {name}!</h1>
  <h1 style="color:{color}">{color}</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Hello kotake</a> to learn how
    to build Svelte apps.
  </p>
  <button on:click={handleClick}>update</button>
  <!-- 只需要單向綁定 -->
  <input type="text" on:input={handleInput} />
  <!-- 雙向綁定值 -->
  <input type="text" on:input={handleInput} value={color} />
  <!-- 和上面行為相同 雙向綁定值-->
  <input type="text" bind:value={color} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
