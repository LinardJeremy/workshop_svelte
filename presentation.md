<!-- Partie Marie -->
1 personne présenter svelte grosso merdo framworks (comparer avec react) etc, expliquer. Svelte compiler plus qu'une librairie. Les deux sont basés sur javascript et permettent de gérer du Html et Css. Il n'est pas basé sur un dom virtuel au contraire de react vue et angular le dom est manipulé par le framework .Crée fin 2016 .
La dernière version majeure  date d'avril 2019. Limite, pour le moment il est assez récent donc, reste moins utilisé que React etc, il y aussi moins de documentation/tuto sur le net que les autres frameworks et librairies. Toujours en développement. L'avantage de svelte est son poids léger, une fois le code compilé l'application pèse 3 à 4 fois moins qu'avec une compilation sous React ou VUEJS. Il ressort d'une analyse que Svelte est 35 fois plus rapide que React et 50 fois plus rapide que VueJs. La compilation du code est faite automatiquement par le framework javascript, permettant au navigateur de na pas avoir à faire tout le travail. C'est ce qui permet à Svelte d'obtenir des vitesses de chargement imbattables. Cette compilation se fait en temps réel, pendant l'écriture pas besoin de dépendance à installer sur le navigateur. En moyenne svelte aura besoin de 40% de ligne en moins que React pour faire la même chose. Grâce à son approche simple et réduite, la mise à jour/ajout d'élément dans une application est rendue plus simple que REACT moins de chance de mettre en péril la stabilité et la performance de l'application. 
<!-- Partie Marie -->

<!--   Jeremy  -->
Montrer le résultat final, ce qu'on va faire pour apprendre svelte. 
<!-- Jeremy-->

<!-- Jeremy -->
L'installation, avec node + mentionner que l'installation via un fichier zip existe.
Expliquer l'installation via l'indice de commande. Rappeller qu'on doit avoir node installer pour que cela fonctionne.  

- Commande pour forcer l'installation sur un dépôt déjà existant

```
 npx degit sveltejs/template . --force (le point signifie que vous installez dans le dossiers courant take care!) 
```
- Les faire  créer un dossier avec svelte avec un nom cohérent. 
```
 npx degit sveltejs/template my-svelte-project

```
Après avoir fait ça, se mettre dans le dossier et taper 

```
npm install (faire attention de fermer vscode)
```
ensuite
```
npm run dev
```
Se rendre sur l'adresse local host. 
Et voilà le serveur est lancé avec votre premier projet svelte !! 

Installation module svelte ! Car par défault svelte par reconnu sur visual studio pour les autres rappeller de chercher une extension. 
 

On commencer par présenter l'architecture de base du projet svelte. 
<!-- Jeremy -->

<!-- JC -->
Création du component Game.svelte 
import du component dans App.svelte
crée la zone de jeux + titre etc ->, explication de l'import du component, appel du component + explication des props pour définir les dites variables de la gameArea. + création du score. mettre la gameArea en relative mais pas plus de détail. Montrer résultat, la gamearea, titre et score à 0. 
<!-- JC -->


<!-- Bastien -->
Ensuite explication création snake, expliction boucle foreach, expliquer que le serpent est un tableau d'objet avec une direction, chaque objet est un rectangle du snake avec pos x et y. expliquer la condition dans le html du snake explication de la position absolute déclarer l'objet snake dans la component game avec des positions fixe pour montrer que cela s'affiche. Montrer résultat snake immobile pour l'instant.    
<!-- Bastien -->

<!-- Marie -->
Déclaration du component food, mention l'image du repo(souris) explication du random fichier séparé, montrer que le random marche en actualisant la souris va apparaître à des endroits différents.
<!-- Marie -->
 
Expliquer balise svelte windows  ce qu'elle fait, et à quoi elle sert . déclarer la fonction qui décide des mouvements, ne pas oublier la déclaration des variables, et l'attribution des nouvelles valeurs de component . 

-A ce stade ils doivent pouvoir faire bouger le div serpent à l'aide des flèches du clavier.

Montrer le rotate de la tête (plus un principe css que js), montrer la déclaration des classes css qui sont faites directement dans le component. Ne pas oublier de dire que le style déclarer dans le component prend la priorité sur le style déclarer ailleurs. 

- A ce stade les yeux changent de direction selon la touche, la direction choisie.

Montrer function collide(), ne pas oublier la déclaration du collide là où il faut. ne pas oublier de faire score +1 à chaque collide. Et le repop des foods après chaque collide.

Montrer la function avancement automatique du serpent selon, la direction choisies.

Expliquer, montrer la détection de la partie lost, si on dépasse le cadre. Profiter pour expliquer la possibilité de créer des conditions dans le code html avec svelte. Afficher message game lost si le bord est dépassé. 

Ensuite en principe on doit montrer la création, mais qui n'est pas fonctionnelle encore chez nous. Qui va tout permmetre la fonction foreach version svelte.

