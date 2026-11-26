function createChevron() {
    const chevron = document.createElement("button")
    chevron.classList.add("chevron")

    chevron.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg>
    `

    chevron.addEventListener("click", () => {
        chevron.classList.toggle("chevron-down")
    })

    return chevron
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        navbar: document.getElementById("navbar")
    }

    const headings = document.querySelectorAll("section > :is(h1, h2, h3, h4, h5, h6)");

    for (const heading of headings) {
        const chevron = createChevron()
        heading.parentElement.classList.add("hidden")
        heading.appendChild(chevron)

        chevron.addEventListener("click", async event => {
            heading.parentElement.classList.toggle("hidden")
        })
    }
})