# Node Env App (Beginner)

## Install
npm install

## Run
npm run dev

## Environments
Change NODE_ENV in .env:
dev / release / prod

## PostgreSQL setup
Create DB:
dev_db, release_db, prod_db

Table:
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
