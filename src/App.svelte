<script>
	import Game from "./components/Game.svelte";

	let game = {
		width : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 600 : 300,
		height : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 400 : 450,
		squareSize : (typeof window.innerWidth != 'undefined' && window.innerWidth > 768) ? 40 : 30,
	};

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