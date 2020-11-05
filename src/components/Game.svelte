<script>
    import Snake from "./Snake.svelte";
<<<<<<< HEAD
    import Food  from "./Food.svelte";
=======
    import Food from "./Food.svelte";

>>>>>>> f5417f4d9adfe887d61ec30455b711b1eb366c66
    export let width;
    export let height;
    export let squareSize;

    let score = 0;
    let isLost = false;
    let choosedDirection = false;
    let timer = 500;
    let loop;

    $: snake = {
        body : [{
                x: 0,
                y: 0,
                oldX: 0,
                oldY: 0,
            },{
                x: 0,
                y: 0,
                oldX: 0,
                oldY: 0,
            },{
                x: 0,
                y: 0,
                oldX: 0,
                oldY: 0,
            }
        ],
        direction : "right",
        size : squareSize,
    };

    $: food = {
        x : 2*squareSize,
        y : 2*squareSize,
        size : squareSize,
    }

    // Game loop to handle the interval of the game

    function gameLoop() {
        (loop !== null) && clearInterval(loop);
        loop = setInterval(() => {
            move();
            eatingTest();
            losingTest();
        }, timer)
    }

    // Main functions for the gameloop

    /**
     * Moves each snake bodyparts based on the snake direction
     */
    function move() {
        for (let i = 0; i < snake.body.length; i++) {
            snake.body[i].oldX = snake.body[i].x;
            snake.body[i].oldY = snake.body[i].y;
            if ( i === 0 ) {
                if (snake.direction === "right"){
                    snake.body[i].x += squareSize;
                }
                if (snake.direction === "left"){
                    snake.body[i].x -= squareSize;
                }
                if (snake.direction === "down"){
                    snake.body[i].y += squareSize;
                }
                if (snake.direction === "up"){
                    snake.body[i].y -= squareSize;
                }
            } else {
                snake.body[i].x = snake.body[i-1].oldX;
                snake.body[i].y = snake.body[i-1].oldY;
            }
        };
        choosedDirection = false;
    }

    /**
     * Tests if the snake eats food, if so:
     * - increases the score
     * - decreases the timer and restart the gameLoop
     * - creates another food
     * - makes the snake grows
     */
    function eatingTest() {
        if (collide(snake.body[0], food)) {
                score +=1;
                food = getFood();
                if (timer > 200) {
					timer -= 20;
					gameLoop();
				};
				snake.body = [...snake.body, {
					x : snake.body[snake.body.length - 1].x,
					y : snake.body[snake.body.length - 1].y,
					oldX : snake.body[snake.body.length - 1].oldX,
					oldY : snake.body[snake.body.length - 1].oldY,
                }];
        }
    }

    /**
     * Tests if the snake collide with the border or with himself, if so:
     * - sets isLost to true
     * - clears the loop interval
     */
    function losingTest() {
        if (snake.body[0].x >= width || snake.body[0].x <0 || snake.body[0].y >= height || snake.body[0].y <0) {
                isLost = true;
                clearInterval(loop);
        } else {
            snake.body.forEach((bodypart, i) => {
                if ((i !== 0) && collide(snake.body[0], bodypart)) {
                    isLost = true;
                    clearInterval(loop);
                }
            })
        };
    }


    // Utility functions

    /**
     * Tests if 2 rectangles collide
     * @param {Object} rect1 An object with x and y keys
     * @param {Object} rect2 An object with x and y keys
     * @return {Boolean} true if rect1 and rect2 collide
    */
    function collide(rect1, rect2) {
        if (rect1.x < rect2.x + squareSize &&
            rect1.x + squareSize > rect2.x &&
            rect1.y < rect2.y + squareSize &&
            rect1.y + squareSize > rect2.y) {
                   return true;
        }
    }

    /**
     * Generates a food with random x and y positions
     * Recursively calls itself until it creates a food that doesn't collide with the snake
     * @return the food or the function itself
     */
    function getFood() {
        let tempFood = { x : randomPos(width), y : randomPos(height), size : squareSize };
        for (let i = 0; i < snake.body.length; i++) {
            if (!collide(tempFood, snake.body[i])) {
                return tempFood;
            }
        };
        return getFood();
    }

    /**
     * Generates a random multiple of squareSize between 0 and the parameter
     * @param {Number} max The maximum range value
     * @return {Number} the random number
     */
    function randomPos(max) {
		let pos = (Math.floor(Math.random() * ((max/squareSize) - 1)) * squareSize);
		return pos;
    }
    
    // Event listener

    function handleKeydown(event) {
		let keyCode = event.keyCode;
		if (!choosedDirection && !isLost) {
			// right = 39
			if (keyCode === 39 && snake.direction !== "left"){
				snake.direction = "right";
				choosedDirection = true;
			}
			// left = 37
			if (keyCode === 37 && snake.direction !== "right"){
				snake.direction = "left";
				choosedDirection = true;
			}
			// bottom = 40
			if (keyCode === 40 && snake.direction !== "up"){
				snake.direction ="down";
				choosedDirection = true;
			}
			// top = 38
			if (keyCode === 38 && snake.direction !== "down"){
				snake.direction = "up";
				choosedDirection = true;
			}
		}
    }

    // Automaticaly calls the game loop when the component is loaded

    (() => {
        gameLoop();
    })();

</script>

<style>
	.gameArea {
        position: relative;
        border: 1px solid black;
    }
</style>

<section class="gameArea" style="width: {width}px; height: {height}px;">
    {#if !isLost}
        <Snake {...snake}/>
        <Food {...food}/>
    {:else}
		<h2>Game lost !!!</h2>
	{/if}
</section>
<p>Score : {score}</p>

<svelte:window on:keydown={handleKeydown}/>