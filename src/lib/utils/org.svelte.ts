export const createOrg = () => {
	let org = $state('Organization');
	function updateOrg(newOrg) {
		org = newOrg;
	}
	return {
		get org() {
			return org;
		},
		updateOrg
	};
};

export const orgs = $state(['Organization', 'Another org', 'And one more']);
