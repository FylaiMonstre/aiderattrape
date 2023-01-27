function  verifPassword(){
    let password1 = document.getElementById('password1')
    let password2 = document.getElementById('password2')
    if(password1.value == password2.value){
        if(password1.value.length >= 8){
            return true;
        } else{
            document.getElementById('message').innerHTML = 'Longueur du mot de passe incorrect';
            return false;
        }
    }   else    {
        document.getElementById('message').innerHTML = "Les 2 mots de passe ne correspondent pas";
        return false;
    }
    
}


function listeAge(min,max){
    if (max > min){
        let liste = document.getElementById('age');
        for(let i=min;i<= max;i++){
            liste.innerHTML += '<option value="'+i+'">'+i+'ans</option>'
        }
    } else {
        console.log("Attention problème avec les valeurs pour l'age")
    }
}

function listePays(){
    let listPays = ['france','US']
    let selectpays = document.getElementById('pays')
        for( i = 0;i < listPays.length;i++){
            selectpays.innerHTML += '<option value="'+listPays[i]+'">'+listPays[i]+'</option>'
        }
}

function verifLength(element,longueur){
    let valeur = element.value;
    if(valeur.length >= longueur){
        booleen = true
    }   else    {
        booleen = false
        switch(valeur.length){
            
            case 6:
                element.style.background = 'red';
            break;
            case 8:
                element.style.background = 'orange';
            break;
            case 12:
                element.style.background = 'green';
            break
        }
        return booleen;
    }
}
function genereMdp(){
    let caracteres = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN,;:!?./§&é"(-è_çà)=1234567890°+'
    let long = Math.floor(Math.random()*8)
    //
    long = 8+long;
    //
    let motdepasse = '';
    //
    for(let i=0;i<=long;i++){
        motdepasse+= caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    }
    document.getElementById('password1').value = motdepasse;
    document.getElementById('password2').value = motdepasse;
}

function voirMdp(){
    document.getElementById('password1').setAttribute('type','text');
    document.getElementById('password2').setAttribute('type','text');
}
function cacherMdp(){
    document.getElementById('password1').setAttribute('type','password');
    document.getElementById('password2').setAttribute('type','password');
}
function affiche5mdp(){
    voirMdp();
    let cache = setTimeout('cacherMdp()', 5000);
}
function clickreclick(){
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    if(password1.getAttribute('type') == 'text') {
        cacherMdp();
        document.getElementById('btn-affiche').innerText = 'afficher mot de passe';
    } else {
        voirMdp();
        document.getElementById('btn-affiche').innerText = 'cacher mot de passe';
    }
}
function verifAge(){
    let age = document.getElementById('age')
    if(age.value >= 18){
        document.getElementById('message').innerText = "vous avez l'age nécessaire";
        document.getElementById('submit').removeAttribute('disabled');
        document.getElementById('submit').innerText = 'Inscription';
    }   else    {
        document.getElementById('submit').setAttribute('disabled','disabled');
        document.getElementById('submit').innerText = 'Impossible de valider le formulaire';
        return false;
    }
}
function verifEmail(element){
    let regex = /^[0-9]{10,}$/i;
    if(regex.test(element.value)){
        element.style.background = 'green';
    } else {
        element.style.background = 'red';
    }
}

function verifTelephone(element){
    let regex = /^[a-z0-9.-_]{4,}@+[a-z0-9.-]{4,}.+[a-z]{2,}$/i;
    if(regex.test(element.value)){
        element.style.background = 'green';
    } else {
        element.style.background = 'red';
    }
}

function verifForm(){
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    let email = document.getElementById('email');
    if(nom.value != "" && prenom.value != "" && email.value != ""){
        if(verifAge()){
            if(verifPassword()){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else{
        if(nom.value == ''){
            document.getElementById('message').innerText = "Veuillez renseigner votre nom";
        }
        else if(prenom.value == ''){
            document.getElementById('message').innerText = "Veuillez renseigner votre prénom";
        }
        else if(email.value ==''){
            document.getElementById('message').innerText = "Veuillez renseigner votre email";
        }
        return false;
    }
}

listeAge(12,70);
listePays();
verifAge(); 

(function(){
    let httpRequest;
    document.getElementById('ajax').addEventListener('click',makeRequest);

    function makeRequest() {
        // on instancie XMLHttpRequest
        httpRequest = new XMLHttpRequest();

        if(!httpRequest){
            console.log("Erreur lors de la création de l'instance");
            return false;
        }
        httpRequest.onreadystatechange = traiterRequete;
        httpRequest.open('GET','ajax.html');
        httpRequest.send();
    }
    function traiterRequete() {
        if(httpRequest.readystate === XMLHttpRequest.DONE) {
            if(httpRequest.statue === 200){
                document.getElementById('retour_ajax').innerHTML = httpRequest.responseText;
            } else {
                console.log("erreur avec la requête")
            }
        }
    }
})