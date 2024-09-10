<script>
	import { Navbar, NavBrand, NavHamburger, Button } from 'flowbite-svelte';
	import UserDropdown from '../user/dropdown.svelte';
	import OrgDropdown from '../org/dropdown.svelte';
	import { currentUser } from '$lib/utils/pocketbase.svelte';
</script>

<Navbar
	class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
	fluid={true}
>
	<NavBrand href="/">
		<img src="/favicon.ico" class="me-3 h-6 sm:h-9" alt="SEO kit logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SEO kit</span>
	</NavBrand>
	<NavHamburger onClick={() => console.log('hello')} />
	{#if currentUser.user}
		<ul class="hidden flex-row items-center gap-2 lg:flex">
			<li><UserDropdown /></li>
			<li><span class="text-lg">/</span></li>
			<li><OrgDropdown /></li>
		</ul>
	{:else}
		<Button>Get Started</Button>
	{/if}
</Navbar>
