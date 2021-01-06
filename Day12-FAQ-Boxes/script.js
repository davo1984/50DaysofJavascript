// bring in toggle buttons class=faq-toggle querySelectorAll
const faqs = document.querySelectorAll(".faq-toggle")

// loop through nodelist  using forEach
faqs.forEach((faq) => {
    // add click event addEventListener
    faq.addEventListener("click", () => {
        // toggle the active class on the parent node .parentNode & classList.toggle()
        faq.parentNode.classList.toggle("active")
    })
})
