import App from "./App.svelte";
//main file svelte kick start
const app = new App({
  target: document.body, //把app inject到body，這裡可以用querySelector處理
  props: {
    name: "world", //state
  },
});

export default app;
