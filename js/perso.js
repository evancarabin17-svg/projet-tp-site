const buttons = document.querySelectorAll(".boutons");
const autress = document.querySelectorAll(".autres");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 
        : -1;
        const imActive = document.querySelector(".active");
        newIndex = calcNextSlide + [...autress].indexOf(imActive);
        if (newIndex < 0) newIndex = [...autress].length - 1;
        if (newIndex >= [...autress].length) newIndex=0;
        autress[newIndex].classList.add("active"); 
        imActive.classList.remove("active");
    });
})