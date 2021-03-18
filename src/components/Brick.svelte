<script>
  export let move = true;
</script>

<!-- event handler -->
<!-- once=>event fire once and remove handler
preventDefault=>e.preventDefault
self=>lock event region to precise target -->




<!-- 這裡不定義onclick的行為，Event Forwarding會把操作權移給上方的parent -->
<!-- <div class="brick" class:move on:click ><h1>move</h1></div> -->
<div class="brick" class:move on:click|self ><h1>move</h1></div>


<style>
  .brick {
    width: 100px;
    height: 100px;
    background: blue;
    transition: 0.75s;
  }
  .move {
    transform: translateX(100px);
  }
</style>
