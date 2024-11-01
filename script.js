//initialisation des variables globales
var nbr_aleatoire = Math.floor(Math.random() * 250) + 1; //nombre aléatoire entre 1 et 250
let tentatives = 1;
let dernierNombre = null; 

function rejouer() {
    nbr_aleatoire = Math.floor(Math.random() * 250) + 1;
    tentatives = 1;
    dernierNombre = null;
    document.getElementById("message").textContent = "Nouveau jeu ! Bonne chance !";//message lorsqu'on rejoue !
    document.getElementById("resultat").textContent = ""; //on enlève le message de victoire
    document.getElementById("nombre").value = ""; //on enlève le nombre entré en dernier

    document.querySelector('[onclick="verifierValeur()"]').disabled = false; //on autorise le clic sur valider car new partie !
    const btnRejouer = document.querySelector('[onclick="rejouer()"]');
    btnRejouer.disabled = true;//on bloque le rejouer
    btnRejouer.classList.replace('btn-success', 'btn-secondary'); // Remettre la couleur par défaut
}

function verifierValeur(){
    const resultat = document.getElementById("resultat");
    const nbr = document.getElementById("nombre").value;

    if(nbr === ""){
        resultat.innerText = "Veuillez entrer un nombre !"
    } if (nbr == dernierNombre) {
        resultat.innerText = "Vous avez déjà essayé ce nombre !";
        return;
    }if (nbr < nbr_aleatoire){
        resultat.innerText = `Le nombre à trouver est plus grand que ${nbr} !`
        tentatives++;
    } if(nbr > nbr_aleatoire){
        resultat.innerText = `Le nombre à trouver est plus petit que ${nbr} !`
        tentatives++;
    } if(nbr == nbr_aleatoire){
        resultat.innerText = `Vous avez gagné en ${tentatives} tentatives ! Félicitations !`
        ajouterHistorique(tentatives, nbr_aleatoire);
        // Désactiver Valider et activer Rejouer
        document.querySelector('[onclick="verifierValeur()"]').disabled = true;
        const btnRejouer = document.querySelector('[onclick="rejouer()"]');
        btnRejouer.disabled = false;
        btnRejouer.classList.replace('btn-secondary', 'btn-success'); // Change la couleur en vert
    } 
    dernierNombre = nbr;
}

function ajouterHistorique(tentatives, nombreCible){
    const tableau = document.getElementById("ajout_ligne");
    const ligne = document.createElement("tr");

    ligne.innerHTML = `
        <td>${tableau.rows.length + 1}</td>
        <td>${tentatives}</td>
        <td>${nombreCible}</td>
    `;

    tableau.appendChild(ligne)
}