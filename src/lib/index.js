// place files you want to import through the `$lib` alias in this folder.
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
	}
});

export default app;