-- Revert easytrip:seeding-data from pg

BEGIN;

TRUNCATE TABLE "travelogue" CASCADE;
TRUNCATE TABLE "activity" CASCADE;
TRUNCATE TABLE "user" CASCADE;
TRUNCATE TABLE "category" CASCADE;

COMMIT;
