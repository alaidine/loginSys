<script lang="ts">
    export let value: string

    const routes = [
        "Login page",
        "Registration page"
    ]

    function handleClick() {
				console.log(`${value} button has been clicked:`)
    }
</script>

<style>
    .button {
        height: 40px;
        width: 220px;
        border-radius: 25px;
        background-color: rgb(194, 194, 194);
        transition: background-color 0.5s;
    }

    .button:hover {
        background-color: rgb(41, 40, 40);
    }

</style>

{#if routes.includes(value)}
    <a href="/{value}">
        <button class="button" on:click={handleClick}>{value}</button>
    </a>
{:else if value == "Home"}
    <a href="/">
        <button class="button" on:click={handleClick}>{value}</button>
    </a>
{:else}
    <button class="button" on:click={handleClick}>{value}</button>
{/if}
