<script>
	import Game from "./components/Game.svelte";

	let game = {
		width : 600,
		height : 400,
		squareSize : 40,
	};

	function gameInit() {
		game = {
			width : 600,
			height : 400,
			squareSize : 40,
		};
	};
</script>

<main>
	<h1>Snake</h1>
	{#key game}
		<Game {...game}/>
	{/key}
	<button on:click={gameInit}>Restart</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>