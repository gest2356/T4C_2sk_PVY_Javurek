const DB = []


const formEl = document.getElementById('myForm');
const billingSameEl = document.getElementById('DeliveryAndBilingSame');
const bAddresEl = document.getElementById('billingCompany');
const bStreetEl = document.getElementById('billingStreet');
const bCityEl = document.getElementById('billingCity');
const bZIPEl = document.getElementById('billingZip');
const dAddresEl = document.getElementById('shippingCompany');
const dStreetEl = document.getElementById('shippingStreet');
const dCityEl = document.getElementById('shippingCity');
const dZIPEl = document.getElementById('shippingZip');

const invoiceEl = document.getElementById('invoiceNumber');

const selectEl = document.getElementById('InvoiceSelect');


function mirrorDeliveryAndBiling() {
    billingSameEl.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (dAddresEl.value === "" || dStreetEl.value === "" || dCityEl.value === "" || dZIPEl.value === "") {
        const dataObject = {
            address: bAddresEl.value,
            street: bStreetEl.value,
            city: bCityEl.value,
            zip: bZIPEl.value,
        }

        // console.log(dataObject);

        dAddresEl.value = dataObject.address;
        dStreetEl.value = dataObject.street;
        dCityEl.value = dataObject.city;
        dZIPEl.value = dataObject.zip;
        }
        else{
            dAddresEl.value = ""
            dStreetEl.value= ""
            dCityEl.value = ""
            dZIPEl.value = ""
        }
    })
}

function generateInvoiceNumber() {
    let year = new Date().getFullYear().toString();
     let trimedYear = year.slice(2,4)
    //console.log(trimedYear);
    
    let month = new Date().getMonth() + 1;
     if (month < 10){
         month = "0" + month.toString();
    }
    //console.log(month);

    
    let randomNumber = Math.abs(Math.floor(Math.random()  * (1 - 99999) + (1))).toString();

     while (randomNumber.length < 5) {
         randomNumber = "0" + randomNumber;
     }

    return "FAK" + trimedYear + "-" + month + "-" + randomNumber;
}

function printInvoiceNumber() {
    
    const invoices = DB.map(items => items.invoiceNumber);

    console.log(invoices);
    
    let newInvoiceNumber = generateInvoiceNumber();

    while (invoices.includes(newInvoiceNumber)) {
        newInvoiceNumber = generateInvoiceNumber();
    }
    
    invoiceEl.value = newInvoiceNumber;
}

function fillSelectWhitInoiceNumbs() {

    if (document.querySelector('.addedByInvoice')) {
        selectEl.removeChild(document.querySelector('.addedByInoice'));
    }

    
    DB.forEach(items => {
        const newInvoiceToSelect = document.createElement('option');

        newInvoiceToSelect.textContent = items.invoiceNumber;
        
        newInvoiceToSelect.value = items.invoiceNumber;

        newInvoiceToSelect.className = "addedByInvoice";

        selectEl.appendChild(newInvoiceToSelect);
    })

}

function fillFormWithSelectedInoice() {
    selectEl.addEventListener('change', (e) => {
        e.preventDefault();
        
        const filtredInvoice = DB.find(item => item.invoiceNumber === e.currentTarget.value)


        Object.entries(filtredInvoice).forEach(([key, value]) => {

            const input = formEl.elements[key];

            input.value = value;
        })

        
    })
}

function saveData(){

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const dataObject = Object.fromEntries(new FormData(e.target))

        const exisitngIndex = DB.findIndex(item => item.invoiceNumber === dataObject.invoiceNumber)

        if (exisitngIndex !== -1) {
            DB[exisitngIndex] = dataObject
        } else {
            DB.push(dataObject)
        }

        console.log(DB)

        e.target.reset()

        printInvoiceNumber();
        fillSelectWhitInoiceNumbs()
    })
}

export { mirrorDeliveryAndBiling , printInvoiceNumber, saveData, fillSelectWhitInoiceNumbs, fillFormWithSelectedInoice };
