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

  - working GraphQL endpoint, institutions, submissions queries
  - STATUS: more work here atm

- Enhance data ie adding COVID-19 stats

  - STATUS: no work here as of yet

- Set up API service to render data to FE (set up. see submissions/subjects pages)

  - set up GraphQL service, ApolloServer/Client which fetches data via gql queries, caches them etc.
  - STATUS: more work to be done on queries

- Set up storage mechanism to store data and add new (rather then JSON static files)

  - STATUS: completed, set up PostgreSQL (Railway.app) DB instance, seed with data
  - some refactor needed

- Display submission data per institution for each year in table/chart

  - STATUS: completed, simple table of submissions data displayed on `/submissions` page

- Display list of subjects and which institutions can you study them at

  - STATUS: started with dropdown menu (unique list of subjects) on `/subjects`
  - continue with table of data for selection plus some more work on queries needed

- Option to add more submissions/institutions etc

  - STATUS: no work here as yet
  - this will be added later, need to create Mutations on GraphQL, useQuery hook will be used for FE
  - form to be created to collect data to be send to DB

## To do

- Charts?
- Protect routes?
- Authentication?
- Tests?

## Notes

- Formatting: `npx prisma format` for formatting schema.prisma file
- Preview: `npx prisma studio` for tables preview

## Queries/Mutations

Working API can be tested at `http://localhost:3000/api/graphql`
Copy/paste examples of queries

- All items

```
{
  institutions {
    id
    name
    address
    country
    region
  }
}
```

```
{
  subjects {
    id
    name
    academic_papers
    students_total
    student_rating
    submissionId
  }
}
```

```
{
  submissions {
    id
    institution_id
    year
    students_total
    undergraduates_total
    postgraduates_total
    staff_total
    academic_papers
    institution_income
  }
}
```

- Item by ID

```
query {
  institution(id: "DEA4606B-4A21-D497-40E9-A5FB7589B536") {
    id
    name
    address
    country
    region
  }
}
```
