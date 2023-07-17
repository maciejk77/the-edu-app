## Getting Started

Clone repo and run `yarn dev` for dev mode

## Project set up

- Next.js with Typescript
- GraphQL API
- Prisma and PostgreSQL instance (Railway.app)

## To do

- More on GraphQL API
- Table layout for `submissions` page
- Filtering and displaying more data
- Adding new data to collection (DB seed)
- Charts
- Protect routes?
- Authentication?
- Tests?

## Notes

- Init: `npx prisma generate` to generate Prisma Client
- Migration: `npx prisma migrate dev` for DB migration
- Seeding: `npx prisma db seed` for seeding Institutions/Submissions DB tables
- Formatting: `npx prisma format` for formatting schema.prisma file
- Preview: `npx prisma studio` for tables preview
- GraphQL data is rendered on pages `/submissions` and `/subjects`

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
