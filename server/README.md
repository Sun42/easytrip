# projet-voyage

1. Connect to the postgres database with administrator privileges ex : `sudo -i -u postgres` then `psql`
2. Setup role and database 'CREATE ROLE easytrip with LOGIN encrypted PASSWORD '****'; CREATE DATABASE easytrip owner easytrip;'
3. psql -U easytrip -f  psql -U easytrip -f ./data/createDB_script.sql
4. `cp .env.example .env`
5. configure .env file with the appropriate values
6. `npm install`
7. `npm run start`
