import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'test',
		src: "try"
	}
});

export default app;