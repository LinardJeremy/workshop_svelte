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
	$: snakePosY = 0;
	let snakeDirection;
	$: foodPosX = randomPos(gameWidth, squareSize);
	$: foodPosY = randomPos(gameHeight, squareSize);
	$: score = 0;
	$: gameLost =  false;
	$: bodyPart = [{
        top : 0,
        left : 0
    },
    {
        top :0,
        left :0
	},
	{
		top:0,
		left: 0
	} 
]

function collide(){
	if (snakePosX < foodPosX + squareSize &&
		snakePosX + squareSize > foodPosX &&
		snakePosY < foodPosY + squareSize &&
		squareSize + snakePosY > foodPosY) {  
			console.log("collide");
			foodPosY = randomPos(gameHeight, squareSize);
			foodPosX = randomPos(gameWidth, squareSize);
			score +=1
		}
	 }
		
	//  body follow the snake

	function updatePositionBody(){
		for (let i=0; i<bodyPart.length; i++){
			bodyPart[i].left= snakePosX;
			bodyPart[i].top= snakePosY;
			if ( i >=1 && snakeDirection === "rotateRight"){
				bodyPart[i].left = (snakePosX - (squareSize * i));
			}
			if ( i>=1 && snakeDirection === "rotateLeft"){
				bodyPart[i].left = (snakePosX + (squareSize * i));

			}
			if (i>=1 && snakeDirection ==="rotateTop"){
				bodyPart[i].left = snakePosX;
				bodyPart[i].top = (snakePosY - (squareSize *i));
			}
			if (i>=1 && snakeDirection ==="rotateBottom"){
				bodyPart[i].left = snakePosX;
				bodyPart[i].top = (snakePosY  + (squareSize *i));
			}
			
		}
	}
	 
     
// listen keyboard
	function handleKeydown(event) {
		randomPos(gameWidth);
		let keyCode = event.keyCode;
		// right = 39
		if (keyCode === 39){
			snakePosX += squareSize
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
		// if (snakePosX < foodPosX + squareSize &&
		// 	snakePosX + squareSize > foodPosX &&
		// 	snakePosY < foodPosY + squareSize &&
		// 	squareSize + snakePosY > foodPosY) {  
		// 		console.log("collide");
		// 		foodPosY = randomPos(gameHeight);
		// 		foodPosX = randomPos(gameWidth);
		// 		score +=1
		// }
		collide();
		updatePositionBody();

	}
	
    
	// automatic move 

	function makeAutomaticMove(){
        setInterval(()=> {
			updatePositionBody();
			// check if the game is lost
			if (snakePosX >= 800 || snakePosX <0 || snakePosY >=400 || snakePosY <0) {
					gameLost = true;
			}
			if (snakeDirection === "rotateRight"){
			snakePosX += squareSize;
			}
			if (snakeDirection === "rotateLeft"){
			snakePosX -= squareSize;
			}
			if (snakeDirection === "rotateBottom"){
				snakePosY += squareSize;
			}
			if (snakeDirection === "rotateTop"){
				snakePosY -= squareSize;
			}
			collide()
        },1000)
  }
//   makeAutomaticMove();
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