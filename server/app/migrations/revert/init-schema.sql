-- Revert easytrip:init-schema from pg

BEGIN;

DROP TABLE "user";
DROP TABLE "travelogue";
DROP TABLE "category";
DROP TABLE "activity";


COMMIT;
