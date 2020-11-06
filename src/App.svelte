<script>
	import { bind } from "svelte/internal";
	import Game from "./components/Game.svelte";

	// let nickname = '';

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
	<!-- <h2>Hello {nickname || 'stranger'}</h2> -->
	<!-- <input bind:value={nickname} placeholder="enter your nickname"> -->
	{#key game}
		<Game {...game}/>
	{/key}
	<button on:click={gameInit}>Restart</button>
	<!-- add input checkbox for the snake color -->
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>