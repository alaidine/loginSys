<script>
	import Button from '../lib/Button.svelte'
</script>

<svelte:head>
	<title>LoginSys</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="container">
		<Button value="Login page" />
		<Button value="Registration page" />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
