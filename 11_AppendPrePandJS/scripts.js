const upArrowsEls = document.querySelectorAll('.upArrow');
const downArrowsEls = document.querySelectorAll('.downArrow');
const liContainerEls = document.getElementById('List')
const imutListEl = document.getElementById('input')
const buttonEl = document.getElementById('button')

function doTheThing(){
    const upArrowsEls = document.querySelectorAll('.upArrow');
    const downArrowsEls = document.querySelectorAll('.downArrow');
    const liContainerEls = document.getElementById('List')
    
        upArrowsEls.forEach(el => {
            el.addEventListener('click', e => {
                let listEl = e.target.parentElement;
    
                let listAboveEl = listEl.previousElementSibling
    
                liContainerEls.insertBefore(listEl, listAboveEl)
                
                console.log("upClick")
            })
        })
        downArrowsEls.forEach(el => {
            el.addEventListener('click', e => {
    
                let listEl = e.target.parentElement;
    
                let listBelowEl = listEl.nextElementSibling
    
    
                try {
                    listBelowEl.after(listEl)
                } catch (error) {
                    let firstChild = liContainerEls.firstChild
    
                    liContainerEls.insertBefore(listEl, firstChild)
                } finally {
                    console.log("provedeno")
                }
                console.log("downClick")
    
            })
        })
}

function addNewThingToList(){
    buttonEl.addEventListener('click', e => {
        let newListItem = document.createElement('li')

        newListItem.innerHTML = imutListEl.value
        newListItem.classList.add('ListItem')

        let bottomArrow = document.createElement('button')
        bottomArrow.innerHTML = "↓"
        bottomArrow.classList.add('downArrow')

        let upArrow = document.createElement('button')
        upArrow.innerHTML = "↑"
        upArrow.classList.add('upArrow')

        newListItem.appendChild(bottomArrow)
        newListItem.appendChild(upArrow)

        liContainerEls.appendChild(newListItem)
        
        doTheThing()
    })

}

buttonEl.addEventListener('click', e => {

    
    doTheThing()

});

doTheThing();
addNewThingToList();
