<script lang="ts">
	export let value: string
	export let myFunction
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

<button class="button" on:click={myFunction}>{value}</button>
