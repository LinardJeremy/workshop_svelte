<script>
export let snake = 'snake';
export let rotation ; 
export let snakeBody = [];


</script>
<style>
    .snake{
        background-color: green;
        position: absolute;
        height: 39px;
        width: 39px;
        border : black solid 1px;
        
    }
    .eyes {
        background-color: red;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position:relative;
        top: 8px;
        left: 25px;
    }
    .eyes2 {
        background-color: red;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position: relative;
        top: 16px;
        left: 25px;
    }
    .rotateRight{
        transform: rotate(0deg);
    }
    .rotateLeft {
        transform: rotate(180deg);
    }
    .rotateTop {
        transform: rotate(270deg);
    }
    .rotateBottom {
        transform : rotate(90deg)
    }
    </style>


{#each snakeBody as part, i}
    {#if i === 0}
        <div class="snake {rotation}" id={snake} style="left :{part.x}px; top:{part.y}px; z-index: 20">
            <div class="eyes">         
            </div>
            <div class="eyes2">
            </div>
        </div>
    {:else}
        <div  class="snake" style="left :{part.x}px; top:{part.y}px; z-index: 10;">
        </div>
    {/if}
{/each}


