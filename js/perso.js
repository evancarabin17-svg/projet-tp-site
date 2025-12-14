const buttons = document.querySelectorAll(".boutons");
const autress = document.querySelectorAll(".autres");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const calcNextSlide = e.target.id === "next" ? 1 
        : -1
        const imActive = document.querySelector(".active")
        newIndex = calcNextSlide + [...autress].indexOf(imActive)
        if (newIndex < 0) newIndex = [...autress].length - 1
        if (newIndex >= [...autress].length) newIndex=0
        autress[newIndex].classList.add("active");
        imActive.classList.remove("active")
    })
})

Array.from(document.querySelectorAll('.tabs')).forEach((tab_container, TabID) => {
    const registers = tab_container.querySelector('.tab-registers')
    const bodies = tab_container.querySelector('.tab-bodies')
  
    Array.from(registers.children).forEach((el, i) => {
      el.setAttribute('aria-controls', `${TabID}_${i}`)
      bodies.children[i]?.setAttribute('id', `${TabID}_${i}`)
    
      el.addEventListener('click', (ev) => {
        let activeRegister = registers.querySelector('.active-tab');
        activeRegister.classList.remove('active-tab')
        activeRegister = el;
        activeRegister.classList.add('active-tab')
        masque(registers, bodies, activeRegister)
      })
  })
})
function masque(registers, bodies, activeRegister) {
    Array.from(registers.children).forEach((el, i) => {
        if (bodies.children[i]) {
            bodies.children[i].style.display = el == activeRegister ? 'block' : 'none'
        }
        el.setAttribute('aria-expanded', el == activeRegister ? 'true' : 'false')
    })
}