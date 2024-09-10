<script>
	import Header from '$lib/components/layout/header.svelte';
	import Sidebar from '$lib/components/layout/sidebar.svelte';
	import { Heading } from 'flowbite-svelte';
	import '../app.css';
</script>

<Header />
<div class="app">
	<Sidebar />
	<main class="px-2 sm:px-8">
		<Heading tag="h1" class="py-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
			>Domain Dashboard</Heading
		>
		<slot></slot>
	</main>
</div>

<style>
	.app {
		display: grid;
		grid-template-columns: auto 1fr;
		min-height: calc(100vh - 4rem - 20px);
	}
</style>
