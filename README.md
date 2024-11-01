# Jeu des Devinettes - Trouvez le Nombre !

Ce projet est un jeu de devinettes simple, où le joueur doit trouver un nombre aléatoire compris entre 1 et 250. Le jeu est développé en **HTML**, **CSS**, et **JavaScript**.

## Fonctionnalités

- **Nombre Aléatoire** : Un nombre aléatoire entre 1 et 250 est généré à chaque nouvelle partie.
- **Système de Feedback** : Après chaque tentative, un message indique si le nombre à deviner est plus grand ou plus petit.
- **Historique des Parties** : Un tableau enregistre chaque partie terminée, affichant le nombre de tentatives et le nombre cible pour chaque partie.
- **Gestion des Tentatives** : Le jeu ignore les tentatives répétées en affichant un message lorsque le joueur entre le même nombre deux fois.
- **Interface Utilisateur** : Boutons "Valider" pour les tentatives et "Rejouer" pour démarrer une nouvelle partie.
- **Alertes et Validation** : Le jeu informe l'utilisateur s'il n'a pas entré de nombre valide.

## Structure des Fichiers

- `index.html` : Contient le code HTML pour l'interface utilisateur.
- `style.css` : Fournit le style de la page avec Bootstrap et des classes personnalisées.
- `script.js` : Contient la logique du jeu en JavaScript, y compris la génération de nombres aléatoires et la gestion des tentatives.

## Installation

Aucune installation requise. Téléchargez les fichiers, puis ouvrez `index.html` dans un navigateur pour jouer au jeu.

## Utilisation

1. **Commencer le jeu** : Saisissez un nombre entre 1 et 250 dans le champ de texte, puis cliquez sur "Valider".
2. **Réponses du Jeu** :
   - Un message s'affiche indiquant si le nombre cible est plus grand ou plus petit que le nombre entré.
   - Lorsqu'il est trouvé, un message de victoire apparaît, et le bouton "Rejouer" est activé pour démarrer une nouvelle partie.
3. **Historique des Parties** : Un tableau situé en dessous du jeu enregistre chaque partie, avec le nombre de tentatives et le nombre cible.

## Code Source

### Fonction Principale : `verifierValeur()`

Cette fonction vérifie la valeur entrée par le joueur et compare avec le nombre cible. Elle affiche des messages d'aide pour guider le joueur et désactive le bouton "Valider" une fois le nombre trouvé.

### Fonction `rejouer()`

Cette fonction génère un nouveau nombre aléatoire et réinitialise les variables pour commencer une nouvelle partie.

### Fonction `ajouterHistorique()`

Une fois le nombre trouvé, cette fonction ajoute une ligne dans le tableau d'historique avec le nombre de tentatives et le nombre à deviner.

## Technologies Utilisées

- **HTML5** : Structure de la page.
- **CSS3** : Mise en page et style avec Bootstrap.
- **JavaScript** : Logique de jeu et gestion des événements.

## Améliorations Possibles

- Ajouter un chronomètre pour mesurer le temps de chaque partie.
- Afficher des statistiques, telles que le meilleur score ou le nombre moyen de tentatives.
- Implémenter des niveaux de difficulté en ajustant les limites du nombre aléatoire.

## Auteur

Développé par [Mathias Renard](https://www.linkedin.com/in/mathias-renard-70a919239/)

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
