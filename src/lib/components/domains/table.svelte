<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		ImagePlaceholder,
		Modal
	} from 'flowbite-svelte';
	import { slide } from 'svelte/transition';

	const items = [
		{
			name: 'Apple MacBook Pro 17"',
			color: 'Sliver',
			type: 'Laptop',
			price: '$2999'
		},
		{
			name: 'Microsoft Surface Pro',
			color: 'White',
			type: 'Laptop PC',
			price: '$1999'
		},
		{
			name: 'Magic Mouse 2',
			color: 'Black',
			type: 'Accessories',
			price: '$99'
		}
	];

	let openRow: null | number = $state(null);
	let details: (typeof items)[0] | null = $state(null);
	let doubleClickModal = $state(false);

	const toggleRow = (i: number) => {
		openRow = openRow === i ? null : i;
	};
</script>

<Table divClass="relative overflow-x-auto border sm:rounded-lg">
	<TableHead class=" bg-primary-300">
		<TableHeadCell>Product name</TableHeadCell>
		<TableHeadCell>Color</TableHeadCell>
		<TableHeadCell>Category</TableHeadCell>
		<TableHeadCell>Price</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each items as item, i}
			<TableBodyRow on:click={() => toggleRow(i)}>
				<TableBodyCell>{item.name}</TableBodyCell>
				<TableBodyCell>{item.color}</TableBodyCell>
				<TableBodyCell>{item.type}</TableBodyCell>
				<TableBodyCell>{item.price}</TableBodyCell>
			</TableBodyRow>
			{#if openRow === i}
				<TableBodyRow
					on:dblclick={() => {
						doubleClickModal = true;
						details = item;
					}}
				>
					<TableBodyCell colspan="4" class="p-0">
						<div class="px-2 py-3" transition:slide={{ duration: 300, axis: 'y' }}>
							<ImagePlaceholder />
						</div>
					</TableBodyCell>
				</TableBodyRow>
			{/if}
		{/each}
	</TableBody>
</Table>
<Modal title={details?.name} bind:open={doubleClickModal} autoclose outsideclose>
	<ImagePlaceholder />
</Modal>
