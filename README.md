# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :

```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :

```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :

```bash
npm install
```

4. Lancer l'application :

```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :

1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
    - Une brève explication de votre solution
    - Des captures d'écran montrant le fonctionnement
    - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets

#### Objectif : Implémenter une recherche en temps réel

-   [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
-   [ ] 1.2 Implémenter le debounce sur la recherche
-   [ ] 1.3 Documenter votre solution ici

_Réponse pour l'exercice 1 :_

Cette solution implémente une barre de recherche dynamique pour filtrer les produits. Elle utilise useState pour stocker la valeur saisie et useEffect pour déclencher le filtrage des produits en fonction du texte entré.

**Problèmes Rencontrés et Solutions**
Filtrage trop fréquent :
Au départ, la recherche était effectuée à chaque frappe, ce qui ralentissait l'application.
Solution : J'ai utilisé useDebounce pour retarder l'exécution de la fonction de recherche, ce qui a réduit le nombre de filtrages effectués.

![Recherche un produit](./assets/recherche-produit.JPG)

### Exercice 2 : Context et Internationalisation

#### Objectif : Gérer les préférences de langue

-   [ ] 2.1 Créer le LanguageContext
-   [ ] 2.2 Ajouter le sélecteur de langue
-   [ ] 2.3 Documenter votre solution ici

_Réponse pour l'exercice 2 :_  
useContext est utilisé pour gérer la langue (français/anglais). Le LanguageContext permet de changer la langue via un sélecteur. Les traductions sont stockées dans un objet translations et récupérées dynamiquement selon la langue sélectionnée.

Traduction de la page en français
![Sélecteur de langue](./assets/francais.JPG)

Traduction de la page en anglais
![Sélecteur de langue](./assets/anglais.JPG)

### Exercice 3 : Hooks Personnalisés

#### Objectif : Créer des hooks réutilisables

-   [ ] 3.1 Créer le hook useDebounce
-   [ ] 3.2 Créer le hook useLocalStorage
-   [ ] 3.3 Documenter votre solution ici

_Réponse pour l'exercice 3 :_  

Le hook useDebounce() permet de retarder l’exécution d’une action après un certain délai.

Le hook useLocalStorage() est utilisé pour enregistrer et récupérer des données dans le localStorage du navigateur, notamment pour sauvegarder les préférences utilisateur (thème, langue, etc.).

[Ajoutez vos captures d'écran]

### Exercice 4 : Gestion Asynchrone et Pagination

#### Objectif : Gérer le chargement et la pagination

-   [ ] 4.1 Ajouter le bouton de rechargement
-   [ ] 4.2 Implémenter la pagination
-   [ ] 4.3 Documenter votre solution ici

_Réponse pour l'exercice 4 :_

La fonction `handleButton` recharge les produits en appelant `fetchProducts`, qui récupère les données depuis l'API.


Rechargement de la page:
![Rechargement](./assets/Avant-rechargement.JPG)
![Rechargement](./assets/Apres-rechargement.JPG)

La pagination a été implémentée en utilisant les paramètres limit et skip dans l'URL de l'API pour charger une quantité limitée de produits par page. Des boutons "Suivant" et "Précédent" permettent de naviguer entre les pages et de mettre à jour l'affichage des produits en fonction de la page sélectionnée.


Pagination:
![Pagination](./assets/pagination1.JPG)
![Pagination](./assets/pagination2.JPG)

## Rendu

-   Ajoutez l'URL de votre dépôt Github dans **Classroom** et envoyer la réponse dès le démarage de votre projet.
-   Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
-   Le README.md doit être à jour avec vos réponses et captures d'écran.
-   Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.
