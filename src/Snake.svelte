<script>
export let snake = 'snake';
export let pos ;
export let posTop ;
export let rotation ; 

</script>
<style>
    .divTest{
        background-color: green;
        position: absolute;
        height: 40px;
        width: 40px;
        
    }
    .eyes {
        background-color: red;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position:relative;
        top: 8px;
        left: 5px;
    }
    .eyes2 {
        background-color: red;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position:relative;
        top: 16px;
        left: 5px;
    }
    .rotateRight{
        transform: rotate(180deg);
    }
    .rotateLeft {
        transform: rotate(0deg);
    }
    .rotateTop {
        transform: rotate(90deg);
    }
    .rotateBottom {
        transform : rotate(270deg)
    }
    </style>

<div class="divTest {rotation}" id={snake} style="left :{pos}px; top:{posTop}px;">
<div class="eyes">
    
</div>
<div class="eyes2">

</div>
</div>


