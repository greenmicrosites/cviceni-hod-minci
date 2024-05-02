const mince = document.querySelector(".mince")


let test = Math.random();

let vysledek = document.querySelector(".vysledek")

if (test >= 0.5) {
    //document.write("Padla panna")
    vysledek.textContent = "Padla panna"
    mince.classList.add("mince--panna")

} else {
    vysledek.textContent = "Padl orel"
    mince.classList.add("mince--orel")

}






