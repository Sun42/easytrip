-- Deploy easytrip:init-schema to pg

BEGIN;

-- User table

CREATE TABLE "user"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL

); 

-- Travelogue table (carnet de voyage)

CREATE TABLE "travelogue"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT, 
    "city" TEXT,
    "date_departure" TIMESTAMPTZ,
    "date_return" TIMESTAMPTZ,
    "user_id" INT NOT NULL REFERENCES "user"(id) 
); 

-- Category table

CREATE TABLE "category"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT
);

-- Activity table

CREATE TABLE "activity"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL, 
    "information" TEXT, 
    "location" JSON,
    "isFavorite" BOOLEAN DEFAULT false,
    "isDone" BOOLEAN DEFAULT false,
    "travelogue_id" INT NOT NULL REFERENCES "travelogue"(id),
    "category_id" INT REFERENCES "category"(id)
); 


COMMIT;
