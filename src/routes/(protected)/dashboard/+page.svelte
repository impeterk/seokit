<script lang="ts">
	import DomainsTable from '$lib/components/domains/table.svelte';
	import { Card } from 'flowbite-svelte';
</script>

<section class=" py-4">
	<Card size="none" class="max-w-[100vw]">
		<DomainsTable />
	</Card>
</section>
