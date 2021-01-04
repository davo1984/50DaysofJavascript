const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "buzzer",
    "bowlWAV",
    "bowl",
]

sounds.forEach((sound) => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound

    btn.addEventListener("click", () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)
})

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound)
        if (song) {
            console.log("nope, not null")
            document.getElementById(sound).pause()
            document.getElementById(sound).currentTime = 0
        } else {
            console.log("yup, is null")
        }
    })
}
