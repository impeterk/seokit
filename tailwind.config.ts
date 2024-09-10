import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			container: {
				center: true,
				padding: '2rem',
				screens: {
					'2xl': '1400px'
				}
			},
			colors: {
				primary: {
					'50': '#eef0ff',
					'100': '#e0e3ff',
					'200': '#c7ccfe',
					'300': '#a5adfc',
					'400': '#818cf8',
					'500': '#6370f1',
					'600': '#4655e5',
					'700': '#3845ca',
					'800': '#303ba3',
					'900': '#2e3681',
					'950': '#1b1f4b'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), flowbitePlugin]
} as Config;
