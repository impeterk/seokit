<script>
	import { Button, Card, DropdownDivider, Heading, Input, Label } from 'flowbite-svelte';
	import { EnvelopeSolid, LockSolid } from 'flowbite-svelte-icons';

	import { pb } from '$lib/utils/pocketbase.svelte';
	import { goto } from '$app/navigation';
	import HeroImg from '$lib/assets/hero.webp?enhanced';

	let form = $state({ email: '', password: '' });
	async function handleLogin() {
		await pb.collection('users').authWithPassword(form.email, form.password);
		if (pb.authStore.isValid) goto('/dashboard');
	}
</script>

<section class="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2">
	<enhanced:img src={HeroImg} alt="hero" class="h-full w-full object-cover object-[65%]" />
	<div class="flex flex-col items-center justify-center gap-8">
		<div class="text-balance text-center">
			<Heading tag="h2">SEO kit</Heading>
			<Heading tag="h4">Your last tool for peak ranking performence</Heading>
		</div>

		<Card class="sm:max-w-md">
			<Heading class="py-8 text-center" tag="h3">Login</Heading>
			<div class="mx-auto mb-6 w-full max-w-md">
				<Label for="input-group-1" class="mb-2 block">Your Email</Label>
				<Input id="email" type="email" bind:value={form.email} placeholder="name@flowbite.com">
					<EnvelopeSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
				</Input>
				<Label for="input-group-2" class="my-2 block">Your Password</Label>
				<Input
					id="password"
					type="password"
					bind:value={form.password}
					placeholder="supersecretpassword"
				>
					<LockSolid slot="left" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
				</Input>
				<Button class="my-4 w-full" onclick={handleLogin}>Login</Button>
				<DropdownDivider>or</DropdownDivider>
				<Button class="my-4 w-full" color="dark">Get Started</Button>
				<Button class="my-4 w-full" color="light" href="/dashboard">Continue to dashboard</Button>
			</div>
		</Card>
	</div>
</section>
