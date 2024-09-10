export const ssr = false;
import { pb } from '$lib/utils/pocketbase.svelte';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	if (!pb.authStore.isValid) {
		redirect(307, `/?token=invalid&redirectedFrom=${event.url.pathname}`);
	}
};
