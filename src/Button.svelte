
<script contexte="module">
     export function handleClick(){
       alert("salut");
    }; 
    export let text = "button";
</script>



<button class="button-right" on:click={handleClick}>
    {text}
</button>

<style>
    
</style>