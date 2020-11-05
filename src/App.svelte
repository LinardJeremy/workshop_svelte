<script>
	import { bind } from "svelte/internal";
import Game from "./components/Game.svelte";
	// let nickname = '';

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
	<!-- <h2>Hello {nickname || 'stranger'}</h2> -->
	<!-- <input bind:value={nickname} placeholder="enter your nickname"> -->
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