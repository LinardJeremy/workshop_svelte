<script>
export let posFoodLeft;
export let posFoodTop;
export let imgSrc = "./img/mouse.png";
</script>
<style>
   .food {
       height: 50px;
       width: 50px;
       position: relative;
       border: black solid 1px;
   }
    .imgFood {
        height: 100%;
        width: 100%;
    }
   
</style>
<div class="food" id="food" style="left :{posFoodLeft}px; top:{posFoodTop}px;">
  <img class="imgFood" src={imgSrc} alt="mouse">

</div>