const formEL = document.getElementById("task-form")
const taskNameEL = document.getElementById("task-input")
const butonEl = document.getElementById("add-btn")

const liEl = document.querySelectorAll(".task-item");


export function chackTask() {
    liEl.forEach((li) => {
        const chackbox = li.querySelector("input[type=checkbox]")

            chackbox.addEventListener("change", (e) => {

                if (e.target.checked) {
                    li.classList.add("completed");
                } else {
                    li.classList.remove("completed");
                }

            })
        })
}


const task = [];



export function initFormLisener() {
    formEL.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const data = new FormData(formEL)
        task.push ({
            title: data.get("title"), dueDate: data.get("dueDate")
        })

    });

    formEL.addEventListener("input", (e) => {
        const errors = validateForm()

        if (errors && errors.length > 0) {
            console.log(errors.join(", "))
            butonEl.disabled = true
        } else {
            butonEl.disabled = false
        }
    })
}

function validateForm(){
    let errors = [];
    const data = new FormData(formEL)

    if (data.get("TextInput") && data.get("TextInput").length <= 3) {
        errors.push("Task must be larger than 3");
    }

    const today = new Date();
    console.log(today)

    today.setHours(0 ,0 ,0 ,0)

    if (data.get("dueDate") && data.get("dueDate") < today) {
        errors.push("Date must be greater than or equal to today");
    }

    return errors;
}

function convertDataToObject() {
    const data = new FormData(formEL)

    const res = {}

    for (let pair of data.entries()) {
        res[pair[0]] = pair[1]
    }

}

function crossCompleated(){


}