const taskInputTextEl = document.getElementById("TaskInputText");
const taskInputTimeEl = document.getElementById("TaskInputTime");
const taskButtonEl = document.getElementById("TaskInputButton");

const taskOutputEl = document.getElementById("TaskOutputs");

let isRegistred = false;

function addTask() {
    taskButtonEl.addEventListener("click", e => {
        e.preventDefault();

        const taskText = taskInputTextEl.value;
        const time = taskInputTimeEl.value;
        
        const newTaskWrapper = document.createElement('div');
        
        const newTaskText = document.createElement('span');
        const newTaskStartedTime = document.createElement('span');
        
        const timeSpendOnTask = document.createElement('span');
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerText = 'finished!';
        
        timeSpendOnTask.innerText = "00:00:00";
        timeSpendOnTask.classList.add('timeSpend');
        
        newTaskText.innerText = taskText;
        newTaskStartedTime.innerText = time;
        
        newTaskWrapper.appendChild(newTaskText);
        newTaskWrapper.appendChild(newTaskStartedTime);
        newTaskWrapper.appendChild(timeSpendOnTask);
        newTaskWrapper.appendChild(deleteButton);
        
        taskOutputEl.appendChild(newTaskWrapper);
       
       registerInterval()
        registerDeleteButtons()
        
    });
}

function registerInterval() {
    if (isRegistred) {
        return;
    } else  {
         setInterval(addSecond, 1000);
         isRegistred = true;
    }
}

function addSecond() {
    const timesSpendonTaks = document.querySelectorAll('.timeSpend');
    timesSpendonTaks.forEach(timeSpend => {
        let el = timeSpend;
        let elParent = el.parentElement;
        
        // let elValue = el.innerText.valueAsNumber / 1000;
        let timeValues = el.innerText.split(':');
        let elSecondValue = Number(timeValues[2]);
        let elMinuteValue = Number(timeValues[1]) *  60;
        let elHourValue = Number(timeValues[0]) * 3600;
        
        const totalSeconds = elSecondValue + elMinuteValue +elHourValue + 1;
        
        
        elParent.removeChild(el);
        
        const result = new Date(totalSeconds * 1000).toISOString().slice(11, 19);
        
        
        el.innerHTML = result.toString(); 
        
        elParent.children[2].before(el);
        
    })
}

function registerDeleteButtons() {
    const deleteButtonELs = document.querySelectorAll('.deleteButton');
    
    console.log(deleteButtonELs + "lol");
    
    deleteButtonELs.forEach(deleteButton => {
        deleteButton.addEventListener('click', e => {
            e.preventDefault();
            
            const taskToDelete = e.target.parentElement
            
            taskToDelete.remove()
        })
    })
}

addTask();