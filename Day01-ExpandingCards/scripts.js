const panels = document.querySelectorAll('.panel')
console.log('Inside: scripts.js')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        console.log('click')
        removeActiveClasses()
        panel.classList.add('active')
    })

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active')
            console.log('clack')
        })
    }
})