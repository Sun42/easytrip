INSERT INTO "user" (email, password, name, surname) VALUES
('test@ŧest.com', 'test', 'Test', 'Test'),
('thrall@orgrimmar.com', 'test','Durotar', 'Thrall'),
('garrosh@hurlenfer.com','test', 'Hurlenfer', 'Garrosh'),
('jaina@portvaillant.com', 'test', 'Portvaillant', 'Jaina'),
('edwin@vancleef.com', 'test', 'Vancleef', 'Edwin'),
('malfurion@hurlorage.com', 'test', 'Hurlorage', 'Malfurion');

INSERT INTO travelogue(name, city, date_departure, date_return, user_id) VALUES
('Roadtrip dans le sud', 'Narbonne', '2016-06-22', '2016-07-01', 1),
('Tourisme à Paris', 'Paris', '2017-05-22', '2016-05-30', 2),
('Découverte de la gastronomie Lyonnaise', 'Lyon', '2017-05-22', '2016-05-30', 3);

INSERT INTO category(label) VALUES
('Gastronomie'), 
('Randonnée'), 
('Activité aquatique'),
('Promenade'),
('Bar');

INSERT INTO activity(name, information, localisation, travelogue_id, category_id) VALUES
('Auberge du Lion', 'Haute cuisine et grande carte de vins', 'lat : 45, lon: 32', 2, 1),
('Aquaparc', 'Piscines et jeux aquatiques pour tous les âges','lat : 95, lon: 12', 1, 3),
('Falaise du malaise', 'Enorme circuit de randonnée pour les plus aguerris','lat : 15, lon: 32', 1, 2);




-- Il faudra faire une migration sur carnet.user_id où l'on va transformer le user_id en not null 



