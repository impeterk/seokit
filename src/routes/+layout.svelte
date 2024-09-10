<script>
	import Header from '$lib/components/layout/header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />
	<slot />
</div>

<style>
	.app {
		display: grid;
		grid-template-rows: auto 1fr;
	}
</style>
