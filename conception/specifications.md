# Cahier des charges

## Présentation de l'application EasyTrip

Lorsque que l'on planifie un voyage, notamment en terrain inconnu, on ne sait parfois pas par où commencer ! Après la planification du transport et du logement, les voyageurs aiment parfois aussi savoir par avance ce qu'ils vont faire sur leur lieux de vacances.

--EasyTrip-- s'adresse à toutes les personnes ferrues de voyages et de découvertes. La vocation d'EasyTrip est de centraliser tous les détails liés à l'organisation d'un voyage en une seule interface, qui permettra de sélectionner la destination et les préférences individuelles de l'utilisateur.

Notre utilisateur souhaite visiter des lieux historiques et culturels et se restaurer dans un café avant de repartir faire du shopping ? Ou plutôt passer une journée de détente au bord de la mer et aller à un festival de musique le soir? --EasyTrip-- se chargera de référencer les endroits et activités les plus adaptés aux préférences de l'utilisateur, que ce soit en termes de gastronomie, d'art, de tourisme, d'activités noctures, aquatiques etc.

--EasyTrip-- propose également une fonctionnalité de carnet de voyage (-ou travelogue-). L'utilisateur pourra y ajouter les activités qu'il souhaite faire(-ou a déjà faites-) afin de garder un trace de son organisation et des différentes adresses qui l'intéressent.

## Objectifs principaux du projet

L'objectif principal du projet est de proposer une application permettant aux voyageurs de filtrer les différents lieux et activités en fonction de la destination souhaitée et des préférences de ce dernier. -Pour l'instant-, EasyTrip ne fonctionne que pour la --France--. Une minimap responsive permet également à l'utilisateur une meilleure représentation spatiale et géographiques des lieux qui l'intéressent spécifiquement. L'utilisateur pourra également créer ses propres carnets de voyage où il pourra ajouter et garder en mémoire les adresses qui l'intéressent particulièrement pour son voyage.

### Les points d'intérêts proposés par EasyTrip

- Gastronomie (café, fast-food...)
- Bar (bières, vins...)
- Activités aquatiques (sauna, piscine, parc aquatiques...)
- Histoire et culture (monuments, ruines, châteaux...)
- Art
- Shopping
- Loisirs (cinéma, boîtes de nuit, théâtre...)

## Minimal Viable Product (MVP)

1. France uniquement
2. Filtrage sur les dates de voyage et les points d'intérêts avec implémentation d'une minimap responsive
3. La proximité et le kilométrage sont fixés par défaut. L'utilisateur ne pourra pas encore personnaliser un rayon en km.
4. Fonctionnalité de création de compte et de connexion
5. Création de carnets de voyage

## Choix technologiques

-Back-end- : NodeJs, Express, Postgres, Sequelize

-Sources de données externes- : OpenStreetMap, Leaflet

-Front-end- : React, Redux, SCSS, Semantic-UI

## Potentielles évolutions

1. Version mobile
2. Possibilité de réservation d'appartements/hôtels
3. Organisation de rencontres entre voyageurs via un système de chat par exemple
4. Possibilité de rédiger et de partager des avis généraux sur les voyages grâce à un système de forum
5. Système de note/avis sur des lieux spécifiques
6. Redirection vers des liens permettant d'en savoir plus sur l'histoire de la ville/région visitée
7. Tutoriel avec animation pour résumer les fonctionnalités de l'application à un nouvel utilisateur
8. Inscription/connexion en un clic avec Google, Facebook ou autre

## Répartition des rôles

- -Product Owner- : Mathilde Tuffet
- -Scrum Master & Référent technique front- : Nawal Lofti
- -Scrum Master & Référent technique back- : Sarah Chakra
- -Lead Dev Front- : Michal Puczek
- -Lead Dev Back & Git Master- : Christophe Sundas

## MCD et organisation de la base de données

- Se référer au dossier ``conception/BDD``

## Arborescence et routes de l'application EasyTrip

- Se référer au fichier ``conception/arborescence_routes.md``
