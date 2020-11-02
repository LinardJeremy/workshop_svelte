1 personne présenter svelte grosso merdo framworks (comparer avec react) etc, expliquer l'installation, avec node + mentionner que l'installation via un fichier zip existe.
Expliquer l'installation via l'indice de commande. Rappeller qu'on doit avoir node installer pour que cela fonctionne.  

- Commande pour forcer l'installation sur un dépôt déjà existant

```
 npx degit sveltejs/template . --force (le point signifie que vous installez dans le dossiers courant take care!) 
```


- pour créer un dossier avec svelte
```
 npx degit sveltejs/template my-svelte-project

```
Après avoir fait ça, se mettre dans le dossier et taper 

```
npm install
```
ensuite
```
npm run dev
```
Se rendre sur l'adresse local host. 
Et voilà le serveur est lancé avec votre premier projet svelte !! 

Installation module svelte ! Car par défault svelte par reconnu sur visual studio. 

Ensuite on présente le projet final, ce qu'on va faire. 

On commencer par présenter l'architecture de base du projet svelte. 

Explication crée la zone de jeux. -> permet d'expliquer la déclaration de variable et le "$:"

Ensuite explication création snake + food permet d'expliquer la création des component et leurs déclaration explication de l'export component chaque variable et expliquer l'import. Expliquer comment attribuer nouvelle valeur attention !!!!leur montrer le tips position absolute relative.

- A ce stade ils doivent avoir la game area avec deux div static, l'un pour le serpent l'autre pour la nourriture. 

Création de la function (qu'on leur donne) mais prétexte pour expliquer exporte de function et l'import de function qui est plus particulier. Pour qu'on se souvienne que les components peuvent être utilisé dans d'autres projets. 

- A ce stade ils doivent la div qui apparaît à des endroits alèatoire quand on actualise la page. 

Expliquer balise svelte windows  ce qu'elle fait, et à quoi elle sert . déclarer la fonction qui décide des mouvements, ne pas oublier la déclaration des variables, et l'attribution des nouvelles valeurs de component . 

-A ce stade ils doivent pouvoir faire bouger le div serpent à l'aide des flèches du clavier.

Montrer le rotate de la tête (plus un principe css que js), montrer la déclaration des classes css qui sont faites directement dans le component. Ne pas oublier de dire que le style déclarer dans le component prend la priorité sur le style déclarer ailleurs. 

- A ce stade les yeux changent de direction selon la touche, la direction choisie.

Montrer function collide(), ne pas oublier la déclaration du collide là où il faut. ne pas oublier de faire score +1 à chaque collide. Et le repop des foods après chaque collide.

Montrer la function avancement automatique du serpent selon, la direction choisies.

Expliquer, montrer la détection de la partie lost, si on dépasse le cadre. Profiter pour expliquer la possibilité de créer des conditions dans le code html avec svelte. Afficher message game lost si le bord est dépassé. 

Ensuite en principe on doit montrer la création, mais qui n'est pas fonctionnelle encore chez nous. Qui va tout permmetre la fonction foreach version svelte.

