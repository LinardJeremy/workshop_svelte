<script>
    import Snake from "./Snake.svelte";
    import Food from "./Food.svelte";
    export let width;
    export let height;
    export let squareSize;
    export let score = 0;
    export let isLost = false;
    export let choosedDirection = false;
    export let timer = 500;
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
    };

    $: food = {
        xPos : 80,
        yPos : 80,
    }

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

    function eat() {
        if (snake.body[0].x < food.xPos + squareSize &&
			snake.body[0].x + squareSize > food.xPos &&
			snake.body[0].y < food.yPos + squareSize &&
			snake.body[0].y + squareSize > food.yPos) {
				console.log("Miam");
				food.xPos = randomPos(width, squareSize);
				food.yPos = randomPos(height, squareSize);
                score +=1;
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

    function collide() {
        if (snake.body[0].x >= width || snake.body[0].x <0 || snake.body[0].y >= height || snake.body[0].y <0) {
				isLost = true;
			}
        snake.body.forEach((bodypart, i) => {
            if ((i !== 0) && (snake.body[0].x < bodypart.x + squareSize &&
                snake.body[0].x + squareSize > bodypart.x &&
                snake.body[0].y < bodypart.y + squareSize &&
                snake.body[0].y + squareSize > bodypart.y)) {
                    isLost = true;
            }
        });
    }

    function randomPos(max, square) {
		let pos = (Math.floor(Math.random() * ((max/square) - 1)) * square);
		return pos;
    }
    
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

    function gameLoop() {
        if (loop !== null) {
				clearInterval(loop);
			};
        loop = setInterval(() => {
            move();
            eat();
            collide();
        }, timer)
    }

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