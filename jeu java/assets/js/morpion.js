//On vérifie si la case contient déjà une valeur
function estValid(button){
    return button.innerHTML.length == 0;
}


function setSymbole(btn,symbole){
    btn.innerHTML = symbole;
}

//ligne

function rechercherVainqueur(pions,joueurs,tour){
    if(pions[0].innerHTML == joueurs[tour] && pions[1].innerHTML == joueurs[tour] && pions[2].innerHTML == joueurs[tour]){
    pions[0].style.backgroundColor = "#9ACD32";
    pions[1].style.backgroundColor = "#9ACD32";
    pions[2].style.backgroundColor = "#9ACD32";
    return true;
    }
    if(pions[3].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[5].innerHTML == joueurs[tour]){
        pions[3].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        return true;
    }
    if(pions[6].innerHTML == joueurs[tour] && pions[7].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]){
        pions[6].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }
    
//ligne fin

//colonne

    if(pions[0].innerHTML == joueurs[tour] && pions[3].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]){
        pions[0].style.backgroundColor = "#9ACD32";
        pions[3].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }
    
    if(pions[1].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[7].innerHTML == joueurs[tour]){
        pions[1].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[7].style.backgroundColor = "#9ACD32";
        return true;
    }
    
    if(pions[2].innerHTML == joueurs[tour] && pions[5].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]){
        pions[2].style.backgroundColor = "#9ACD32";
        pions[5].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }

//colonne fin

//diagonale

    if(pions[0].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]){
        pions[0].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[8].style.backgroundColor = "#9ACD32";
        return true;
    }
    
    if(pions[2].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]){
        pions[2].style.backgroundColor = "#9ACD32";
        pions[4].style.backgroundColor = "#9ACD32";
        pions[6].style.backgroundColor = "#9ACD32";
        return true;
    }

//diagonale fin

}
function matchNul(pions){
    for(var i=0, len = pions.length; i < len;i++){
        if(pions[i].innerHTML.length == 0) return false;
    }
    return true;
}

let Afficheur = function(element){
    let affichage = element;

    function setText(message){
        affichage.innerHTML = message;
    }
    return { sendMessage: setText};
}; // ; pour les fonctions anonyme

function game() {
    // on récupère toutes les cases
    let pions = document.querySelectorAll('#morpion button');
    //On définit le premier tour
    let joueurs = ['X','O'];
    //On définit le premier tour
    let tour = 0;
    let jeuEstFini = false;
    //On définit l'élément du DOM qui affiche les infos
    let afficheur = new Afficheur(document.querySelector('#resultat'));
    afficheur.sendMessage("Vous pouvez commencer joueur "+joueurs[tour]+"c'est à vous ");
    //le nerf de la guerre
    for(var i=0, len = pions.length; i<len;i++){
        pions[i].addEventListener("click",function(){
            
        let sonFini = document.createElement('audio');
        sonFini.src = "assets/son/suu.mp3";
        sonFini.play();

        if(jeuEstFini) return;

        //On cérifie si la case n'est pas déja occupé
        if(!estValid(this)) {
            //On indique que le case est déja prise
            afficheur.sendMessage("case occupée !!! <br/> Joueur "+joueurs[tour]+" c'est encore à vous")
        } else {
            //on rempli le button du symbole
            setSymbole(this,joueurs[tour]);
            //on vérifie si il y a un gagnant
            jeuEstFini = rechercherVainqueur(pions,joueurs,tour);
            //si le jeu est terminé
            if(jeuEstFini) {
                //affiche un message
                afficheur.sendMessage("Le joueur "+joueurs[tour]+" a gagné !!");
                let sonFini = document.createElement('audio');
                sonFini.src = "assets/son/suu.mp3";
                sonFini.play();
                return;
            }
            // On vérifie si la partie est un match nul
            if (matchNul(pions)) {
                afficheur.sendMessage("Partie terminé ! Match nul");
                let sonNul = document.createElement('audio');
                sonNul.src = "assets/son/suu.mp3";
                sonNul.play();
                return;
            }
            // ensuite incrementer les tours
            tour++;
            tour = tour % 2;
            afficheur.sendMessage("Joueur" +joueurs[tour]+" c'est a vous !");
        }
        });
    }
}
game();