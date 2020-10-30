<script>
	import Snake from "./Snake.svelte"
	import Button from "./Button.svelte"
	import Food from "./Food.svelte"
	import Event, { hello } from "./Event.svelte"
	let squareSize = 40; // in px
	let gameWidth = 800;
	let gameHeight = 400;
	$: snakePosX = 0;
	$: snakePosY = 0;
	let snakeDirection;
	$: foodPosX = randomPos(gameWidth);
	$: foodPosY = randomPos(gameHeight);
	$: score = 0;

  
	function handleKeydown(event) {
		randomPos(gameWidth);
		let keyCode = event.keyCode;
		// right = 39
		if (keyCode === 39){
			snakePosX += squareSize;
			snakeDirection = "rotateRight";
		}
		// left = 37
		if (keyCode === 37){
			snakePosX -= squareSize;
			snakeDirection = "rotateLeft"
		}
		// bottom = 40
		if (keyCode === 40){
			snakePosY += squareSize;
			snakeDirection ="rotateBottom"
		}
		// top = 38
		if (keyCode === 38){
			snakePosY -= squareSize;
			snakeDirection = "rotateTop"
		}
		if (snakePosX < foodPosX + squareSize &&
			snakePosX + squareSize > foodPosX &&
			snakePosY < foodPosY + squareSize &&
			squareSize + snakePosY > foodPosY) {  
				console.log("collide");
				foodPosY = randomPos(gameHeight);
				foodPosX = randomPos(gameWidth);
				score +=1
		}
	}

	function randomPos(max) {
		let pos = (Math.floor(Math.random() * ((max/squareSize) - 1)) * squareSize);
		return pos;
	}
</script>

<main>
	<h1>Votre score est de {score}</h1>
	<div class="gameArea" style="width: {gameWidth}px; height: {gameHeight}px;"> 
		<Snake pos={snakePosX} posTop={snakePosY} rotation={snakeDirection}/>
		<Food posFoodLeft={foodPosX} posFoodTop={foodPosY} />
	</div>
</main>

<svelte:window on:keydown={handleKeydown}/>


<style>
	.gameArea{
		/* width: 800px;
		height: 400px; */
		position: relative;
		border: solid black 1px;
		margin-left: auto;
		margin-right: auto;
	} 
</style>