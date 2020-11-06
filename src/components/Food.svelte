<script>
    // Food props
    export let x = 80;
    export let y = 80;
    export let size = 40;

    // Food image
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

<!-- Div containing the food -->
<div class="food" id="food" style="width: {size}px; height: {size}px; left :{x}px; top:{y}px;">
    <!-- Food image -->
    <img class="imgFood" src={imgSrc} alt="mouse">
    <!-- /Food -->
</div>
<!-- /Div -->

