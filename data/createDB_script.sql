-- Script de création d'utilisateur et BDD EasyTrip
CREATE ROLE easytrip WITH LOGIN ENCRYPTED PASSWORD;

CREATE DATABASE easytrip OWNER easytrip;

-- Une fois connecté à l'utilisateur et BDD, 1er déploimenet (création de tables + champs conformément au MCD)
CREATE TABLE user(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "nom" TEXT,
    "prenom" TEXT,
    "photo" VARBINARY(max)
); 

CREATE TABLE carnet(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" TEXT, 
    "ville" TEXT,
    "date_depart" TIMESTAMPTZ,
    "date_retour" TIMESTAMPTZ,
    "user_id" INT REFERENCES "user"(id) -- Il faudra faire une migration où l'on va transformer le user_id en not null 
); 

CREATE TABLE categorie(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" TEXT
);

CREATE TABLE activites(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" TEXT NOT NULL, 
    "information" TEXT,
    "dispo" TIME, -- Il faudra rajouter des contraintes pour qu'une telle heure de la journée = matin, aprem ou soir  
    "localisation" TEXT,
    "carnet_id" INT REFERENCES "carnet"(id),
    "categorie_id" INT REFERENCES "categorie"(id)
); 


