<script>
	import Snake from "./Snake.svelte";
	import Food from "./Food.svelte";
	import {randomPos} from "./Random.svelte"
	let squareSize = 40; // in px
	let gameWidth = 800;
	let gameHeight = 400;
	let snakeDirection = "rotateRight";
	let didMove = false;
	let loop;
	let timer = 500;
	$: foodPosX = randomPos(gameWidth, squareSize);
	$: foodPosY = randomPos(gameHeight, squareSize);
	$: score = 0;
	$: gameLost =  false;
	$: snakeBody = [{
		x : 40,
        y : 0,
		oldX : 40,
		oldY : 0,
    },
    {
		x : 0,
        y : 0,
		oldX : 0,
		oldY : 0,
	},
	{
		x : 0,
        y : 0,
		oldX : 0,
		oldY : 0,
	}];

	function gameLoop(timer){
		if (loop !== null) {
			clearInterval(loop);
		}
		loop = setInterval(() => {
			move();
			eating();
			collide();
		},timer)
	}

	function eating(){
		if (snakeBody[0].x < foodPosX + squareSize &&
			snakeBody[0].x + squareSize > foodPosX &&
			snakeBody[0].y < foodPosY + squareSize &&
			snakeBody[0].y + squareSize > foodPosY) {  
				console.log("Miam");
				foodPosY = randomPos(gameHeight, squareSize);
				foodPosX = randomPos(gameWidth, squareSize);
				score +=1;
				if (timer > 200) {
					timer -= 20;
					gameLoop(timer);
				};
				snakeBody = [...snakeBody, {
					x : snakeBody[snakeBody.length - 1].x,
					y : snakeBody[snakeBody.length - 1].y,
					oldX : snakeBody[snakeBody.length - 1].oldX,
					oldY : snakeBody[snakeBody.length - 1].oldY,
				}];
		}
	}
	
	//  body follow the snake

	function move(){
			console.log(snakeBody[0].x);
		for (let i=0; i < snakeBody.length; i++){
			snakeBody[i].oldX = snakeBody[i].x;
			snakeBody[i].oldY = snakeBody[i].y;
			if ( i === 0 ) {
				if (snakeDirection === "rotateRight"){
					snakeBody[0].oldX = snakeBody[0].x;
					snakeBody[0].x += squareSize;
				}
				if (snakeDirection === "rotateLeft"){
					snakeBody[0].oldX = snakeBody[0].x;
					snakeBody[0].x -= squareSize;
				}
				if (snakeDirection === "rotateBottom"){
					snakeBody[0].oldY = snakeBody[0].y;
					snakeBody[0].y += squareSize;
				}
				if (snakeDirection === "rotateTop"){
					snakeBody[0].oldY = snakeBody[0].y;
					snakeBody[0].y -= squareSize;
				}
			} else {
				snakeBody[i].x = snakeBody[i-1].oldX;
				snakeBody[i].y = snakeBody[i-1].oldY;
			}
		};
		didMove = false;
	}
		
     
	// listen keyboard
	function handleKeydown(event) {
		let keyCode = event.keyCode;
		if (!didMove) {
			// right = 39
			if (keyCode === 39 && snakeDirection !== "rotateLeft"){
				// snakePosX += squareSize
				snakeDirection = "rotateRight";
				didMove = true;
			}
			// left = 37
			if (keyCode === 37 && snakeDirection !== "rotateRight"){
				// snakePosX -= squareSize;
				snakeDirection = "rotateLeft";
				didMove = true;
			}
			// bottom = 40
			if (keyCode === 40 && snakeDirection !== "rotateTop"){
				// snakePosY += squareSize;
				snakeDirection ="rotateBottom";
				didMove = true;
			}
			// top = 38
			if (keyCode === 38 && snakeDirection !== "rotateBottom"){
				// snakePosY -= squareSize;
				snakeDirection = "rotateTop";
				didMove = true;
			}
		}
		if (keyCode === 32) {
			clearInterval(loop);
		}
	}
	

  	function collide() {
		if (snakeBody[0].x >= 800 || snakeBody[0].x <0 || snakeBody[0].y >=400 || snakeBody[0].y <0) {
			gameLost = true;
		}
		snakeBody.forEach((part, i) => {
			if ((i !== 0) && (snakeBody[0].x < part.x + squareSize &&
				snakeBody[0].x + squareSize > part.x &&
				snakeBody[0].y < part.y + squareSize &&
				snakeBody[0].y + squareSize > part.y)) {
					gameLost = true;
		}
		});
	}

	(() => {
		gameLoop(timer);
	})();

</script>

<main>
	<h1>Votre score est de {score}</h1>
	<div class="gameArea" style="width: {gameWidth}px; height: {gameHeight}px;"> 
	{#if gameLost === false}
		<Snake pos={snakeBody[0].x} posTop={snakeBody[0].y} rotation={snakeDirection} {snakeBody} />
		<Food posFoodLeft={foodPosX} posFoodTop={foodPosY} />
	{:else if gameLost === true}
		<h2>Game lost !!!</h2>
	{/if}
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