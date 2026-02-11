const upArrowsEls = document.querySelectorAll('.upArrow');
const downArrowsEls = document.querySelectorAll('.downArrow');
const liContainerEls = document.getElementById('List')

function doTheThing(){
    upArrowsEls.forEach(el => {
        el.addEventListener('click', e => {
            let listEl = e.target.parentElement;

            let listAboveEl = listEl.previousElementSibling

            liContainerEls.insertBefore(listEl, listAboveEl)
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

        })
    })
}

doTheThing();