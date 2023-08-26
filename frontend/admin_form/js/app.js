const image = document.querySelector(".upload img"),
    input = document.querySelector(".upload input");

    input.addEventListener("change" , () => {
        image.src = URL.createObjectURL(input.files[0]);
    });