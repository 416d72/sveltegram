import { writable } from 'svelte/store';
import { browser } from '$app/env';

const ls = browser && localStorage.getItem('sveltegram-theme');

export const theme = writable(ls);

theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('sveltegram-theme', `${value}`);
	}
});
