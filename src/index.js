import App from "./App.svelte";
import "./components/webcomp.js";
import "./components/my-element.ts";
let app = new App({
  target: document.body,
});

export default app;