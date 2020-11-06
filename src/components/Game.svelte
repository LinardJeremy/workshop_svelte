<script>
    import Snake from "./Snake.svelte";
    import Food from "./Food.svelte";
    import { fade, fly } from 'svelte/transition';

    // Props of the game
    export let width = 600;
    export let height = 400;
    export let squareSize = 40;

    // Variables of the game
    let score = 0;
    let isLost = false;
    let choosedDirection = false;
    let timer = 500;
    let loop;
    let radioColor = "green";

    /**
     * The snake object
     * .body is an array of objects containing every bodypart of the snake, the first element is the head
     * .direction is a string the snake is currently facing (right, left, up, down)
     * .size is the size of the square representing a bodypart
    */
    let snake = {
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

    /**
     * The food object
     * .x and .y are numbers representing the coordinates of the food
     * .size is the size of the square representing the food
    */
    let food = {
        x : randomPos(width),
        y : randomPos(height),
        size : squareSize,
    }

    // Game loop to handle the interval of the game -----------------------------------------

    function gameLoop() {
        (loop !== null) && clearInterval(loop);
        loop = setInterval(() => {
            move();
            eatingTest();
            losingTest();
        }, timer)
    }

    // Main functions for the gameloop -------------------------------------------------------

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


    // Utility functions -------------------------------------------------------

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
        return false;
    }

    /**
     * Generates a food with random x and y positions
     * Recursively calls itself until it creates a food that doesn't collide with the snake
     * @return the food or the function itself
     */
    function getFood() {
        let tempFood = { x : randomPos(width), y : randomPos(height), size : squareSize };
        let doesNotCollide = true;
        for (let i = 0; i < snake.body.length && doesNotCollide === true; i++) {
            if (collide(tempFood, snake.body[i])) {
                doesNotCollide = false;
            }
        };
        if (doesNotCollide) {
            return tempFood;
        } else {
            return getFood();
        }
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
    
    // Event listener -------------------------------------------------------

    function handleKeydown(event) {
        let keyCode = event.keyCode;
        if (event.target.type === "radio") {
            event.preventDefault();
        }
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

    // Automaticaly calls the game loop when the component is loaded ----------

    (() => {
        gameLoop();
    })();

</script>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
	.gameArea {
        position: relative;
        border: 1px solid black;
    }
    input:focus {
        outline: none;
    }
    .colorField {
        display: flex;

    }
    .colorField label {
        margin: 0 1rem 1rem 1rem;
    }
</style>

<!-- Section game area -->
<section class="gameArea" style="width: {width}px; height: {height}px;">
    <!-- If block to test if the game is not lost -->
    {#if !isLost}
        <!-- Snake component -->
        <Snake {...snake} colorSnake={radioColor}/>
        <!-- /Snake -->
        <!-- Food component -->
        <Food {...food}/>
        <!-- /Food -->
    <!-- Else (if the game is lost) -->
    {:else}
        <h2 in:fade>Game lost !!!</h2>
        <p in:fly="{{ x: 100, duration: 1000 }}">Your score is {score}</p>
        {#if score < 10}
            <p in:fly="{{ y: 100, duration: 2000 }}">You can do better</p>
        {:else if score >= 10 && score < 20}
            <p in:fly="{{ y: 100, duration: 2000 }}">That's okay</p>
        {:else}
            <p in:fly="{{ y: 100, duration: 2000 }}">Well done</p>
        {/if}
    {/if}
    <!-- /If -->
</section>
<!-- /Section -->
<!-- Section bonus -->
<section>
    <!-- Score display -->
    <h2>Score : {score}</h2>
    <!-- /Score -->
    <!-- Snake's color picker -->
    <p>Snake's color :</p>
    <div class="colorField">
        <label>
            <input type=radio bind:group={radioColor} value="green">
            Green
        </label>
        <label>
            <input type=radio bind:group={radioColor} value="yellow">
            Yellow
        </label>
        <label>
            <input type=radio bind:group={radioColor} value="blue">
            Blue
        </label>
    </div>
    <!-- /Snake's color picker -->
</section>
<!-- /Section-->

<!-- Keydown event listener -->
<svelte:window on:keydown={handleKeydown}/>
<!-- /Keydown -->