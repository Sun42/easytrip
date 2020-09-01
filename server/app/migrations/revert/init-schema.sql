-- Revert easytrip:init-schema from pg

BEGIN;

DROP TABLE "travelogue";
DROP TABLE "activity";
DROP TABLE "user";
DROP TABLE "category";



COMMIT;
