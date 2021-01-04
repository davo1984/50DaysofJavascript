const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

// same as below using async-await
async function generateJoke() {
    config = {
        headers: {
            Accept: "application/json",
        },
    }

    const result = await fetch("https://icanhazdadjoke.com", config)

    const data = await result.json()

    jokeEl.innerHTML = data.joke
}

//same code using .then
// function generateJoke() {
//     config = {
//         headers: {
//             Accept: "application/json",
//         },
//     }
//     fetch("https://icanhazdadjoke.com", config)
//         .then((response) => response.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }
