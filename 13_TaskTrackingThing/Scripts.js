const taskInputTextEl = document.getElementById("TaskInputText");
const taskInputTimeEl = document.getElementById("TaskInputTime");
const taskButtonEl = document.getElementById("TaskInputButton");

const taskOutputEl = document.getElementById("TaskOutputs");

function addTask() {
    taskButtonEl.addEventListener("click", e => {
        e.preventDefault();

        const taskText = taskInputTextEl.value;
        const time = taskInputTimeEl.value;
        
        const newTaskWrapper = document.createElement('div');
        
        const newTaskText = document.createElement('span');
        const newTaskStartedTime = document.createElement('span');
        
        const timeSpendOnTask = document.createElement('span');
        
        timeSpendOnTask.innerText = "00:00:00";
        timeSpendOnTask.classList.add('timeSpend');
        
        newTaskText.innerText = taskText;
        newTaskStartedTime.innerText = time;
        
        newTaskWrapper.appendChild(newTaskText);
        newTaskWrapper.appendChild(newTaskStartedTime);
        newTaskWrapper.appendChild(timeSpendOnTask);
        
        taskOutputEl.appendChild(newTaskWrapper);
        
        const timeTickInterval = setInterval(addSecond, 1000);
        
        return timeTickInterval
    });
}

function addSecond() {
    const timesSpendonTaks = document.querySelectorAll('.timeSpend');
    timesSpendonTaks.forEach(timeSpend => {
        let el = timeSpend;
        let elParent = el.parentElement;
        
        let elValue = el.innerText.valueAsNumber / 1000;
        
        elValue += 1

        elParent.removeChild(el);
        let hours = Math. floor(elValue / 3600); 
        let minutes = Math. floor((elValue - (hours * 3600)) / 60); 
        let seconds = elValue - (hours * 3600) - (minutes * 60);
        
        console.log(elValue);
        
        console.log(hours, minutes, seconds);
        
        
        el.innerHTML = `${hours}:${minutes}:${seconds}`;
        
        elParent.appendChild(el);
        
    })
}

addTask();