<script context="module">
export function randomPos(max,square) {
		let pos = (Math.floor(Math.random() * ((max/square) - 1)) * square);
		return pos;
    }


</script>