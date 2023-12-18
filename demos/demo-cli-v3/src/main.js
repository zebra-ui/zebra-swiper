import { createSSRApp } from "vue";
import DemoBlock from "@/components/DemoBlock/DemoBlock.vue";
import DemoItem from "@/components/DemoItem/DemoItem.vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.component("demo-block", DemoBlock);
  app.component("demo-item", DemoItem);
  return {
    app,
  };
}
