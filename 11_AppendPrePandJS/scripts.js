const upArrowsEls = document.querySelectorAll('.upArrow');
const downArrowsEls = document.querySelectorAll('.downArrow');


function toTheThing(){
    upArrowsEls.forEach(el => {
        el.addEventListener('click', e => {
            let listEl = e.target.previousSibling;
            console.log(listEl);
        })
    })
    downArrowsEls.forEach(el => {
        el.addEventListener('click', e => {

        })
    })
}

console.log(upArrowsEls);
