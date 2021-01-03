const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

/*checkBoxes()  /* show "above the fold" until user scrolls IF called here! */

/* 
 * Could also be implemented using "Animate on Scroll" (AOS) library. 
 * This is more lightweight, but offers fewer options and effects.
 */

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}