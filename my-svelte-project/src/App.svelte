<script>
    import { text } from "svelte/internal";
    import { fly, fade } from "svelte/transition";
    //     import spin from "./spin.js";
    import Nested from "./Nested.svelte";

    // export let name;
    // let name = "world";
    let a = 1;
    let b = 2;
    let visible = true;
</script>

<style>
    main {
        background-color: lightblue;
        text-align: center;
        padding: 1em;
        /* max-width: 240px; */
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    .centered,
    .h1 {
        color: purple;
        font-family: "Comic Sans MS";
        font-size: 2em;
        font-weight: bold;
        position: absolute;
        left: 50%;
        top: 75%;
        transform: translate(-50%, -50%);
    }
</style>

<main>
    <Nested />
    <p>
        Visit the
        <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
        to learn how to build Svelte apps.
    </p>

    <label> <input type="checkbox" bind:checked={visible} /> Visible? </label>

    {#if visible}
        <!-- <div class="centered" transition:fly={{ y: 250 }}> -->
        <div class="centered" transition:fly={{ y: 250 }}>
            <span><p>{a} + {b} = {a + b}</p></span>
        </div>
    {/if}

    <input type="number" bind:value={a} />
    <input type="number" bind:value={b} />

    <!--     <p>{a} + {b} = {a + b}</p> -->
</main>
