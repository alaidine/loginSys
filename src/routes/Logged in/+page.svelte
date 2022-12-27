<script>
    import Button from '../../lib/Button.svelte'
		import OtherButton from '../../lib/OtherButton.svelte'
		import * as db from '../../db/main'

		function Logout() {
			db.Logout()
		}
</script>

<div>
    <h2>Succesfully Logged In!</h2>
		<OtherButton value="Logout" myFunction={Logout} />
    <Button value="Home" />
</div>
