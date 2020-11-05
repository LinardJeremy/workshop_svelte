<script>
    export let body = [];
    export let direction ;
    export let size;
</script>

<style>
    .snake{
        background-color: green;
        position: absolute;
        border : black solid 1px;
        
    }
    .eye {
        background-color: red;
        height: 25%;
        width: 25%;
        border-radius: 50%;
        position:relative;
    }
    .right{
        transform: rotate(0deg);
    }
    .left {
        transform: rotate(180deg);
    }
    .up {
        transform: rotate(270deg);
    }
    .down {
        transform : rotate(90deg)
    }
</style>

{#each body as part, i}
    {#if i === 0}
        <div class="snake {direction}" style="width: {size-1}px; height: {size-1}px; left: {part.x}px; top: {part.y}px; z-index: 20">
            <div class="eye" style="top: {size/5}px; left: {size*5/8}px">         
            </div>
            <div class="eye" style="top: {size*2/5}px; left: {size*5/8}px">
            </div>
        </div>
    {:else}
        <div  class="snake" style="width: {size-1}px; height: {size-1}px; left :{part.x}px; top:{part.y}px; z-index: 10;">
        </div>
    {/if}
{/each}