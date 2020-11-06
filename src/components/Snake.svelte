<script>
    // Snake props
    export let body = [{
                x: 80,
                y: 0,
                oldX: 0,
                oldY: 0,
            },{
                x: 40,
                y: 0,
                oldX: 0,
                oldY: 0,
            },{
                x: 0,
                y: 0,
                oldX: 0,
                oldY: 0,
            }];
    export let direction = "right";
    export let size = 40;
    export let colorSnake = "green";
</script>

<style>
    .snake{
        position: absolute;
        border : black solid 1px;
        
    }
    .green{
        background-color: green;
    }
    .yellow{
        background-color: yellow;
    }
    .blue{
        background-color: blue;
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

<!-- Each block to iterate on the snake body -->
{#each body as part, i}
    <!-- If index = 0, display the head of the snake -->
    {#if i === 0}
        <div class="snake {direction} {colorSnake}" style="width: {size-1}px; height: {size-1}px; left: {part.x}px; top: {part.y}px; z-index: 20">
            <div class="eye" style="top: {size/5}px; left: {size*5/8}px">         
            </div>
            <div class="eye" style="top: {size*2/5}px; left: {size*5/8}px">
            </div>
        </div>
    <!-- Else display the body -->
    {:else}
        <div  class="snake {colorSnake}" style="width: {size-1}px; height: {size-1}px; left :{part.x}px; top:{part.y}px; z-index: 10;">
        </div>
    {/if}
    <!-- /If -->
{/each}
<!-- /Each -->