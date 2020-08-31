-- Script de création d'utilisateur et BDD EasyTrip
--CREATE ROLE easytrip WITH LOGIN ENCRYPTED PASSWORD;

-- CREATE DATABASE easytrip OWNER easytrip;

-- Une fois connecté à l'utilisateur et BDD, 1er déploimenet (création de tables + champs conformément au MCD)
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "travelogue" CASCADE;
DROP TABLE IF EXISTS "category" CASCADE; 
DROP TABLE IF EXISTS "activity" CASCADE;


CREATE TABLE "user"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "photo" TEXT
); 

CREATE TABLE "travelogue"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT, 
    "city" TEXT,
    "date_departure" TIMESTAMPTZ,
    "date_return" TIMESTAMPTZ,
    "user_id" INT REFERENCES "user"(id) 
); 

CREATE TABLE "category"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT
);

CREATE TABLE "activity"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL, 
    "information" TEXT, 
    "localisation" TEXT,
    "travelogue_id" INT REFERENCES "travelogue"(id),
    "category_id" INT REFERENCES "category"(id)
); 


