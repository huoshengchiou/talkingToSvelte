<script>


</script>

<div class='bg' on:click|self>

    <div class='popRange' >
    <slot></slot>
    </div>

</div>

<style>
    .bg{
        width: 100vw;
        height: 100vh;
        background: rgba(200,200,200,0.4);
        position: absolute;
        top: 0;
        left:0;
    }
    .popRange{
        width: 400px;
        height: 200px;
        position: absolute;
        top: 0;
        left: 0;
        background: lightblue;
        z-index: 1;
    }

</style>