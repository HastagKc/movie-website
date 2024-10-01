// FILE: src/main.ts
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import 'quasar/src/css/index.sass';
import 'remixicon/fonts/remixicon.css';
import { createApp } from "vue";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar CSS
import "quasar/src/css/index.sass";

import App from "./App.vue";
// creating instance of Pinia
const pinia = createPinia()
const myApp = createApp(App);
myApp.use(Quasar, {
  plugins: {}, 
});
myApp.use(pinia);
myApp.mount("#app");
