// Button du formulaire d'inscription
function boom() {
    let button = document.querySelector("#validerInscription");
    button.textContent = "Demande envoyé ...";
}

// Rouletet de meme
function memeMove() {
    let button = document.querySelector("#memeRoulette");
    let img1 = document.querySelector("#meme1");
    let img2 = document.querySelector("#meme2");
    let img3 = document.querySelector("#meme3");
    let img4 = document.querySelector("#meme4");
    let prems = img1.src;
    img1.src = img3.src;
    img3.src = img4.src;
    img4.src = img2.src;
    img2.src = prems;
}

//calculatrice 
var res ='' ;
function calcul(variable) {
    if (variable == 'res') {
        res = '';
    } else {
        if(variable == '='){
            res = eval(res);
        }else {
            res += variable
        }
    }
    console.log('ajout de '+variable)
    console.log(res);
    document.querySelector('#res').textContent = res;     
}