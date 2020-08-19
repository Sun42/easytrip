INSERT INTO user (email, nom, prenom) VALUES
('thrall@orgrimmar.com', 'Durotar', 'Thrall'),
('garrosh@hurlenfer.com', 'Hurlenfer', 'Garrosh'),
('jaina@portvaillant.com', 'Portvaillant', 'Jaina'),
('edwin@vancleef.com', 'Vancleef', 'Edwin'),
('malfurion@hurlorage.com', 'Hurlorage', 'Malfurion');

INSERT INTO carnet(nom, ville, date_depart, date_retour, user_id) VALUES
('Roadtrip dans le sud', 'Narbonne', '2016-06-22', '2016-07-01', 1),
('Tourisme à Paris', 'Paris', '2017-05-22', '2016-05-30', 2),
('Découverte de la gastronomie Lyonnaise', 'Lyon', '2017-05-22', '2016-05-30', 3);

INSERT INTO categorie(nom) VALUES
('Gastronomie'), 
('Randonnée'), 
('Activité aquatique')
('Promenade')
('Bar');

INSERT INTO activites(nom, information, dispo, localisation, carnet_id, categorie_id) VALUES
('Auberge du Lion', 'Haute cuisine et grande carte de vins', '18:00:00', 'lat : 45, lon: 32', 2, 1),
('Aquaparc', 'Piscines et jeux aquatiques pour tous les âges', '09:00:00', 'lat : 95, lon: 12', 1, 3),
('Falaise du malaise', 'Enorme circuit de randonnée pour les plus aguerris', '07:00:00', 'lat : 15, lon: 32', 1, 2);


-- Il faudra rajouter des contraintes sur activites.dispo pour qu'une telle heure de la journée = matin, aprem ou soir 
-- Il faudra faire une migration sur carnet.user_id où l'on va transformer le user_id en not null 



