<script>
  import Login from "./components/Login.svelte";
  import Brick from "./components/Brick.svelte";
  import SlotDemo from './components/SlotDemo.svelte'
  import PopUp from './components/PopUp.svelte';
  import FromPractice from './components/FromPractice.svelte'
  let name = "sheng"; //沒有export的狀況下不會綁props
  let color = "black";
  const handleClick = () => {
    color = "orange";
  };

  let firstName = "HuoSheng";
  let lastName = "Chiou";
  //會根據其他值連動改變的值=>reactive value
  $: fullName = `${firstName} ${lastName}`;
  //根據其他值連動產生的行為reactive statememt
  $: console.log("color", color);
  //同時連動多個值
  $: {
    console.log("color", color);
    console.log("firstName", firstName);
  }
  let people = [
    { name: "s", color: "red", age: 23, id: 1 },
    { name: "l", color: "black", age: 19, id: 2 },
    { name: "k", color: "green", age: 30, id: 3 },
  ];

  const handleInput = (e) => {
    //單向改變值，只要color被任何地方使用，所有的地方都會跟著變動
    color = e.target.value;
  };

  const handleDelete = (id) => {
    //必須要置換原值，才會造成畫面改變
    people = people.filter((person) => person.id !== id);
  };
  let num = 5;
  let custom = true;
  let passColor = "black";
  const obj = { key: 0, value: 123 };

  let move = false;

  const toggleFn = () => {
    move = !move;
  };



  let showPop=false


  const handleShowPop=()=>{
    showPop=!showPop
  }

//客製化的event dispatch後會在event obj綁detail key
  const parentAddFn=(e)=>{
   people=[e.detail,...people]
  }
</script>

<Brick {move} on:click={toggleFn} />
<Login {...obj} />
<!-- short hand -->
<!-- <Login {passColor} /> -->

<!-- slot 在一個component傳入HTML結構-->
<SlotDemo>
<div>from Slot</div>
<p slot='named'>name slot</p>
</SlotDemo>



<!--  component 沒有export-->
<!-- 後續的component都會是這隻的child -->
<!-- root conponent -->
{#if num > 20}
  <!-- conditional inject HTML -->
  <p>more then 20</p>
{:else if num > 5}
  <p>more then 5</p>
{:else}
  <p>not more than 5</p>
{/if}
<main>
  <h1 class:customClass={custom}>Hello {fullName}!</h1>
  <h1 style="color:{color}">{color}</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Hello kotake</a> to learn how
    to build Svelte apps.
  </p>
  <!-- <button on:click={handleClick}>update</button> -->
  <button on:click|once={handleClick}>update</button>
  <!-- 只需要單向綁定 -->
  <input type="text" on:input={handleInput} />
  <!-- 雙向綁定值 -->
  <input type="text" on:input={handleInput} value={color} />
  <!-- 和上面行為相同 雙向綁定值-->
  <input type="text" bind:value={color} />
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <!-- //forEach -->
  <!-- person.id key for svelte to trace DOM-->
  {#each people as person (person.id)}
    <div>{person.name}</div>
    <div>{person.age}</div>
    {#if person.age > 20}
      <p class="old">too old</p>
    {/if}
    <!-- arr length為0時 顯示下方-->
    <button on:click={() => handleDelete(person.id)}>delete</button>
  {:else}
    <p>no people to show</p>
  {/each}
  {#if showPop}
  <PopUp on:click={handleShowPop}>  
    <FromPractice on:addPerson={parentAddFn}/>
  </PopUp>
  {/if}
  <button on:click={handleShowPop}>show pop</button>
</main>

<!-- 所有的style不會汙染到其他地方 bundle時會產生uni class name-->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    position: relative;
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

  .old {
    color: teal;
  }
  .customClass {
    font-weight: 900;
  }
</style>
