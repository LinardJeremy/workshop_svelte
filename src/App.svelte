<script>
import Snake from "./Snake.svelte"
import Button from "./Button.svelte"
import Food from "./Food.svelte"
 import Event, { hello } from "./Event.svelte"
$: newPos = 0;
$: newTopPos = 0;
let key;
let keyCode; 
let changeRotate;
$: posFoodX = (Math.random() * 600)
$: posFoodY = (Math.random() * 300)
$: score = 0;

  
function handleKeydown(event) {
		console.log('test');
		key = event.key;
		keyCode = event.keyCode;
		// right = 39
		if (keyCode === 39){
			newPos +=20
			changeRotate = "rotateRight";
		}
		// left = 37
		if (keyCode === 37){
			newPos -=20
			changeRotate = "rotateLeft"
		}
		// bottom = 40
		if (keyCode === 40){
			newTopPos +=20
			changeRotate ="rotateBottom"
		}
		// top = 38
		if (keyCode === 38){
			newTopPos -=20
			changeRotate = "rotateTop"
		}
		if (newPos < posFoodX + 40 &&
  			newPos + 40 > posFoodX &&
  			newTopPos < posFoodY + 40 &&
  		40 + newTopPos > posFoodY) {  
			  console.log("collide");
			  posFoodY = (Math.random() * 300)
			  posFoodX = (Math.random() * 600)
			  score +=1
		  }
  }
 

</script>



<main>
	<h1>Votre score est de {score}</h1>
	<div class="gameArea"> 
		<Snake pos={newPos} posTop={newTopPos} rotation={changeRotate}/>
		<Food posFoodLeft={0} posFoodTop={0} />
	</div>
</main>
<Button  text={"droite"} />
<Button text={"gauche"}/>

<svelte:window on:keydown={handleKeydown}/>


<div style="text-align: center">
	{#if key}
		<kbd>{key === ' ' ? 'Space' : key}</kbd>
		<p>{keyCode}</p>
	{:else}
		<p>Focus this window and press any key</p>
	{/if}
</div>
<style>
.gameArea{
	width: 600px;
	height: 300px;
	border: solid black 1px;
	margin-left: 100pX;
	margin-right: auto;
} 
</style>