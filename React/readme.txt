API utilisées:

Ghibli: https://ghibliapi.herokuapp.com/
Jikan: https://jikan.moe/

Modifications:

-Utilisation de React
-Utilisation de la programmation orientée objet
-Ajout du logo et du fond comme dépendance
-Affichages de plusieurs espèces simultanément grâce au selecteur
-Améliorations visuelles (CSS)
-Utilisation de Fetch
-Les requêtes sont faites dans une classe (Fetch) en faisant appel à ses fonctions.
-Possibilité de cliquer sur le nom du personnage pour aller sur sa page correspondante.



Nous avons traduit le projet vers React et inclut de la programmation orientée objet.
Nous avons ajoutés les images en tant que dépendances dans le projet et amélioré l'aspect visuel.
Il est maintenant possible d'ajouter plusieurs espèces dans le selecteur pour un affichage complet de toutes les espèces selectionnées. (Voir React-Select)
Nous avons décidé d'utiliser Fetch plutôt que XHR car cela était plus facile et propre.
Nous avons définit une classe (Fetch) permettant de faire toutes les requêtes vers les API à l'intérieur, chaque requête distincte est faite dans sa fonction correspondante. 
Il est possible, si le personnage existe sur la deuxième API, de cliquer sur son nom pour accéder à sa page sur le site MyAnimeList que l'API Jikan utilise.