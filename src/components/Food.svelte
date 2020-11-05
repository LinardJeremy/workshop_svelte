<script>
    export let x;
    export let y;
    export let size;
    let imgSrc = "./img/mouse.png";
</script>

<style>
    .food {
        position: absolute;
    }
    .imgFood {
        height: 100%;
        width: 100%;
    }
    
</style>

<div class="food" id="food" style="width: {size}px; height: {size}px; left :{x}px; top:{y}px;">
    <img class="imgFood" src={imgSrc} alt="mouse">
</div>