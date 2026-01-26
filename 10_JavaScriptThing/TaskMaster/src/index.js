import { initialize } from './modules/quoutes.js'
import {initFormLisener, chackTask} from "./modules/forms.js";

chackTask()
initialize();

initFormLisener();


/*
document.addEventListener("keydown", () => {
  const name = prompt("Jaké je vaše jméno?");
  alert(name);
});
 */