// Steg 1: Få et bilde av en cookie på nettsiden (i HTML og CSS) - Ferdig

// Steg 2: Gjør det mulig å trykke på cookien (spill av lyd for hvert klikk)

document.getElementById("bilde").addEventListener("click", klikk);

// Steg 3: Gi ett poeng for hvert klikk

let poeng = 0;

function oppdaterpoeng() {
    document.getElementById("poeng-display").innerText = poeng;
}

function klikk() {
    poeng = poeng + 1; // ++ funker også, men dette er mer oversiktlig.
    console.log("Du klikket! " + poeng);
    oppdaterpoeng();
}
// Steg 4: Sett en begrensing på tid

setTimeout