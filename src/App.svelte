<script>
import Snake from "./Snake.svelte"
import Button from "./Button.svelte"
import Food from "./Food.svelte"
// import Event, { handleKeydown } from "./Event.svelte"
$: newPos = 0;
$: newTopPos = 0;
let key;
let keyCode; 
$: posFoodX = (Math.random() * 600)
$: posFoodY = (Math.random() * 300)
$: score = 0;

  
function handleKeydown(event) {
		key = event.key;
		keyCode = event.keyCode;
		if (keyCode === 39){
			newPos +=20
		}
		if (keyCode === 37){
			newPos -=20
		}
		if (keyCode === 40){
			newTopPos +=20
		}
		if (keyCode === 38){
			newTopPos -=20
		}
		if (newPos < posFoodX+ 50 &&
  			newPos + 40 > posFoodX &&
  			newTopPos < posFoodY + 50 &&
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
		<Snake pos={newPos} posTop={newTopPos}/>
		<Food posFoodLeft={posFoodX} posFoodTop={posFoodY} />
	</div>
</main>

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
	margin-left: auto;
	margin-right: auto;
} 
</style>