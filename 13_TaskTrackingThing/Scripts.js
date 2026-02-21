const taskInputTextEl = document.getElementById("TaskInputText");
const taskInputTimeEl = document.getElementById("TaskInputTime");
const taskButtonEl = document.getElementById("TaskInputButton");

const taskOutputEl = document.getElementById("TaskOutputs");

const completedTaskEl = document.getElementById('CompletedTasksInput');

let isRegistred = false;

function addTask() {
    taskButtonEl.addEventListener("click", e => {
        e.preventDefault();

        const taskText = taskInputTextEl.value;
        const time = taskInputTimeEl.value + ":00";
        
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

function getSecondsFromEl(element) {

    let timeValues = element.innerText.split(':');
    let elSecondValue = Number(timeValues[2]);
    let elMinuteValue = Number(timeValues[1]) *  60;
    let elHourValue = Number(timeValues[0]) * 3600;

    const totalSeconds = elSecondValue + elMinuteValue +elHourValue;
    return totalSeconds;
}

function addSecond() {
    const timesSpendonTaks = document.querySelectorAll('#TaskOutputs .timeSpend');
    timesSpendonTaks.forEach(timeSpend => {
        let el = timeSpend;
        let elParent = el.parentElement;
        
        // let elValue = el.innerText.valueAsNumber / 1000;

        const totalSeconds = getSecondsFromEl(el) + 1;

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
            const taskToMove = e.target.parentElement

            taskToDelete.remove()

            taskToMove.removeChild(deleteButton);

            const timeStarted = getSecondsFromEl(taskToMove.children[1]);
            const timeSpent = getSecondsFromEl(taskToMove.children[2]);

            console.log(taskToMove.children[1]);
            console.log(taskToMove.children[2]);
            console.log(timeStarted);
            console.log(timeSpent);

            const timeFinishedSeconds = timeStarted + timeSpent;


            const timeFinishedHourFormat = new Date(timeFinishedSeconds * 1000).toISOString().slice(11, 19);

            const timeFinishedEl = document.createElement("span");
            timeFinishedEl.textContent = timeFinishedHourFormat;
            taskToMove.appendChild(timeFinishedEl);

            completedTaskEl.appendChild(taskToMove);

            saveToLocaleStorage()

        })
    })
}

function saveToLocaleStorage() {

    const arr = Array.from(completedTaskEl.children)
    const taskData = []

    arr.forEach(task => {
        const taskContents = task.querySelectorAll('span');

        const oneTask = {
            name: taskContents[0].textContent,
            startTime: taskContents[1].textContent,
            timeSpent: taskContents[2].textContent,
            endTime: taskContents[3].textContent,
        };

        taskData.push(oneTask);
    })

   localStorage.setItem('tasks', JSON.stringify(taskData) );


}

function loadFromLocalStorage() {

    if (localStorage.getItem('tasks')) {
        let tasksFromLS = JSON.parse(localStorage.getItem('tasks'));

        tasksFromLS.forEach(task => {

            const taskWrapperEl = document.createElement('div')
            const taskContentsEl = document.createElement('span');
            taskContentsEl.innerHTML = task.name;
            const taskStartTimeEl = document.createElement('span');
            taskStartTimeEl.innerHTML = task.startTime;
            const timeSpendOnTaskEl = document.createElement('span');
            timeSpendOnTaskEl.innerHTML = task.timeSpent;
            const taskEndTimeEl = document.createElement('span');
            taskEndTimeEl.innerHTML = task.endTime;

            taskWrapperEl.appendChild(taskContentsEl);
            taskWrapperEl.appendChild(taskStartTimeEl);
            taskWrapperEl.appendChild(timeSpendOnTaskEl);
            taskWrapperEl.appendChild(taskEndTimeEl);

            completedTaskEl.appendChild(taskWrapperEl);
        })
    }
}

loadFromLocalStorage();
addTask();