<script lang="ts">
    import Button from '../../lib/Button.svelte'
		import OtherButton from '../../lib/OtherButton.svelte'
    import Input from '../../lib/Input.svelte'
    import * as db from '../../db/main'

    export let email: string = ''
    export let password: string = ''

    function isValidInput(input: string[]): boolean {
        if (input[0].length == 0 || input[1].length == 0) return false
        return true
    }

		function login() {
				let input: string[] = [email, password]
				let isSignedIn: boolean = true
				console.log(input)
				
				if (isValidInput(input)) {
						db.Login(email, password)
				}

				if (isSignedIn == true) { // change routes to be on logged in page
						console.log("is signed in")
				}
		}
</script>

<section>
    <div class="container">
        <Input bind:value={email} />
        <Input bind:value={password} />
        <OtherButton value="Login" myFunction={login} />
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
        height: 300px;
        width: 250px;
        box-shadow: 10px 5px 5px 5px grey;
    }
</style>
