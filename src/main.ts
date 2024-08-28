import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "vue3-toastify/dist/index.css";
import Toast from "vue3-toastify";

const app = createApp(App);
app.use(Toast);
app.mount("#app");
