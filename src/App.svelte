<script>
	import Game from "./components/Game.svelte";

	/**
	 * Game object
	 * .width : width of the game area
	 * .height : height of the game area
	 * .squareSize : length of an in-game square
	 */
	let game = {
		width : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 600 : 300,
		height : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 400 : 450,
		squareSize : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 40 : 30,
	};

	/**
	 * Assigns the same values to the game object to trigger a change in game #key
	*/
	function gameInit() {
		game = {
			width : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 600 : 300,
			height : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 400 : 450,
			squareSize : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 40 : 30,
		};
	};
</script>

<main>
	<h1>Snake</h1>
	<!-- Key: remounts everything in #key block whenever game variable changes -->
	{#key game}
		<!-- Game component with game object as a prop -->
		<Game {...game}/>
		<!-- /Game -->
	{/key}
	<!-- /Key -->
	<!-- Button to restart the game -->
	<button on:click={gameInit}>Restart</button>
	<!-- /Button -->
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>