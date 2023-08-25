// FUNC: FILTER (SITE 1: PET LIST)
const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) => {
    const optionsContainer = selected.nextElementSibling;

    const optionsList = optionsContainer.querySelectorAll(".gen-opt");
    
    selected.addEventListener("click", () => {
        if (optionsContainer.classList.contains("active")) {
            optionsContainer.classList.remove("active");
        } else {
            let currentActive = document.querySelector(".gen-opt-container.active");

            if (currentActive) {
                currentActive.classList.remove("active");
            }
            optionsContainer.classList.add("active");
        }
    });    
    
    optionsList.forEach( o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });
});

