let h1 = document.querySelector("h1");
console.log(h1)

// id de balise -> nom
let input = document.querySelector("#nom");
console.log(input.value);

// Image...
let image = document.querySelector("#imgAChanger")
image.src ="nouelle image"

// Button du formulaire d'inscription
function boom()
{
    let button = document.querySelector("#validerInscription");
    button.textContent = "Demande envoyé ...";
}