<script>
	import {
		Avatar,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		DropdownDivider,
		Button
	} from 'flowbite-svelte';
	import { createOrg, orgs } from '$lib/utils/org.svelte';
	let open = $state(false);
	const currentOrg = createOrg();
	function handleChangeOrg(newOrg) {
		currentOrg.updateOrg(newOrg);
		open = !open;
		console.log(open);
	}
</script>

<Button color="alternative" class="border-0">
	{currentOrg.org}
</Button>
<Dropdown bind:open>
	{#each orgs as org}
		<DropdownItem
			class={currentOrg.org == org ? 'text-primary-500' : ''}
			onclick={() => handleChangeOrg(org)}>{org}</DropdownItem
		>
	{/each}
</Dropdown>
