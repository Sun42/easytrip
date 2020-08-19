-- Script de création d'utilisateur et BDD EasyTrip
--CREATE ROLE easytrip WITH LOGIN ENCRYPTED PASSWORD;

-- CREATE DATABASE easytrip OWNER easytrip;

-- Une fois connecté à l'utilisateur et BDD, 1er déploimenet (création de tables + champs conformément au MCD)
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "carnet" CASCADE;
DROP TABLE IF EXISTS "categorie" CASCADE; 
DROP TABLE IF EXISTS "activites" CASCADE;


CREATE TABLE "user"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "nom" TEXT,
    "prenom" TEXT,
    "photo" TEXT
); 

CREATE TABLE "carnet"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" TEXT, 
    "ville" TEXT,
    "date_depart" TIMESTAMPTZ,
    "date_retour" TIMESTAMPTZ,
    "user_id" INT REFERENCES "user"(id) 
); 

CREATE TABLE "categorie"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" TEXT
);

CREATE TABLE "activites"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" TEXT NOT NULL, 
    "information" TEXT,
    "dispo" TIME,  
    "localisation" TEXT,
    "carnet_id" INT REFERENCES "carnet"(id),
    "categorie_id" INT REFERENCES "categorie"(id)
); 


