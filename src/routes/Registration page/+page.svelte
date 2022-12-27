<script lang="ts">
    import Button from '../../lib/Button.svelte'
		import OtherButton from '../../lib/OtherButton.svelte'
    import Input from '../../lib/Input.svelte'
    import * as db from '../../db/main'

    let email: string = ''
    let password: string = ''

    function isValidInput(input: string[]): boolean {
        if (input[0].length == 0 || input[1].length == 0) return false
        return true
    }

		function register() {
				let input: string[] = [email, password]
				console.log(input)

				if (isValidInput(input)) db.Register(email, password)
				else console.log("invalid input")
		}
</script>

<section>
    <div class="container">
        <Input bind:value={email} />
        <Input bind:value={password} />
        <OtherButton value="Register" myFunction={register} />
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
