const episodes = document.querySelectorAll(".titres");
const choix = document.getElementById("perso");

choix.addEventListener("change", () => {
    const value = choix.value
    episodes.forEach(episode => {
        const personnage = episode.id.split(",")
        if (value === "tous" || personnage.includes(value)) {
            episode.style.display=""
        } 
        else {
            episode.style.display="none"
        }
    })
})