# payimt-device
Ce projet consiste en la création d’une plateforme contenant un porte-monnaie virtuel pour chaque membre de l’école. L’objectif étant de faciliter les transactions entre particuliers, mais également avec les institutions que sont :  La cafétéria Le foyer Le BDE Les club évènementiels

## Comment lancer l'application ?

Dans un premier tempsx clonez le repository dans un dossier local (NomDuProjet par exemple)

Vérifier que NodeJS est installé et lancé sur votre machine (explications : https://github.com/TheryMaxime/payimt-server)
Pour installer Expo, veuillez entrer cette commande:

```bash
npm install -g expo-cli
```

puis ensuite, pour lancer le projet à l'aide d'Expo,

```bash
cd NomDuProjet
npm start
```
Veillez à ce qu'un émulateur/simulateur soit installé et lancé sur votre machine (tuto: https://facebook.github.io/react-native/docs/getting-started)
Une fois Expo lancé, vous allez voir apparaitre une page sur votre navigateur avec des informations sur le metro bundler (informations visibles également sur le terminal).
Vous pouvez lancer l'application sur le device virtuel soit avec la touche 'a' sur l'invite de commande, soit avec l'option "Run on..." sur la page web générée.
L'application va se télécharger depuis votre ordinateur vers votre device et vous pourrez ensuite tester les fonctionnalités.

## Présentation de l'interface utilisateur

Voici dans l'ordre ci-dessous les différents écrans utilisables à cet état d'avancement:

Ecran de connexion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ecran d'accueil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ecran de Shop

![Screenshot_1576168937](https://user-images.githubusercontent.com/46679443/70732934-9fbb8800-1d09-11ea-922a-6aa75f704d91.png)
![Screenshot_1576168953](https://user-images.githubusercontent.com/46679443/70732940-a21de200-1d09-11ea-913b-07b5bb90b071.png)
![Screenshot_1576168963](https://user-images.githubusercontent.com/46679443/70732947-a4803c00-1d09-11ea-9083-6163f26b6778.png)

## Tests 

Pour tester l'application, vous devez entrer un numéro de téléphone valide qui soit lié à un compte utilisateur Lydia lors du Login. 
Une fois le numéro entré, vous pouvez sélectionner des articles et cliquer sur Payer. Si votre numéro est associé au compte Lydia de votre téléphone personnel vous allez recevoir une notification sur l'application Lydia directement. Il vous suffit de refuser la transaction.


## Modifications

Lorsque le code source est modifié, il suffit de le sauvegarder et Expo va automatiquement relancer l'application en appliquant les modifications que vous pourrez voir sur l'émulateur/simulateur.
