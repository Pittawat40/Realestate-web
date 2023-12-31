import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faBars,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faComment,
  faVideo,
  faMessage,
  faLocationDot,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPhone,
  faBars,
  faChevronRight,
  faChevronLeft,
  faPlus,
  faComment,
  faVideo,
  faMessage,
  faLocationDot,
  faBarsStaggered
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
