import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		size: [20, 20], // height, width
	}
});

export default app;