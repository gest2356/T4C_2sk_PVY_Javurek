const colorsEl = document.querySelectorAll('.palette-grid');
const selectedColorEl = document.querySelector('.current-color-preview');

let selectedColor = null;
let selectedColorElementFromPicker = null;

function pickSelectedColor() {
    colorsEl.forEach(el => {
        const color = el.querySelectorAll('.color-swatch')
        
        color.forEach(el => {
            el.addEventListener('click', e => {
                selectedColor = e.target.classList[1];
                changeActualColor();
                
                e.target.classList.add('selected');
                selectedColorElementFromPicker = e.target.element;

                if (!e.target.element === selectedColorElementFromPicker) {
                    selectedColorElementFromPicker.classList.remove('selected');
                    
                    e.target.element = selectedColorElementFromPicker;
                }
                
            });
        })
    })
}

function changeActualColor() {
    if (!selectedColor) {
        return;
    }
    
    selectedColorEl.classList.add(selectedColor.toString())
}




export {changeActualColor, pickSelectedColor};
