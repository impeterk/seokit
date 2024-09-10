<script>
	import {
		Avatar,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		DropdownDivider,
		Button
	} from 'flowbite-svelte';
	import { currentUser, pb } from '$lib/utils/pocketbase.svelte';
</script>

<Button id="user-drop" color="alternative" size="xs" class="gap-2 border-0">
	<Avatar class="cursor-pointer" size="sm" />
	{currentUser.user?.email}
</Button>
<Dropdown triggeredBy="#user-drop">
	<DropdownHeader>
		<span class="block text-sm">user@email.com</span>
	</DropdownHeader>
	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem>Settings</DropdownItem>
	<DropdownItem>Earnings</DropdownItem>
	<DropdownDivider />
	<DropdownItem onclick={() => pb.authStore.clear()}>Sign out</DropdownItem>
</Dropdown>
