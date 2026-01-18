const formEl = document.getElementById('myForm');
import {
    fillFormWithSelectedInoice,
    fillSelectWhitInoiceNumbs,
    mirrorDeliveryAndBiling,
    printInvoiceNumber,
    saveData
} from "./Modules/Form.js";

mirrorDeliveryAndBiling();
printInvoiceNumber();
saveData();
fillFormWithSelectedInoice();

