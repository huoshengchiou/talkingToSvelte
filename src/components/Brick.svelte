<script>
  export let move = true;
</script>

<!-- 這裡不定義onclick的行為，Event Forwarding會把操作權移給上方的parent -->
<div class="brick" class:move on:click />

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
