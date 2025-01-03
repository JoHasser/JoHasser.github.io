// Steg 1: Få et bilde av en cookie på nettsiden (i HTML og CSS) - Ferdig

// Steg 2: Gjør det mulig å trykke på cookien (spill av lyd for hvert klikk)

document.getElementById("bilde").addEventListener("click", klikk);
function klikk() {
    console.log("du klikket!")
}

// Steg 3: Gi ett poeng for hvert klikk

let poeng

// Steg 4: Sett en begrensing på tid