const formEL = document.getElementById("task-form")
const taskNameEL = document.getElementById("task-input")


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

    taskNameEL.addEventListener("input", (e) => {
        console.log(taskNameEL.value);

    })

}


