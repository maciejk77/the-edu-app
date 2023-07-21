## Getting Started

- Clone repo and run `yarn dev` for dev mode
- Add database instance link to prisma folder in `.env` file ie DATABASE_URL="postgresql://...." (ie Railway.app)
- Init: `npx prisma generate` to generate Prisma Client
- Migration: `npx prisma migrate dev` for DB migration
- Seeding: `npx prisma db seed` for seeding Institutions/Submissions DB tables
- Some data from GraphQL API is rendered on pages `/submissions` and `/subjects` (work in progress)

## Project set up

- Next.js with Typescript
- GraphQL API
- Prisma and PostgreSQL instance (Railway.app)

## Requirements

- List the best institutions to study for a particular project
- Enhance data ie adding COVID-19 stats
- Set up API service to render data to FE (set up. see submissions/subjects pages)
- Set up storage mechanism to store data and add new (rather then JSON static files)
- Display submission data per institution for each year in table/chart
- Display list of subjects and which institutions can you study them at
- Option to add more submissions/institutions etc

## Notes

- Formatting: `npx prisma format` for formatting schema.prisma file
- Preview: `npx prisma studio` for tables preview

## Queries/Mutations

Working API can be tested at `http://localhost:3000/api/graphql`
Copy/paste examples of queries - queriesAndMutations.txt in root folder
