<script lang="ts">
     export let value: string
</script>

<input class="input" bind:value={value} />

<style>
    .input {
        border: 2px solid grey;
        height: 40px;
        width: 210px;
        border-radius: 25px;
    }
</style>
