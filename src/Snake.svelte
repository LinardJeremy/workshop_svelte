<script>
export let snake = 'snake';
export  let pos = 15;
export let posTop = 0;

</script>
<style>
    .divTest{
        background-color: green;
        position: relative;
        height: 40px;
        width: 40px;
        right: 0px;
    }
    </style>

<div class="divTest" id={snake} style="left :{pos}px; top:{posTop}px;"></div>


