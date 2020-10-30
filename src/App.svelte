<script>
	export let size;
	let grid = [];
	for (let i = 0; i < size[0]; i++) {
		let row = [];
		for (let j = 0; j < size[1]; j++) {
			row.push("empty");
		}
		grid.push(row);
	}
</script>

<main>
	<h1>Snake</h1>
	<table class="grid">
		{#each grid as row}
			<tr class="row">
			{#each row as cel}
				<td class="cel {cel}"></td>
			{/each}
			</tr>
		{/each}
	</table>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2rem;
	}

	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */

	.grid {
		height: fit-content;
		width: fit-content;
		padding: 0;
		margin: 0;
		border-spacing: 0;
		border-collapse: collapse;
	}

	.row {
		height: fit-content;
		width: fit-content;
		padding: 0;
		margin: 0;
	}

	.cel {
		height: 40px;
		width: 40px;
		padding: 0;
		margin: 0;
	}

	.empty {
		border: 1px solid black;
		background-color: cornflowerblue;
	}

	.food {
		border: 1px solid black;
		background-color: red;
	}

	.snake {
		background-color: green;
	}

	.head {
	}
</style>