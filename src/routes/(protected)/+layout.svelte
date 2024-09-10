<script>
	import Sidebar from '$lib/components/layout/sidebar.svelte';
	import { Heading } from 'flowbite-svelte';
</script>

<div class="dashboard">
	<Sidebar />
	<main class="px-2 sm:px-8">
		<Heading tag="h1" class="py-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
			>Domain Dashboard</Heading
		>
		<slot></slot>
	</main>
</div>

<style>
	.dashboard {
		display: grid;
		grid-template-columns: 1fr;
		@media screen and (min-width: 1024px) {
			grid-template-columns: auto 1fr;
		}
	}
</style>
