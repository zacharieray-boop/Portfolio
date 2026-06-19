// On récupère les éléments HTML
const popup = document.getElementById("article");
const btnOuvrir = document.getElementById("ouvrirPopup");
const btnFermer = document.getElementsByClassName("bouton-fermer")[0];

const popup2 = document.getElementById("article2");
const btn2Ouvrir = document.getElementById("ouvrirPopup2");
const btn2Fermer = document.getElementsByClassName("bouton2-fermer")[0];

// Ouvrir le popup au clic sur le bouton
btnOuvrir.onclick = function() {
  popup.style.display = "block";
}
btn2Ouvrir.onclick = function() {
  popup2.style.display = "block";
}

// Fermer le popup au clic sur la croix (x)
btnFermer.onclick = function() {
  popup.style.display = "none";
}
btn2Fermer.onclick = function() {
  popup2.style.display = "none";
}

// Fermer le popup si l'utilisateur clique n'importe où en dehors du contenu
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    } else if (event.target == popup2) {
        popup2.style.display = "none";
    }
}