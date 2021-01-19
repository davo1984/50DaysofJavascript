<script>
    export let name = "world";
    $: if (!name) {
        name = "world";
    }
</script>

<style>
    h1 {
        /* color: #ff3e00; */
        color: green;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
</style>

<h1>Hello {name}!</h1>

<!-- <input type="text" bind:value={name} /><br /> -->
