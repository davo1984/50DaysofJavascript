<script>
    // import { text } from "svelte/internal";
    import { fly, fade } from "svelte/transition";
    import spin from "./spin.js";
    import Nested from "./Nested.svelte";
    let who;
    let a = 1;
    let b = 2;
    $: result = a + b;
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

    .equation {
        z-index: 1;
        color: purple;
        font-family: "Comic Sans MS";
        font-size: 2em;
        font-weight: bold;
        position: absolute;
        left: 50%;
        top: 75%;
        margin-top: 0px;
        margin: 0;
        padding: 0;
        transform: translate(-50%, -50%);
    }
    span {
        z-index: 2;
        /* position: absolute; */
        margin: 0;
        padding: 0;
        transform: translate(-50%, -50%);
        font-size: 2em;
    }
    .input {
        z-index: 10;
    }
</style>

<main>
    <Nested name={who} />
    <p>
        Visit the
        <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
        to learn how to build Svelte apps.
    </p>
    <label> <input type="checkbox" bind:checked={visible} /> Visible? </label>
    <div class="input">
        <input type="text" bind:value={who} /><br />
        <input type="number" bind:value={a} />
        <input type="number" bind:value={b} />
    </div>
    {#if visible}
        <div class="equation" transition:fly={{ x: 250 }}>
            <!-- <div class="equation" in:spin out:fade> -->
            <span><p>{a} + {b} = {result}</p></span>
        </div>
    {/if}
</main>
