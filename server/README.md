# Présentation de l'application EasyTrip

Lorsque que l'on planifie un voyage, notamment en terrain inconnu, on ne sait parfois pas par où commencer ! Après la planification du transport et du logement, les voyageurs aiment parfois aussi savoir par avance ce qu'ils vont faire sur leur lieux de vacances. 

**EasyTrip** s'adresse à toutes les personnes ferrues de voyages et de découvertes. La vocation d'EasyTrip est de centraliser tous les détails liés à l'organisation d'un voyage en une seule interface, qui permettra de sélectionner la destination et les préférences individuelles de l'utilisateur. 

Notre utilisateur souhaite visiter des lieux historiques et culturels et se restaurer dans un café avant de repartir faire du shopping ? Ou plutôt passer une journée de détente au bord de la mer et aller à un festival de musique le soir? **EasyTrip** se chargera de référencer les endroits et activités les plus adaptés aux préférences de l'utilisateur, que ce soit en termes de gastronomie, d'art, de tourisme, d'activités noctures, aquatiques etc.

**EasyTrip** propose également une fonctionnalité de carnet de voyage (*ou travelogue*). L'utilisateur pourra y ajouter les activités qu'il souhaite faire(*ou a déjà faites*) afin de garder un trace de son organisation et des différentes adresses qui l'intéressent. 

# Initialisation du projet-voyage

1. Connect to the postgres database with administrator privileges ex : `sudo -i -u postgres` then `psql`
2. Setup role and database 'CREATE ROLE easytrip with LOGIN encrypted PASSWORD '****'; CREATE DATABASE easytrip owner easytrip;'
3. psql -U easytrip -f  psql -U easytrip -f ./data/createDB_script.sql
4. Install sqitch globally
5. To deploy DB content, use the command `sqitch deploy` from `/server`
6. You can revert changes with the command `sqitch revert` from `/server`
7. `cp .env.example .env`
8. configure .env file with the appropriate values
9. `npm install`
10. `npm run start`