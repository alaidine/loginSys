<script>
    import Button from '../../lib/Button.svelte'
    import Input from '../../lib/Input.svelte'
</script>

<section>
    <div class="container">
        <Input />
        <Input />
        <Input />
        <Button value="Register" />
        <Button value="Home" />
    </div>
</section>

<style>
    .container {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    section {
		border-radius: 25px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        height: 320px;
        width: 250px;
        box-shadow: 5px 5px 5px 5px grey;
    }
</style>