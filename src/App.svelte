<script>
	import Snake from "./Snake.svelte"
	import Button from "./Button.svelte"
	import Food from "./Food.svelte"
	import { element } from "svelte/internal";
	import  Random, {randomPos} from "./Random.svelte"
	 let squareSize = 40; // in px
	let gameWidth = 800;
	let gameHeight = 400;
	$: snakePosX = 0;
	$: oldSnakePosX = 0;
	$: snakePosY = 0;
	$: oldSnakePosY = 0;
	let snakeDirection;
	$: foodPosX = randomPos(gameWidth, squareSize);
	$: foodPosY = randomPos(gameHeight, squareSize);
	$: score = 0;
	$: gameLost =  false;
	$: bodyPart = [{
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
	},
	{
		x : 0,
        y : 0,
		oldX : 0,
		oldY : 0,
	} 
]

	function eating(){
		if (snakePosX < foodPosX + squareSize &&
			snakePosX + squareSize > foodPosX &&
			snakePosY < foodPosY + squareSize &&
			squareSize + snakePosY > foodPosY) {  
				console.log("Miam");
				foodPosY = randomPos(gameHeight, squareSize);
				foodPosX = randomPos(gameWidth, squareSize);
				score +=1
		}
	}
	
	//  body follow the snake

	function updatePositionBody(){
		for (let i=0; i < bodyPart.length; i++){
			bodyPart[i].oldX = bodyPart[i].x;
			bodyPart[i].oldY = bodyPart[i].y;
			if ( i === 0 ) {
				bodyPart[i].x = snakePosX;
				bodyPart[i].y = snakePosY;
			} else {
				bodyPart[i].x = bodyPart[i-1].oldX;
				bodyPart[i].y = bodyPart[i-1].oldY;
			}
		}
	}
		
     
// listen keyboard
	function handleKeydown(event) {
		let keyCode = event.keyCode;
		// right = 39
		if (keyCode === 39 && snakeDirection !== "rotateLeft"){
			// snakePosX += squareSize
			snakeDirection = "rotateRight";
		}
		// left = 37
		if (keyCode === 37 && snakeDirection !== "rotateRight"){
			// snakePosX -= squareSize;
			snakeDirection = "rotateLeft"
		}
		// bottom = 40
		if (keyCode === 40 && snakeDirection !== "rotateTop"){
			// snakePosY += squareSize;
			snakeDirection ="rotateBottom"
		}
		// top = 38
		if (keyCode === 38 && snakeDirection !== "rotateBottom"){
			// snakePosY -= squareSize;
			snakeDirection = "rotateTop"
		}
	}
	
    
	// automatic move 

	function move(){
        // setInterval(()=> {
		// 	updatePositionBody();
			// check if the game is lost
			if (snakeDirection === "rotateRight"){
				oldSnakePosX = snakePosX;
				snakePosX += squareSize;
			}
			if (snakeDirection === "rotateLeft"){
				oldSnakePosX = snakePosX;
				snakePosX -= squareSize;
			}
			if (snakeDirection === "rotateBottom"){
				oldSnakePosY = snakePosY;
				snakePosY += squareSize;
			}
			if (snakeDirection === "rotateTop"){
				oldSnakePosY = snakePosY;
				snakePosY -= squareSize;
			}
		// 	collide()
        // },1000)
  	}

  	function collide() {
		if (snakePosX >= 800 || snakePosX <0 || snakePosY >=400 || snakePosY <0) {
					gameLost = true;
		}
	}
//   makeAutomaticMove();

	(function gameLoop(){
		setInterval(() => {
			move();
			eating();
			collide();
			updatePositionBody();
		},500)
	})();
//   automatic move

	// function randomPos(max) {
	// 	let pos = (Math.floor(Math.random() * ((max/squareSize) - 1)) * squareSize);
	// 	return pos;
	// }
</script>

<main>
	<h1>Votre score est de {score}</h1>
	<div class="gameArea" style="width: {gameWidth}px; height: {gameHeight}px;"> 
	{#if gameLost === false}
		<Snake pos={snakePosX} posTop={snakePosY} rotation={snakeDirection} {bodyPart} />
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