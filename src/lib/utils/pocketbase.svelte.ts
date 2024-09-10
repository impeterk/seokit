import { goto } from '$app/navigation';
import PocketBase from 'pocketbase';
import { PUBLIC_DB_URL } from '$env/static/public';

export const pb = new PocketBase(PUBLIC_DB_URL);

const userAuthStore = () => {
	let user = $state(pb.authStore.model || null);
	function updateUser(newUser: any) {
		user = newUser;
	}
	return {
		get user() {
			return user;
		},
		updateUser
	};
};

export const currentUser = userAuthStore();
pb.authStore.onChange((auth) => {
	currentUser.updateUser(pb.authStore.model);
	if (!pb.authStore.isValid) {
		goto('/');
	}
});
