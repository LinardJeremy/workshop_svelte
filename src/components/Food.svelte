<script>
    export let xPos;
    export let yPos;
    export let imgSrc = "./img/mouse.png";
</script>

<style>
    .food {
        height: 40px;
        width: 40px;
        position: absolute;
    }
    .imgFood {
        height: 100%;
        width: 100%;
    }
    
</style>

<div class="food" id="food" style="left :{xPos}px; top:{yPos}px;">
    <img class="imgFood" src={imgSrc} alt="mouse">
</div>

