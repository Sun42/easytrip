-- Deploy easytrip:seeding-data to pg

BEGIN;

INSERT INTO "user" (email, password, name, surname) VALUES
('sarahchloe.chakra@test.com', 'sc', 'Chakra', 'Sarah'),
('test@test.com', 'test', 'Test', 'Test'),
('thrall@orgrimmar.com', 'test','Durotar', 'Thrall'),
('garrosh@hurlenfer.com','test', 'Hurlenfer', 'Garrosh'),
('jaina@portvaillant.com', 'test', 'Portvaillant', 'Jaina'),
('edwin@vancleef.com', 'test', 'Vancleef', 'Edwin'),
('malfurion@hurlorage.com', 'test', 'Hurlorage', 'Malfurion');

INSERT INTO travelogue(name, city, date_departure, date_return, user_id) VALUES
('Roadtrip dans le sud', 'Narbonne', timestamp '2016-06-22', timestamp '2016-07-01', 1),
('Tourisme à Paris', 'Paris', timestamp '2017-05-22', timestamp  '2016-05-30', 1),
('Découverte de la gastronomie Lyonnaise', 'Lyon', timestamp '2017-05-22', timestamp '2016-05-30', 1);

INSERT INTO category(label) VALUES
('Gastronomie'), 
('Randonnée'), 
('Activité aquatique'),
('Promenade'),
('Bar');

INSERT INTO activity(name, information, location, travelogue_id) VALUES
('Auberge du Lion', 'Haute cuisine et grande carte de vins', '{"lat":"42.42", "lon":"04.04"}', 1),
('Aquaparc', 'Piscines et jeux aquatiques pour tous les âges','{"lat":"42.42", "lon":"04.04"}', 1),
('Falaise du malaise', 'Enorme circuit de randonnée pour les plus aguerris','{"lat":"42.42", "lon":"04.04"}', 1);

COMMIT;
