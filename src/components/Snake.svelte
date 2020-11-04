<script>
    export let body = [];
    export let direction ;
</script>

<style>
    .snake{
        background-color: green;
        position: absolute;
        height: 39px;
        width: 39px;
        border : black solid 1px;
        
    }
    .eye {
        background-color: red;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position:relative;
        top: 8px;
        left: 25px;
    }
    .eye2 {
        background-color: red;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position: relative;
        top: 16px;
        left: 25px;
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
        <div class="snake {direction}" style="left :{part.x}px; top:{part.y}px; z-index: 20">
            <div class="eye">         
            </div>
            <div class="eye2">
            </div>
        </div>
    {:else}
        <div  class="snake" style="left :{part.x}px; top:{part.y}px; z-index: 10;">
        </div>
    {/if}
{/each}