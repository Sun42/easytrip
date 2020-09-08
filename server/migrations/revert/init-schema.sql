-- Revert easytrip:init-schema from pg

BEGIN;

DROP TABLE "travelogue" CASCADE;
DROP TABLE "activity" CASCADE;
DROP TABLE "user" CASCADE;
DROP TABLE "category" CASCADE;



COMMIT;
