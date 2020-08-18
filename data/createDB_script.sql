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
    "nom" TEXT, 
    "date_depart" TIMESTAMPTZ,
    "date_retour" TIMESTAMPTZ,
    "carnet_activites" -- FK? 
); 

CREATE TABLE categorie(
    "nom" TEXT
);

CREATE TABLE activites(
    "nom" TEXT NOT NULL, 
    "information" TEXT,
    "date_debut" TIMESTAMPTZ,
    "date_fin" TIMESTAMPTZ, 
    "localisation" -- quel datatype ?
); 

