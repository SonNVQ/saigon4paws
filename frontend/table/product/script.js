const optionMenu = document.querySelector(".select-menu_in"),
    selectBtn = optionMenu .querySelector(".select.select-in"),
    options = optionMenu .querySelectorAll(".option"),
    all_text = optionMenu .querySelector(".all");
    

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectdOption = option.querySelector(".option-text").innerText;
        all_text.innerText = selectdOption;
        console.log(selectdOption)
    })
})